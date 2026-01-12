import type { Metadata } from "next";
import Galaxy from "../components/Galaxy";
import "./globals.css";

const url = "http://localhost:3000/";

export const metadata: Metadata = {
    metadataBase: new URL(url),
    title: { default: "bac à sable", template: "%s | My Site" },
    description: "divers test d'intégration",
    icons: {
        icon: "/favicon.png",
    },
    alternates: {
        canonical: url,
    },
    openGraph: {
        title: "bac à sabl",
        description:
            "bienvenu sur un site de plein de test d'intégration de composant front principalement, surùent des pépites a venir sur  ",
        url: url,
        siteName: "bac à sable",
        images: [{ url: url + "/icon.png", width: 800, height: 600 }],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body className="relative min-h-screen overflow-hidden ">
                {/* Layer fond */}
                <div className="absolute inset-0 -z-10 bg-slate-950">
                    <Galaxy
                        mouseRepulsion={true}
                        mouseInteraction={true}
                        density={1.5}
                        glowIntensity={0.1}
                        saturation={0.01}
                        hueShift={140}
                        rotation={[0.1, 0.1]}
                        rotationSpeed={0}
                        starSpeed={0.1}
                        speed={0.1}
                        twinkleIntensity={0}
                        transparent={true}
                    />
                </div>

                {/* Layer contenu */}
                <div className="relative z-10">{children}</div>
            </body>
        </html>
    );
}
