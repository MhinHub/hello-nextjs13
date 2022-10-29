import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Nextjs 13</title>
      </head>
      <body>
        <nav>
          <Link href="/" style={{ padding: "0 20px" }}>
            Home
          </Link>
          <Link href="/tabx">
            Tab Example
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
