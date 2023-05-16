import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="min-w-full px-4 py-1 top-0 z-10 text-white">
            <div className="flex items-center justify-center mx-auto p-4 text-2xl">
                <Link href="https://twitter.com/0xIchigo" className="text-white mx-2">
                    <FaTwitter />
                </Link>
                <Link href="https://github.com/0xIchigo" className="text-white mx-2">
                    <FaGithub />
                </Link>
            </div>
        </footer>
    )
}