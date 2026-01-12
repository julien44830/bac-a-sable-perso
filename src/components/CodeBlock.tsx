"use client";

type Props = {
  code: string;
};

export default function CodeBlock({ code }: Props) {
  return (
    <div className="w-full h-full rounded-2xl border border-white/10 bg-black/30 shadow-lg shadow-slate-900/40 overflow-hidden">
      {/* Barre du haut */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>

        <button
          type="button"
          className="text-xs px-3 py-1 rounded-lg border border-white/10 hover:bg-white/10"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          Copier
        </button>
      </div>

      {/* Code */}
      <pre className="h-full p-5 overflow-auto scrollbar-none text-sm leading-6">
        <code className="whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
