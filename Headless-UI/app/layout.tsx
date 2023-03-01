"use client";
import './globals.css';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider enableSystem={true} attribute="class">
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
};