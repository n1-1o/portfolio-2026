import type { Metadata } from "next";
import "./globals.css";
import { SidebarNav } from "@/components/layout/SidebarNav";

export const metadata: Metadata = {
  title: {
    default: "Nguyen Tran-Ngo - Designer, Builder, Mentor",
    template: "%s | Nguyen Tran-Ngo",
  },
  description: "Portfolio of Nguyen Tran-Ngo, a senior product designer at Scaleway building European AI & Cloud technologies.",
  keywords: ["Product Designer", "UI/UX", "AI", "Cloud", "Scaleway", "Portfolio"],
  authors: [{ name: "Nguyen Tran-Ngo" }],
  creator: "Nguyen Tran-Ngo",
  metadataBase: new URL("https://nguyentran-ngo.design"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nguyen Tran-Ngo - Designer, Builder, Mentor",
    description: "Portfolio of Nguyen Tran-Ngo, a senior product designer at Scaleway.",
    type: "website",
    locale: "en_US",
    url: "https://nguyentran-ngo.design",
    siteName: "Nguyen Tran-Ngo Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nguyen Tran-Ngo Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Tran-Ngo - Designer, Builder, Mentor",
    description: "Portfolio of Nguyen Tran-Ngo, a senior product designer at Scaleway.",
    creator: "@nguyentran_ngo",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full">
        <div className="flex">
          {/* Left Sidebar - Fixed */}
          <SidebarNav />
          
          {/* Main Content - Flexible, with left margin for sidebar */}
          <main className="flex-1 ml-[250px] min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
