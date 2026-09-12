// src/layouts/MainLayout.tsx
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CommandPalette } from "@/components/CommandPalette"
import { useTheme } from "@/hooks/useTheme"
import { ScrollToTop } from "@/components/ScrollToTop"

export function MainLayout() {
  const { theme, toggle } = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)

  return (
    <>
	  <ScrollToTop />
      <Navbar
        theme={theme}
        onToggleTheme={toggle}
        onOpenPalette={() => setPaletteOpen(true)}
      />
      {/* <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} /> */}
      <main>
        <Outlet />
      </main>
      <Footer theme={theme} />
    </>
  )
}
