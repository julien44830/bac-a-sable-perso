import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://example.com"),
    title: { default: "bac à sable", template: "%s | My Site" },
    description: "divers test d'intégration",
    icons: {
        icon: "/favicon.png",
    },
    alternates: {
        canonical: "https://example.com",
    },
    openGraph: {
        title: "bac à sabl",
        description:
            "bienvenu sur un site de plein de test d'intégration de composant front principalement, surùent des pépites a venir sur  ",
        url: "https://example.com",
        siteName: "bac à sable",
        images: [{ url: "https://example.com/og.png" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
