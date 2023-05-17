import Posts from "../components/Posts";

export default function Blog() {
    return (
        <main className="flex flex-col justify-center items-center p-4 max-w-5xl mx-auto">
            <div className="bg-white border border-dark-green m-1 min-w-[65%]">
                <div className="bg-dark-green">
                    <h2 className="prose text-white px-2">
                        Articles -<span className="font-Aurebesh"> articles</span>
                    </h2>
                </div>
                <div className="px-4 pb-4">
                    <Posts />
                </div>
            </div>
        </main>
    )
}