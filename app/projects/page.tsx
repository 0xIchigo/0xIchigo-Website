import { FaPython, FaRust } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPnpm } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";


export default function Projects() {

    return (
        <main className="flex flex-col justify-center items-center p-4 max-w-5xl mx-auto">
            <div className="bg-white border border-dark-green m-1 min-w-[65%]">
                <div className="bg-dark-green">
                    <h1 className="prose text-white px-2">
                        Projects -<span className="font-Aurebesh"> projects</span>
                    </h1>
                </div>
                <div className="prose px-2 pt-2 min-w-full mb-2">
                    <h2 className="mb-2">
                        <a href="https://github.com/0xIchigo/IchiChain" className="flex flex-row items-center">
                            IchiChain
                            <FaPython
                                className="ml-2 items-center"
                            />
                        </a>
                    </h2>
                    <p className="prose text-black">
                        IchiChain is a rudimentary Proof of Stake blockchain coded in Python. The purpose of the project was to deepen my understanding of how blockchains
                        and consensus mechanisms operate at a more fundamental, technical level as well as improve my network programming skills. The README file for the
                        GitHub repo includes a high-level overview on blockchains, Proof of Stake (PoS), and how to use IchiChain.
                    </p>
                </div>
                <div className="prose px-2 pt-2 min-w-full mb-2">
                    <h2 className="mb-2">
                        <a href="https://github.com/0xIchigo/Data-Structures-and-Algorithms-in-Rust" className="flex flex-row items-center">
                            Data Structures and Algorithms in Rust
                            <FaRust
                                className="ml-2 items-center"
                            />
                        </a>
                    </h2>
                    <p className="prose text-black">
                        A collection of data structures and algorithms coded in Rust. The purpose of this project was to better understand how to solve common coding problems
                        in an effective manner, and how to evaluate the efficiency of an algorithm, ie. its runtime complexity. The repo covers the broad categories of: Search
                        Algorithms, Sorting Algorithms, Mathematical Algorithms, Cipers, and Miscellaneous algorithms (things that do not fit neatly into the other categories,
                        such as the 100 Doors Problem or a password generator). For the non-miscellaneous algorithms, comments at the top of each algorithm<span>&#39;</span>s
                        respective file include a brief description of the algorithm as well as its runtime complexity using Big O Notation. For ciphers, I added security
                        considerations in place of runtime complexity.
                    </p>
                </div>
                <div className="prose px-2 pt-2 min-w-full mb-2">
                    <h2 className="mb-2">
                        <a href="https://github.com/0xIchigo/Breakout" className="flex flex-row items-center">
                            Breakout
                            <FaRust
                                className="ml-2 items-center"
                            />
                        </a>
                    </h2>
                    <p className="prose text-black">
                        A rendition of Atari<span>&#39;</span>s classic coded in Rust using the Macroquad game engine. The purpose of this project was to replicate a classic
                        videogame in Rust, and introduce myself to GUI programming. A <a href="https://twitter.com/0xIchigo/status/1563230182072524802?s=20&t=RlLQiGEpGSxUFN_n85N5Nw">demo</a> of
                        the project has been posted on my Twitter.
                    </p>
                </div>
                <div className="prose px-2 pt-2 min-w-full mb-2">
                    <h2 className="mb-2">
                        <a href="https://github.com/0xIchigo/Data-Structures-and-Algorithms-in-Rust" className="flex flex-row items-center">
                            This website!
                            <SiNextdotjs
                                className="ml-2 items-center"
                            />
                            <SiTypescript
                                className="ml-2 items-center"
                            />
                            <SiTailwindcss
                                className="ml-2 items-center"
                            />
                            <SiPnpm
                                className="ml-2 items-center"
                            />
                            <TbBrandThreejs
                                className="ml-2 items-center"
                            />
                        </a>
                    </h2>
                    <p className="prose text-black">
                        The purpose of this site is to have a slice of cyberspace that consolidates my personal portfolio and blog in a surreal browsing experience. This site
                        is largely built with Next.js and TypeScript, using Tailwind CSS for styling and pnpm for managing dependencies. The background for the site was created
                        in Three.js, and all blogposts are written in markdown, but are converted to HTML using the gray-matter and remark npm packages.
                    </p>
                </div>
            </div>
        </main>
    )
}