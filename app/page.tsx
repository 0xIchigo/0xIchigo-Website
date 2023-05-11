export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-4">
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
    </main>
  )
}
