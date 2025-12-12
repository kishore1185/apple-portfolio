import cabinBg from '@/assets/cabin-forest-bg.jpg';

interface ParallaxBackgroundProps {
  parallax: {
    rotateX: number;
    rotateY: number;
    translateX: number;
    translateY: number;
  };
}

export function ParallaxBackground({ parallax }: ParallaxBackgroundProps) {
  const bgStyle: React.CSSProperties = {
    transform: `
      scale(1.45)
      translate3d(${parallax.translateX}px, ${parallax.translateY}px, 0)
      rotateX(${parallax.rotateX}deg)
      rotateY(${parallax.rotateY}deg)
    `,
    transition: "transform 5ms linear",
  };

  return (
    <div className="absolute inset-0 z-0">
      {/* PURE Background Image ⬇ — no tint, no overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          ...bgStyle,
          backgroundImage: `url(${cabinBg})`,
        }}
      />

      {/* ❌ Removed warm overlay */}
      {/* ❌ Removed vignette */}
      {/* ❌ Removed light rays overlay */}
    </div>
  );
}
