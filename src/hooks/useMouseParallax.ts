// src/hooks/useMouseParallax.ts
import { useState, useEffect, useCallback } from "react";

export interface ParallaxState {
  translateX: number;
  translateY: number;
  rotateX: number;
  rotateY: number;
}

// clamp movement inside safe radius
function clampMovement(x: number, y: number, limit: number) {
  const distance = Math.sqrt(x * x + y * y);
  if (distance > limit) {
    const ratio = limit / distance;
    return { x: x * ratio, y: y * ratio };
  }
  return { x, y };
}

export function useMouseParallax() {
  const [p, setP] = useState<ParallaxState>({
    translateX: 0,
    translateY: 0,
    rotateX: 0,
    rotateY: 0,
  });

  const handleMove = useCallback((e: MouseEvent) => {
    const w = window.innerWidth / 2;
    const h = window.innerHeight / 2;

    // ⚡ FAST, RESPONSIVE, NON-LAGGY MOVEMENT
    const speed = 0.45;

    let x = (e.clientX - w) * speed;
    let y = (e.clientY - h) * speed;

    // prevents background edge gaps
    const maxShift = Math.min(w, h) * 0.18;
    const safe = clampMovement(x, y, maxShift);

    const tiltStrength = 0.05;

    setP({
      translateX: safe.x,
      translateY: safe.y,
      rotateX: -safe.y * tiltStrength,
      rotateY: safe.x * tiltStrength,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return p;
}

export function getUnifiedTransform(p: ParallaxState): React.CSSProperties {
  return {
    transform: `
      perspective(1500px)
      translate3d(${p.translateX}px, ${p.translateY}px, 0)
      rotateX(${p.rotateX}deg)
      rotateY(${p.rotateY}deg)
    `,
    transition: "none",
willChange: "transform",
 // ⚡ MUCH FASTER
  };
}
