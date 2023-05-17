import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sanity.io Headless CMS!',
  description: 'Learning Sanity.io Headless CMS With NEXT.JS 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white`}
      >
        {children}
      </body>
    </html>
  )
};