import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Tran-Ngo - Designer, Builder, Mentor",
  description: "Portfolio of Nguyen Tran-Ngo, a senior product designer at Scaleway building European AI & Cloud technologies.",
  keywords: ["Product Designer", "UI/UX", "AI", "Cloud", "Scaleway", "Portfolio"],
  authors: [{ name: "Nguyen Tran-Ngo" }],
  openGraph: {
    title: "Nguyen Tran-Ngo - Designer, Builder, Mentor",
    description: "Portfolio of Nguyen Tran-Ngo, a senior product designer at Scaleway.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
