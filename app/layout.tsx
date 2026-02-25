import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import Shortcuts from "@/components/shortcuts";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gergo's Portfolio",
  description: "Yet another portfolio site, but this one is mine.",
  metadataBase: new URL("https://gergo.cc"),
  openGraph: {
    title: "Gergo's Portfolio",
    description: "Yet another portfolio site, but this one is mine.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1380,
        height: 934,
        alt: "Gergo's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased`}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Shortcuts />
            <div className="w-full min-h-screen px-4 py-6 md:px-8 md:py-10">
              <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 pb-2">
                {children}
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
