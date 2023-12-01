import Posts from "../components/Posts";

export default function Blog() {
    return (
        <main className="flex flex-col justify-center items-center p-4 max-w-5xl mx-auto">
            <div className="bg-white border border-dark-green m-1 min-w-[75%]">
                <div className="bg-dark-green">
                    <h2 className="prose text-white px-2">
                        Articles -<span className="font-Aurebesh"> articles</span>
                    </h2>
                </div>
                <div className="px-4 pb-4">
                    <Posts />
                </div>
            </div>
            <hr className="h-px my-4 w-48 bg-white border border-white" />
            <div className="bg-white border border-dark-green m-1 min-w-[75%]">
                <div className="bg-light-green">
                    <h2 className="prose text-dark-green px-2">
                        Other Articles -<span className="font-Aurebesh"> other articles</span>
                    </h2>
                </div>
                <div className="p-4">
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/privacy-on-solana-with-elusiv-and-light" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy on Solana with Elusiv and Light: All You Need to Know About Privacy on SOL
                        </a>
                        <p className="prose text-sm ml-4">
                            Published September 13, 2023
                        </p>
                    </p>
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/what-is-token-2022" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Updated the Confidential Transfers Section for the What is Token-2022? Article
                        </a>
                        <p className="prose text-sm ml-4">
                            Published September 14, 2023
                        </p>
                    </p>
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/all-you-need-to-know-about-solana-and-quic" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            How to Mitigate Spam QUICkly: All You Need to Know About Solana and QUIC
                        </a>
                        <p className="prose text-sm ml-4">
                            Published September 18, 2023
                        </p>
                    </p>
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/proof-of-history-proof-of-stake-proof-of-work-explained" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Proof of History, Proof of Stake, Proof of Work - Explained
                        </a>
                        <p className="prose text-sm ml-4">
                            Published September 21, 2023
                        </p>
                    </p>
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/cryptographic-tools-101-hash-functions-and-merkle-trees-explained" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cryptographic Tools 101 - Hash Functions and Merkle Trees Explained
                        </a>
                        <p className="prose text-sm ml-4">
                            Published September 25, 2023
                        </p>
                    </p>
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/all-you-need-to-know-about-compression-on-solana" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            All You Need to Know About Compression on Solana
                        </a>
                        <p className="prose text-sm ml-4">
                            Published October 3, 2023
                        </p>
                    </p>
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/all-you-need-to-know-about-solanas-v1-16-update" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            All You Need to Know About Solana<span>&#39;</span>s v1.16 Update
                        </a>
                        <p className="prose text-sm ml-4">
                            Published October 6, 2023
                        </p>
                    </p>
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/solana-geyser-plugins-streaming-data-at-the-speed-of-light" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Solana Geyser Plugins: Streaming Data at the Speed of Light
                        </a>
                        <p className="prose text-sm ml-4">
                            Published October 14, 2023
                        </p>
                    </p>
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/evaluating-solana-for-enterprise-use-a-comprehensive-guide" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Evaluating Solana for Enterprise Use: A Comprehensive Guide
                        </a>
                        <p className="prose text-sm ml-4">
                            Published October 20, 2023
                        </p>
                    </p>
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/the-solana-programming-model-an-introduction-to-developing-on-solana" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Solana Programming Model: An Introduction to Developing on Solana
                        </a>
                        <p className="prose text-sm ml-4">
                            Published November 10, 2023
                        </p>
                    </p>
                    <p className="prose text-black min-w-full">
                        <a 
                            href="https://www.helius.dev/blog/what-is-firedancer" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            What is Firedancer? A Deep Dive into Solana 2.0
                        </a>
                        <p className="prose text-sm ml-4">
                            Published November 29, 2023
                        </p>
                    </p>
                </div>
            </div>
        </main>
    )
}