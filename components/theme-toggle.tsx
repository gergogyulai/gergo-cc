"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { KeyboardShortcut } from "./keyboard-shortcut"
import { Button } from "./ui/button"
export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button variant="outline" className="backdrop-blur-[1px]" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <div className="hidden md:flex items-center gap-2">
        <Sun className="size-5 dark:hidden" />
        <Moon className="hidden size-5 dark:block" />
        <span className="terminal-label tracking-[0.14em]">theme</span>
        <KeyboardShortcut shortcut="T" />
      </div>
      <div className="block md:hidden">
        <Sun className="size-5 dark:hidden" />
        <Moon className="hidden size-5 dark:block" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
