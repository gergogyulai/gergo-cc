"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button variant="outline" className="backdrop-blur-[1px]" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Sun className="size-5 dark:hidden" />
      <Moon className="hidden size-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
