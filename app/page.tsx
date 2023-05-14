import Image from "next/image";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-4 max-w-5xl mx-auto">
      <div className="bg-white border border-dark-green m-1">
        <div className="bg-dark-green">
          <h2 className="prose text-white px-2">
            Welcome to Ichigo<span>&#39;</span>s cyberspace -<span className="font-Aurebesh"> welcome!</span>
          </h2>
        </div>
        <p className="prose text-black px-2 pb-2">
          This site is dedicated for my personal portfolio and blog (nonsensical ramblings on various technical and philosophical topics, including those related to and neighboring blockchains, cybersecurity, smart contracts, economics, law, and politics)
        </p>
      </div>
      <hr className="h-px my-4 w-48 bg-white border border-white" />
      <div className="bg-white border border-dark-green m-1 mt-3">
        <div className="bg-light-green mb-2">
          <h2 className="prose text-dark-green px-2">
            Aesthetics -<span className="font-Aurebesh"> Aesthetics</span>
          </h2>
        </div>
        <Image
          src="/images/computers.gif"
          alt="I love computers"
          height={300}
          width={300}
          className="m-auto"
        />
        <MusicPlayer />
        <p className="prose text-black px-2 pb-2">
          This site draws upon cybercore, early MySpace, and 4chan aesthetics to elicit a surreal browsing experience rooted in nostalgia. This experience of familiarity
          is transposed upon a futurist embrace of the emerging hyperreality latent in the web<span>&#39;</span>s accelerated networks. Here, you can engage in the knowledge
          and culture of lucid virtuality, tapping into a shared consciousness rooted in network spirituality, all from the comfort of your personal computer
        </p>
      </div>
    </main>
  )
}
