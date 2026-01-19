/**
 * Unified single cursor with combined visual effects and smooth animation
 */

"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";

function getRekt(el: HTMLElement) {
  if (el.classList.contains("cursor-can-hover"))
    return el.getBoundingClientRect();
  else if (el.parentElement?.classList.contains("cursor-can-hover"))
    return el.parentElement.getBoundingClientRect();
  else if (
    el.parentElement?.parentElement?.classList.contains("cursor-can-hover")
  )
    return el.parentElement.parentElement.getBoundingClientRect();
  return null;
}

function UnifiedCursor() {
  const pathname = usePathname();
  const isBlogPost = pathname.startsWith("/blogs/") && pathname !== "/blogs";
  const isMobile = useMediaQuery("(max-width: 768px)");

  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorMoved, setCursorMoved] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorSize, setCursorSize] = useState(50);

  // Smooth following state
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>();

  // Smooth animation loop for position following
  const updateCursorPosition = useCallback(() => {
    if (!cursorRef.current) return;

    // Light interpolation for smooth following (0.4 = fast but smooth)
    posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.4;
    posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.4;

    // Apply position with smooth transform
    cursorRef.current.style.left = posRef.current.x + "px";
    cursorRef.current.style.top = posRef.current.y + "px";

    animFrameRef.current = requestAnimationFrame(updateCursorPosition);
  }, []);

  useEffect(() => {
    if (isMobile || isBlogPost) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      if (!cursorMoved) setCursorMoved(true);

      // Update target position
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      // Start animation loop if not running
      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(updateCursorPosition);
      }

      // Hover detection
      const el = e.target as HTMLElement;
      const hoverElemRect = getRekt(el);

      if (hoverElemRect) {
        setIsHovering(true);
        setCursorSize(Math.max(el.offsetWidth, el.offsetHeight) + 20);
      } else {
        setIsHovering(false);
        setCursorSize(50);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    animFrameRef.current = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isMobile, isBlogPost, cursorMoved, updateCursorPosition]);

  if (isMobile || isBlogPost || !cursorMoved) return null;

  return (
    <>
      <style>{`
        @keyframes cursorBreathe {
          0%, 100% {
            box-shadow: inset 0 0 10px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.15);
          }
          50% {
            box-shadow: inset 0 0 8px rgba(0,0,0,0.15), 0 0 24px rgba(0,0,0,0.2);
          }
        }
        
        #unified-cursor {
          transition: width 0.3s ease-out, height 0.3s ease-out, border-radius 0.3s ease-out;
        }
        
        #unified-cursor.breathing {
          animation: cursorBreathe 3s ease-in-out infinite;
        }
      `}</style>
      <div
        ref={cursorRef}
        id="unified-cursor"
        className={`fixed left-0 top-0 rounded-full z-[999] pointer-events-none will-change-transform ${
          !isHovering ? "breathing" : ""
        }`}
        style={{
          width: cursorSize,
          height: cursorSize,
          transform: `translate(-50%, -50%) ${isHovering ? "scale(1.1)" : "scale(1)"}`,
          // Unified cursor visual: small dot + glow shadow
          background: "radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,0))",
          boxShadow:
            "inset 0 0 10px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.15)",
          backdropFilter: "invert(100%)",
          border: "1px solid rgba(0,0,0,0.1)",
          transitionProperty: "transform",
          transitionDuration: "0.15s",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
    </>
  );
}

export default UnifiedCursor;
