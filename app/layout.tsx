import "./globals.css"
import Navbar from "./components/Navbar"
import Background from "./components/Background"


export const metadata = {
  title: '0xIchigo',
  description: `A slice of cyberspace dedicated for 0xIchigo's portfolio and blog (nonsensical ramblings on various technical and philosophical topics)`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Background />
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
