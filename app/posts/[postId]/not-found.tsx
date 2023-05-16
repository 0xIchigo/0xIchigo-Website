export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center p-4 max-w-5xl mx-auto">
            <div className="bg-white border border-dark-green m-1">
                <div className="bg-dark-green">
                    <h2 className="prose text-white px-2">
                        Error 404 -<span className="font-Aurebesh"> Error 404</span>
                    </h2>
                </div>
                <p className="prose text-black px-2 pb-2">
                    Sorry anon, the page you<span>&#39;</span>re looking for doesn<span>&#39;</span>t exist
                </p>
            </div>
        </div>
    )
}