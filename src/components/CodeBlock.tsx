"use client";

import { useMemo, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-core";

// Dépendances de TSX / JSX (ordre important)
import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";

// Autres langages
import "prismjs/components/prism-css";
import "prismjs/components/prism-bash";

type Mode = "use" | "npm" | "css";

type UseLanguage = "tsx" | "ts" | "js";

type Props = {
    npm?: string;
    use: string;
    css?: string;

    // langage utilisé pour le code "use"
    useLanguage?: UseLanguage;
};

export default function CodeBlock({ npm, use, css, useLanguage = "tsx" }: Props) {
    console.log("%c⧭", "color: #e50000", use);
    // choisir un onglet par défaut intelligent
    const defaultMode: Mode = use ? "use" : npm ? "npm" : "css";

    const [mode, setMode] = useState<Mode>(defaultMode);

    const activeBtn =
        "rounded-lg border border-slate-700 bg-indigo-950 px-3 py-1 text-xs text-emerald-100 transition";
    const inactiveBtn =
        "rounded-lg border border-white/10 px-3 py-1 text-xs transition hover:bg-white/10";

    // contenu affiché selon l’onglet
    const content = useMemo(() => {
        if (mode === "npm") return npm ?? "";
        if (mode === "css") return css ?? "";
        return use ?? "";
    }, [mode, npm, css, use]);

    // langage Prism selon l’onglet
    const language = useMemo(() => {
        if (mode === "npm") return "bash";
        if (mode === "css") return "css";
        // "ts" => "typescript" pour Prism
        if (useLanguage === "ts") return "typescript";
        if (useLanguage === "js") return "javascript";
        return "tsx";
    }, [mode, useLanguage]);

    // numéros de lignes (basés sur le contenu brut)
    const lines = useMemo(() => (content ? content.split("\n") : [""]), [content]);

    // code transformé en HTML Prism
    const highlightedHtml = useMemo(() => {
        if (!content) return "";

        const grammar =
            Prism.languages[language] ?? Prism.languages.javascript ?? Prism.languages.clike;

        return Prism.highlight(content, grammar, language);
    }, [content, language]);

    // éviter de rester sur un onglet qui n'existe pas
    // (par exemple si tu changes d'animation et qu'il n'y a plus de CSS)
    const canUse = Boolean(use);
    const canNpm = Boolean(npm);
    const canCss = Boolean(css);

    return (
        <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-lg shadow-slate-900/40">
            {/* Barre du haut */}
            <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-3">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>

                <div className="flex items-center gap-2">
                    {/* Toggle */}
                    {canUse && (
                        <button
                            type="button"
                            onClick={() => setMode("use")}
                            className={mode === "use" ? activeBtn : inactiveBtn}
                        >
                            Utilisation
                        </button>
                    )}

                    {canNpm && (
                        <button
                            type="button"
                            onClick={() => setMode("npm")}
                            className={mode === "npm" ? activeBtn : inactiveBtn}
                        >
                            npm
                        </button>
                    )}

                    {canCss && (
                        <button
                            type="button"
                            onClick={() => setMode("css")}
                            className={mode === "css" ? activeBtn : inactiveBtn}
                        >
                            CSS
                        </button>
                    )}

                    {/* Copier */}
                    <button
                        type="button"
                        className="rounded-lg border border-white/10 px-3 py-1 text-xs hover:bg-white/10"
                        onClick={() => content && navigator.clipboard.writeText(content)}
                        disabled={!content}
                    >
                        Copier
                    </button>
                </div>
            </div>

            {/* Code + numéros de lignes */}
            <div className="scrollbar-none flex h-full overflow-auto font-mono text-sm leading-6">
                {/* Colonne numéros */}
                <div className="border-r border-white/10 px-4 py-5 text-right text-white/30 select-none">
                    {lines.map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                {/* Code Prism */}
                <pre className="min-w-0 p-5">
                    <code
                        className={`language-${language} whitespace-pre`}
                        // Prism renvoie du HTML avec des spans, on l’injecte
                        dangerouslySetInnerHTML={{
                            __html: highlightedHtml || "// Aucun code disponible",
                        }}
                    />
                </pre>
            </div>
        </div>
    );
}
