import type { Metadata } from "next";
import "./globals.css";

// Font imports moved to layout to avoid CSS @import ordering issues
const fontImports = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Alice&display=swap');
`;

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Alice&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
