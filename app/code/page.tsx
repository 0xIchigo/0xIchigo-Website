export default function Projects() {

    return (
        <main className="flex flex-col justify-center items-center p-4 max-w-5xl mx-auto">
            <div className="bg-white border border-dark-green m-1 min-w-[75%]">
                <div className ="bg-dark-green">
                    <h1 className="prose text-white px-2">
                        Code -<span className="font-Aurebesh"> Code</span>
                    </h1>
                </div>
                <div className="prose text-black px-2 pb-2 min-w-full">
                    <h2 className="mt-2 mb-0 px-2">
                        Projects
                    </h2>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a className="cursor-not-allowed">Community Carnage</a>: An upcoming Solana based FPS
                    </p>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a href="https://www.helius.dev/">Helius</a>: Solana<span>&#39;</span>s most loved RPC Nodes, APIs, Webhooks, and Data
                    </p>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a href="https://www.solape.io/">Solape</a>: An OpenBook Solana DEX built by apes, for apes
                    </p>
                </div>
                <div className="prose text-black px-2 pb-2 min-w-full">
                    <h2 className="mt-2 mb-0 px-2">
                        Open Source Contributions
                    </h2>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a href="https://github.com/denoland/deno">Deno</a>: A modern runtime for JavaScript and TypeScript
                    </p>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a href="https://github.com/denoland/deno_lint" className="whitespace-nowrap">Deno Lint</a>: Blazing fast linter for JavaScript and TypeScript written in Rust
                    </p>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a href="https://github.com/proxycapital/solana-civ">SolanaCiv</a>: Fully on-chain 4x strategy game, inspired by Sid Meier<span>&#39;</span>s Civilization
                    </p>
                </div>
                <div className="prose text-black px-2 pb-2 min-w-full">
                    <h2 className="mt-2 mb-0 px-2">
                        Personal Projects
                    </h2>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a href="https://github.com/0xIchigo/Breakout">Breakout</a>: A rendition of Atari<span>&#39;</span>s classic coded in Rust using the Macroquad game engine
                    </p>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a href="https://github.com/0xIchigo/Data-Structures-and-Algorithms-in-Rust">DSA in Rust</a>: A collection of data structures and algorithms, from simple search algos to a fully functional PoW blockchain, coded in Rust 
                    </p>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a href="https://github.com/0xIchigo/Ethernaut">Ethernaut</a>: Solutions to Ethernaut, OpenZeppelin<span>&#39;</span>s Web3 / Solidity based wargame 
                    </p>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a href="https://github.com/0xIchigo/IchiChain">IchiChain</a>: A rudimentary Proof of Stake blockchain coded in Python
                    </p>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                       <a href="https://github.com/0xIchigo/0xIchigo-Website">Personal Site</a>: A slice of cyberspace dedicated for my portfolio and blog 
                    </p>
                    <p className="prose ml-2 px-2 text-black min-w-full">
                        <a href="https://github.com/0xIchigo/RPSLS">RPSLS</a>: A Web3 dApp that allows you to play Rock, Paper, Scissors, Lizard, Spock against another player on the Sepolia testnet while wagering Ether
                    </p>
                </div>
            </div>
        </main>
    )
}