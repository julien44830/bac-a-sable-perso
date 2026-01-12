import Prism from "./Prism";

export default function PrismComponent() {
  return (
    <Prism
      animationType="rotate"
      timeScale={0.2}
      height={2}
      baseWidth={4.5}
      scale={3.6}
      hueShift={0}
      colorFrequency={1}
      noise={0}
      glow={0.5}
    />
  );
}
