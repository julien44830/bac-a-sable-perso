"use client";

import type { Effet } from "@/app/data/animations";

type Props = {
    list: readonly Effet[];
    selectEffet: Effet;
    setSelectEffet: (value: Effet) => void;
};

export default function MenuListe({ list, selectEffet, setSelectEffet }: Props) {
    return (
        <ul className="flex flex-col">
            {list.map((item) => {
                const isActive = item === selectEffet;

                return (
                    <li
                        key={item}
                        className={`border-l border-white/50 ${
                            isActive ? "border-l-4 border-b-white" : "text-white/90"
                        }`}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectEffet(item)}
                            className={[
                                // bouton pleine largeur, aligné à gauche
                                "w-full px-3 py-2 text-left transition",
                                // accessibilité clavier (focus visible)
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70",
                                // état actif
                                isActive
                                    ? "font-bold tracking-widest text-white text-shadow-2xs text-shadow-white/50"
                                    : ",",
                            ].join(" ")}
                        >
                            <span className="flex items-center justify-between gap-3">
                                <span className="truncate">{item}</span>
                            </span>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
