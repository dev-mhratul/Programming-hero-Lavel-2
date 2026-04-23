import "./globals.css"

import { ThemeProvider } from "@/provider/ThemeProvider" 
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/components/layout/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // ✅ FIX 1: hydration warning fix (VERY IMPORTANT)
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">

        {/* ✅ FIX 2: ThemeProvider MUST wrap everything */}
        {/* <Navbar></Navbar> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* ✅ FIX 3: TooltipProvider inside ThemeProvider */}
          <TooltipProvider delayDuration={0}>
            {children}
          </TooltipProvider>
        </ThemeProvider>

      </body>
    </html>
  )
}