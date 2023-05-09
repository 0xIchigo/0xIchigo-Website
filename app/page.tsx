import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-2">
        Welcome, anon!
      </div>
    </main>
  )
}
