"use client";

import dynamic from "next/dynamic";
import type { List } from "@/app/data/animations";

// ✅ Import dynamique (souvent nécessaire avec WebGL / canvas)
const PrismComponent = dynamic(
  () => import("@/components/prism/PrismComponent"),
  {
    ssr: false,
  },
);

const LiquidEtherComponent = dynamic(
  () => import("@/components/liquidEther/LiquidEtherComponent"),
  { ssr: false },
);

type Props = {
  selectEffet: List;
};

export default function DemoRenderer({ selectEffet }: Props) {
  // Commentaire en français : on choisit quel composant afficher selon l’effet sélectionné
  switch (selectEffet) {
    case "Prism":
      return <PrismComponent />;

    case "liquid Ether":
      return <LiquidEtherComponent />;

    default:
      return (
        <div className="w-full h-full rounded-2xl border border-amber-50 p-4">
          <p>Démo à venir pour : {selectEffet}</p>
        </div>
      );
  }
}
