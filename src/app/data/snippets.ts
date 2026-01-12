export const codeByEffet: Record<string, string> = {

  "Prism": `import Prism from './Prism';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Prism
    animationType="rotate"
    timeScale={0.5}
    height={3.5}
    baseWidth={5.5}
    scale={3.6}
    hueShift={0}
    colorFrequency={1}
    noise={0.5}
    glow={1}
  />
</div>`,

  "liquid Ether": `import LiquidEther from "../components/liquidEther/LiquidEther";

export default function Demo() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <LiquidEther />
    </div>
  );
}`,


  "background animé": `import Galaxy from "./Galaxy";

export default function Demo() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Galaxy />
    </div>
  );
}`,

  "animation de souris": `import Galaxy from "./Galaxy";

export default function Demo() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Galaxy mouseInteraction={true} mouseRepulsion={true} />
    </div>
  );
}`,

  "animation au scroll": `// Exemple: animation déclenchée au scroll (à adapter)
useEffect(() => {
  const onScroll = () => console.log("scroll");
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);`,
};
