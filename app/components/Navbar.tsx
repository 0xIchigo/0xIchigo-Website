import React from 'react'

export default function Navbar() {
    return (
        <nav className="min-w-full p-4 sticky top-0 z-10 bg-black text-white">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <span className="text-2xl font-semibold text-orange">0xIchigo</span>
                    <div className="group flex space-x-4">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Blog</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
