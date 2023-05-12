import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="min-w-full px-4 py-1 sticky top-0 z-10 text-white bg-black">
            <div className="max-w-5xl mx-auto px-4 prose prose-xl">
                <div className="flex items-center justify-between h-16">
                    <span className="sm:text-2xl text-lg font-semibold text-white hover:text-orange mr-2">0xIchigo</span>
                    <div className="flex space-x-4">
                        <Link href="/" className="text-white sm:text-xl text-lg no-underline">About</Link>
                        <Link href="/" className="text-white sm:text-xl text-lg no-underline">Projects</Link>
                        <Link href="/" className="text-white sm:text-xl text-lg no-underline">Blog</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
