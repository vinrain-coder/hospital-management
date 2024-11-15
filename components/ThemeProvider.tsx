"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
//@ts-ignore
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}