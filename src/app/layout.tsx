import Link from 'next/link'
import React from 'react'
import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>Tezos x EasyA</title>
        <meta name="description" content="WCPGW" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="h-full">
        <nav className="flex flex-row gap-1 px-64 py-8">
          <Link
            href="/"
            className="rounded px-4 py-1 text-blue-700 underline underline-offset-2"
          >
            Home
          </Link>
          <Link
            href="/art"
            className="rounded px-4 py-1 text-blue-700 underline underline-offset-2"
          >
            Art
          </Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
