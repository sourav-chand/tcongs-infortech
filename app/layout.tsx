import type { Metadata } from "next";
import localFont from "next/font/local";
import MotionProvider from "@/components/MotionProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CursorBubble from "@/components/CursorBubble";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  variable: "--font-jetbrains",
  display: "swap",
  weight: "100 800",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tcongsinfotech.com"),
  title: {
    default: "Tcongs Infotech — Web, App & Software Development Company",
    template: "%s | Tcongs Infotech",
  },
  description:
    "Tcongs Infotech is a Mumbai-based web & app development company. We build high-performance websites, mobile apps, custom software, e-commerce stores and digital marketing systems for businesses worldwide.",
  keywords: [
    "web development company",
    "software development",
    "mobile app development",
    "e-commerce development",
    "digital marketing",
    "UI/UX design",
    "AI automation",
    "business growth",
    "shopify development",
    "react development",
    "wordpress development",
    "Tcongs Infotech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tcongsinfotech.com",
    siteName: "Tcongs Infotech",
    title: "Tcongs Infotech — Web, App & Software Development Company",
    description:
      "Build. Scale. Grow your digital business with high-performance web, app and marketing solutions — delivered by a global digital transformation team in Mumbai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tcongs Infotech — Web, App & Software Development Company",
    description:
      "Build. Scale. Grow your digital business with web, app and marketing solutions across the globe.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base font-sans text-ink">
        <SmoothScroll />
        <CursorBubble />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
