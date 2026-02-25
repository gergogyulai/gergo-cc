"use client";

import React from "react";
import { siteConfig } from "@/lib/site";
import { toast } from "sonner";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Shortcuts() {
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (event.key === "g") {
        window.open(siteConfig.links.github, "_blank");
      }

      if (event.key === "p") {
        router.push("/projects");
      }

      if (event.key === "t") {
        setTheme(theme === "light" ? "dark" : "light");
      }

      if (event.key === "b" && pathname === "/projects") {
        router.push("/");
      }

      if (event.key === "a" && pathname === "/projects") {
        window.open(`${siteConfig.links.github}?tab=repositories`, "_blank");
      }

      if (event.key === "h") {
        router.push("/");
      }

      if (event.key === "w") {
        navigator.clipboard
          .writeText("irm https://wtb.gergo.cc | iex")
          .then(() => {
            toast.success("Copied to clipboard", {
              description: "WTB Command has been copied to your clipboard",
              position: "bottom-right",
              duration: 2000,
            });
          })
          .catch((err) => {
            toast.error("Failed to copy", {
              description: "Please try again",
            });
          });
      }
    };

    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [router, setTheme, theme, pathname]);

  return null;
}
