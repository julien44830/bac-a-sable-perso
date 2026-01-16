import { useEffect, useMemo, useRef, useState } from "react";

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    // Commentaire en français : si désactivé, on ne branche aucun listener
    if (disabled) return;

    const handleMouseMove = (e) => {
      const el = magnetRef.current;
      if (!el) return;

      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      const inZone =
        distX < width / 2 + padding && distY < height / 2 + padding;

      if (inZone) {
        // Commentaire en français : on active l'effet et on calcule l'offset
        setIsActive(true);

        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        // Commentaire en français : hors zone, on reset
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, disabled, magnetStrength]);

  // Commentaire en français : quand disabled, on force visuellement un reset sans setState
  const effectiveIsActive = disabled ? false : isActive;
  const effectivePosition = disabled ? { x: 0, y: 0 } : position;

  const transitionStyle = useMemo(
    () => (effectiveIsActive ? activeTransition : inactiveTransition),
    [effectiveIsActive, activeTransition, inactiveTransition]
  );

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${effectivePosition.x}px, ${effectivePosition.y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
