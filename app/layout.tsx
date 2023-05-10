import "./globals.css"
import Navbar from "./components/Navbar"
import Background from "./components/Background"
import ProfilePic from "./components/ProfilePic"


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
        <div className="h-full w-full">
          <div className="block fixed top-0 left-0 z-[-100]">
            <Background />
          </div>
          <Navbar />
          <ProfilePic />
          {children}
        </div>
      </body>
    </html>
  )
}
