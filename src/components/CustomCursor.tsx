import { useState, useEffect, useRef } from "react";

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (rafId.current === null) {
        const loop = () => {
          ringX.current += (targetX.current - ringX.current) * 0.2;
          ringY.current += (targetY.current - ringY.current) * 0.2;
          if (ringRef.current) {
            ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0) translate(-50%, -50%)`;
          }
          rafId.current = requestAnimationFrame(loop);
        };
        rafId.current = requestAnimationFrame(loop);
      }
    };

    const updateCursorType = (e: MouseEvent) => {
      const hoveredElement = e.target as Element | null;
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(
          computedStyle.cursor === "pointer" ||
          hoveredElement.tagName === "A" ||
          hoveredElement.tagName === "BUTTON" ||
          hoveredElement.closest("a") !== null ||
          hoveredElement.closest("button") !== null
        );
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursorType);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursorType);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
      >
        <div
          className={`rounded-full bg-white transition-all duration-150 ease-out ${
            isClicking ? "w-3 h-3" : isPointer ? "w-4 h-4" : "w-2 h-2"
          }`}
        />
      </div>

      {/* Cursor ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      >
        <div
          className={`rounded-full border-2 border-white/80 transition-all duration-200 ease-out ${
            isClicking ? "w-8 h-8 border-primary" : isPointer ? "w-12 h-12 border-primary/60" : "w-8 h-8"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
