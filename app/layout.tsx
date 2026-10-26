import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buildora — Camino dorado 1",
  description:
    "Frontend base del camino dorado 1 de Buildora (Next.js + Tailwind). El backend vive en buildora-backend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
