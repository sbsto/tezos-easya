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
        <main>{children}</main>
      </body>
    </html>
  )
}
