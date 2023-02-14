"use client";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='sm:bg-gray-900 md:bg-black text-white'>
        {children}
      </body>
    </html>
  )
};