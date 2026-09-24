import "./globals.css";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
});

const description = "Open-source work, mostly tools and datahoarding.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gergo.cc"),
  title: "gergo",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "gergo",
    description,
    url: "/",
    siteName: "gergo.cc",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={mono.variable}>
      <head>
        <script
          defer
          src="https://eu.umami.is/script.js"
          data-website-id="fd74ee9b-7a22-444a-b710-1c87b9e36963"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
