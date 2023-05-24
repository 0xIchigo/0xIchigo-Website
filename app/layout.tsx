/*
  This is so annoying but the only work around until Next's app directory is more finely tuned
  It seems that the app dir is using a compiler which doesn't like wrapped `require` in UMD builds
  I'll have to find a way to tinker with the compiler or wait for Next to further update it
  For now, this annoying "use client" statement and lazy loading Background will have to do
*/
"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
//import Background from "./components/Background";
import ProfilePic from "./components/ProfilePic";
import Footer from "./components/Footer";

import dynamic from "next/dynamic";
const Background = dynamic(() => import("./components/Background"), { ssr: false });


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
      <body className="font-MSGothic">
        <div className="h-full w-full">
          <div className="block fixed top-0 left-0 z-[-100]">
            <Background />
          </div>
          <Navbar />
          <ProfilePic />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
