"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Pass through any props from the layout, but override the ones for the theme
  return (
    <NextThemesProvider 
      {...props} 
      defaultTheme="dark"  // 👈 Set the default to dark
      enableSystem={false} // 👈 Disable the system theme preference
    >
      {children}
    </NextThemesProvider>
  )
}