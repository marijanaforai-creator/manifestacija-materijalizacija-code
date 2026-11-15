import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manifestacija — Materijalizacija Code",
  description: "Prostor za samospoznaju, finansijski razvoj i svesnu realizaciju ciljeva."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}