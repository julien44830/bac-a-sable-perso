import Magnet from "./Magnet";

export default function MagnetComponent() {
    return (
        <div className="z-10 flex h-full w-full items-center justify-center rounded-2xl border border-amber-50 p-4">
            <Magnet padding={50} disabled={false} magnetStrength={5}>
                <p className="rounded-xl border bg-slate-800 p-2">Survol moi</p>
            </Magnet>
        </div>
    );
}
