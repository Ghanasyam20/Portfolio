import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

// Force this to run only in Node (not edge, not build-time nonsense)
export const runtime = "nodejs";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    // Parse body
    const body = await req.json();

    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);

    if (!zodSuccess) {
      return Response.json({ error: zodError?.message }, { status: 400 });
    }

    // If env var is missing, fail gracefully instead of nuking the build
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not set. Email sending disabled.");
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create Resend only when key exists
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      return Response.json({ resendError }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    console.error("API /send error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
