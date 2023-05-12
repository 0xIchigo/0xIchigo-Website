import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-4 max-w-5xl mx-auto">
      <div className="bg-white border border-dark-green m-1">
        <div className="bg-dark-green">
          <h2 className="prose text-white px-2">
            Welcome to Ichigo<span>&#39;</span>s cyberspace -<span className="font-Aurebesh"> welcome!</span>
          </h2>
        </div>
        <p className="prose text-black px-2">
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
        <p className="prose text-black px-2">
          This site draws upon cybercore, early MySpace, and 4chan aesthetics to elicit a surreal browsing experience rooted in nostalgia. This experience of familiarity
          is transposed upon a futurist embrace of the emerging hyperreality latent in the web<span>&#39;</span>s accelerated networks. Here, you can engage in the knowledge
          and culture of lucid virtuality, tapping into a shared consciousness rooted in network spirituality, all from the comfort of your personal computer
        </p>
      </div>
    </main>
  )
}

/*
  <div className="bg-black bg-opacity-95 border border-dark-green">
        <article className="prose text-black bg-light-green">
          <div className="bg-dark-green p-2 mt-0 mb-0">
            <p className="m-0">
              Hello there! Welcome to a slice of cyberspace dedicated for my portfolio and blog (nonsensical ramblings on various technical and philosophical topics)
            </p>
          </div>
          <ul>
            <li>My name is Evan, but online I go by the pseudonym Ichigo</li>
            <li>I am a self-taught developer interested in all things blockchain, cybersecurity, and smart contracts</li>
            <li>I am a currently employed as a Full-stack Developer at <a className="text-white no-underline" href="https://dex.solape.io/#/about">Solape Finance</a></li>
            <li>I am currently learning how to audit Solidity smart contracts, and how to write Anchor (Solana) programs</li>
            <li>I have my Honours Bachelor of Arts with a double major in History, and Criminology & Sociolegal Studies</li>
            <li>I am based in Toronto, Canada</li>
            <li>You can contact me at <a className="text-white" href="mailto:0xIchigo@protonmail.com">0xIchigo@protonmail.com</a></li>
            <li>I<span>&#39;</span>m open to collaborating on interesting projects or ideas</li>
          </ul>
        </article>
      </div>
*/
