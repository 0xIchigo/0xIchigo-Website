
export default function About() {

    return (
        <main className="flex flex-col justify-center items-center p-4 max-w-5xl mx-auto">
            <div className="bg-white border border-dark-green m-1">
                <div className="bg-dark-green">
                    <h2 className="prose text-white px-2">
                        Projects -<span className="font-Aurebesh"> projects</span>
                    </h2>
                </div>
                <p className="prose text-black px-2 pb-2">
                    This site is dedicated for my personal portfolio and blog (nonsensical ramblings on various technical and philosophical topics, including those related to and neighboring blockchains, cybersecurity, smart contracts, economics, law, and politics)
                </p>
            </div>
        </main>
    )
}