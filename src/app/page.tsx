"use client";
import { useEffect, useRef, useState } from "react";
import MenuListe from "@/components/MenuListe";
import CodeBlock from "@/components/CodeBlock";
import DemoRenderer from "@/components/DemoRenderer";
import { codeByEffet } from "./data/snippets";
import list from "./data/animations";

export default function Home() {
    const [selectEffet, setSelectEffet] = useState<string>(list[0]);

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [isPourquoiOpen, setIsPourquoiOpen] = useState(false);

    const scrollToSlide = (index: number) => {
        const slider = sliderRef.current;
        if (!slider) return;

        const slideWidth = slider.clientWidth; // Largeur visible du slider
        slider.scrollTo({
            left: index * slideWidth,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        // Fermer la modale avec Échap
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsPourquoiOpen(false);
        };

        if (isPourquoiOpen) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isPourquoiOpen]);

    return (
        <div className="flex h-screen flex-col text-white">
            <header className="h-20 flex-none">
                <nav className="flex h-full w-full items-center justify-between border-b border-yellow-700 px-6">
                    <h1>Composants React</h1>

                    <ul className="flex gap-4">
                        <li>
                            <a
                                href="#demo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSlide(0); // Demo
                                }}
                            >
                                Demo
                            </a>
                        </li>

                        <li>
                            <a
                                href="#source"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSlide(1); // Source
                                }}
                            >
                                Source
                            </a>
                        </li>

                        <li>
                            <button
                                type="button"
                                className="underline"
                                onClick={() => setIsPourquoiOpen(true)}
                            >
                                Pourquoi
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="flex flex-1 flex-row gap-6 overflow-hidden p-6">
                <section className="scrollbar-none w-64 shrink-0 overflow-auto mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_50%,transparent_100%)] p-4 py-20 [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_70%,transparent_100%)]">
                    <p className="mb-5">choisi ton animation</p>
                    <MenuListe Liste list={list} setSelectEffet={setSelectEffet} />
                </section>

                <div className="relative flex-1 overflow-hidden">
                    {/* Slider Demo/Source */}
                    <div
                        ref={sliderRef}
                        className="scrollbar-none /* Masque gauche + droite (fondu court) */ flex h-full snap-x snap-mandatory flex-row gap-10 overflow-x-auto scroll-smooth mask-[linear-gradient(to_right,transparent_0%,black_20%,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_92%,transparent_100%)]"
                    >
                        <section id="demo" className="h-full w-full shrink-0 snap-start p-10">
                            <div className="h-full w-full rounded-2xl border border-white/10 bg-slate-950 shadow-lg shadow-slate-800">
                                <DemoRenderer selectEffet={selectEffet} />
                            </div>
                        </section>

                        <section
                            id="source"
                            className="h-full w-full shrink-0 snap-start p-10 pr-40"
                        >
                            <CodeBlock
                                code={
                                    codeByEffet[selectEffet] ??
                                    "// Sélectionne une animation dans la liste..."
                                }
                            />
                        </section>
                    </div>

                    {/* Rideau gauche */}
                    <div className="from-bg-slate-950 pointer-events-none absolute top-0 left-0 h-full w-16 bg-linear-to-r to-transparent" />

                    {/* Rideau droite */}
                    <div className="from-bg-slate-950 pointer-events-none absolute top-0 right-0 h-full w-16 bg-linear-to-l to-transparent" />
                </div>
            </main>

            <footer className="flex h-16 flex-none items-center justify-center">
                <p>ici pied de page avec la source</p>
            </footer>

            {/* Modale Pourquoi */}
            {isPourquoiOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="pourquoi-title"
                >
                    {/* Overlay : clic = fermer */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setIsPourquoiOpen(false)}
                    />

                    {/* Contenu modale */}
                    <div className="relative z-10 w-[min(720px,92vw)] rounded-xl border border-white/10 bg-slate-950 p-6 shadow-xl">
                        <div className="flex items-start justify-between gap-4">
                            <h2 id="pourquoi-title" className="text-xl font-semibold">
                                Pourquoi
                            </h2>

                            <button
                                type="button"
                                className="rounded-md border border-white/20 px-3 py-1 hover:bg-white/10"
                                onClick={() => setIsPourquoiOpen(false)}
                                aria-label="Fermer la modale"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="mt-4 space-y-3 text-white/90">
                            <p>Ici tu mets le contenu “pourquoi ce site”.</p>
                            <p>
                                Tu peux expliquer le but, les technos, ou afficher une petite doc.
                            </p>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="button"
                                className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/20"
                                onClick={() => setIsPourquoiOpen(false)}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
