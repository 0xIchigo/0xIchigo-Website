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
                </div>
            </div>
        </main>
    )
}