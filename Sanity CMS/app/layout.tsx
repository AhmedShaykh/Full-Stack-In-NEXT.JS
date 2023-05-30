import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>
        Sanity.io Headless CMS!
      </title>
      <body
        className={`bg-black text-white`}
      >
        {children}
      </body>
    </html>
  )
};