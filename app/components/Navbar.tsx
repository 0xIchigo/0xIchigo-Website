import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="min-w-full p-4 sticky top-0 z-10 text-white">
            <div className="max-w-5xl mx-auto px-4 prose prose-xl">
                <div className="flex items-center justify-between h-16">
                    <span className="text-2xl font-semibold text-orange">0xIchigo</span>
                    <div className="flex space-x-4">
                        <Link href="/" className="text-white text-lg no-underline">Home</Link>
                        <Link href="/" className="text-white text-lg no-underline">About</Link>
                        <Link href="/" className="text-white text-lg no-underline">Projects</Link>
                        <Link href="/" className="text-white text-lg no-underline">Blog</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
