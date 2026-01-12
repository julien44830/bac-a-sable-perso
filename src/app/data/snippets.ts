export type EffectCategory =
  | "shader"
  | "background"
  | "mouse"
  | "scroll"
  | "transition"
  | "ui"
  | "other";

export type EffectDoc = {
  npm: string; // commande d'installation (string vide si rien)
  use: string; // code d'intégration
  source: string; // clé/label de la source (ex: "react-bits", "interne")
  category: EffectCategory; // catégorisation
  css?: string; // code CSS additionnel (optionnel)
};

export const effectByName: Record<string, EffectDoc> = {
  Prism: {
    npm: `npx shadcn@latest add @react-bits/Prism-JS-CSS`,
    use: `import Prism from './Prism';

export default function Demo() {
  return (
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
    </div>
  );
}`,
    source: "react-bits",
    category: "shader",
  },

  "liquid Ether": {
    npm: `npx shadcn@latest add @react-bits/Liquid-Ether`,
    use: `import LiquidEther from "../components/liquidEther/LiquidEther";

export default function Demo() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <LiquidEther />
    </div>
  );
}`,
    source: "react-bits",
    category: "shader",
    css: `.liquid-ether-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    touch-action: none;
  }`
  },

  "background animé": {
    npm: `npm i ogl`,
    use: `import Galaxy from "./Galaxy";

export default function Demo() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Galaxy />
    </div>
  );
}`,
    source: "interne",
    category: "background",
  },

  "Magnet": {
    npm: `npx shadcn@latest add @react-bits/Magnet-JS-CSS`,
    use: `import Magnet from './Magnet'

<Magnet padding={50} disabled={false} magnetStrength={50}>
  <p>Star React Bits on GitHub!</p>
</Magnet>`,
    source: "https://reactbits.dev/animations/magnet",
    category: "mouse",
  },

  "animation au scroll": {
    npm: ``,
    use: `// Exemple : animation déclenchée au scroll (à adapter)
useEffect(() => {
  const onScroll = () => console.log("scroll");
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);`,
    source: "interne",
    category: "scroll",
  },
};
