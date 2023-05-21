import Image from "next/image";
import { MusicPlayerIchigo } from "../components/MusicPlayer";

export default function About() {
    return (
        <main className="flex flex-col justify-center items-center p-4 max-w-5xl mx-auto">
            <div className="bg-white border border-dark-green m-1">
                <div className="bg-dark-green">
                    <h1 className="prose text-white px-2">
                        Who is 0xIchigo? -<span className="font-Aurebesh"> Who is 0xIchigo?</span>
                    </h1>
                </div>
                <p className="prose text-black px-2 pb-2">
                    Hello! My name is Evan, but online I go by the pseudonym Ichigo. I am a self-taught developer interested in all things blockchain,
                    cybersecurity, and smart contracts. I am currently learning how to audit Solidity smart contracts, and how to write Anchor (Solana)
                    programs. TLDR; I code, audit, and optimize stuff on the blockchain
                </p>
            </div>
            <hr className="h-px my-4 w-48 bg-white border border-white" />
            <div className="bg-white border border-dark-green m-1 mt-2">
                <div className="bg-light-green mb-2">
                    <h2 className="prose text-dark-green px-2">
                        Work Experience -<span className="font-Aurebesh"> Work Experience</span>
                    </h2>
                </div>
                <div className="mb-2">
                    <h2 className="prose px-2">
                        Freelance Software Developer
                    </h2>
                    <p className="prose px-2">
                        Jan. 2022 - Present
                    </p>
                    <p className="prose px-2">
                        Technologies: TypeScript, JavaScript, Node.js, React.js, Rust, Soldity, Git, GitHub
                    </p>
                    <p className="prose px-2 text-black">
                        Completed contract work for various Web3 and cryptographic projects, DAOs, and companies, which includes work such as:
                    </p>
                    <ul className="prose px-2 pb-2 text-black">
                        <li>
                            Developing responseive, interactive websites for new and emerging projects
                        </li>
                        <li>
                            Creating Node.js scripts to interact with an NFT<span>&#39;</span>s metadata and pushing updates to Solana
                        </li>
                        <li>
                            Review Solidity smart contract code, providing feedback to aid in code auditing based on various tests and troubleshooting
                            methods
                        </li>
                        <li>
                            Developing and testing a Kickstarter/Fundraising smart contract in Anchor and deploying it to Solana
                        </li>
                        <li>
                            Creating a custom NFT art generation algorithm to create collections based on complex inclusion/exclusion trait rulesets
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="prose px-2">
                        Full-stack Developer @ Solape Finance
                    </h2>
                    <p className="prose px-2">
                        Sep. 2022 - May 2023
                    </p>
                    <p className="prose px-2">
                        Technologies: Next.js, TypeScript, Node.js, Tailwind CSS, Git, GitHub, Rust
                    </p>
                    <ul className="prose text-black px-2 pb-2">
                        <li>
                            Worked as a full-stack developer responsible for developing new features, infrastructure, and implementing bug fixes on both the DEX and swap
                        </li>
                        <li>
                            Oversaw a complete overhaul of the swap to implement new features and optimizations, such as the implementation of a custom fee system, as
                            well as the development of a new user interface based on feedback gathered from UX interviews and internal discussion
                        </li>
                        <li>
                            Helped facilitate the migration of the DEX to OpenBook during the Serum/FTX debacle, becoming the first DEX on Solana to implement the new open source
                            orderbook
                        </li>
                        <li>
                            Gained experience working on an Agile team and participating in Agile practices such as peer programming, UX interviews, team code reviews, contributing to
                            meetings for the planning, development, and debugging of new features, and presenting developed features to the team
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="h-px my-4 w-48 bg-white border border-white" />
            <div className="bg-white border border-dark-green m-1 mt-2">
                <div className="bg-dark-green mb-2">
                    <h2 className="prose text-white px-2">
                        What was I doing before crypto? -<span className="font-Aurebesh"> before crypto</span>
                    </h2>
                </div>
                <p className="prose text-black px-2 pb-2">
                    Prior to becoming a developer, I worked as a waiter at a local Italian restaurant for the past seven years. I also completed an Honours Bachelor of Arts at the
                    University of Toronto, where I pursued a double major in History and Criminology & Sociolegal Studies. I graduated on Dean<span>&#39;</span>s List with High Distinction,
                    and took part in various activities and societies from being a Frosh Week Orientation Leader and Organizer to a columnist for a satirical newspaper.
                </p>
            </div>
            <hr className="h-px my-4 w-48 bg-white border border-white" />
            <div className="bg-white border border-dark-green m-1 mt-2">
                <div className="bg-light-green mb-2">
                    <h2 className="prose text-dark-green px-2">
                        Why crypto? -<span className="font-Aurebesh"> why crypto</span>
                    </h2>
                </div>
                <p className="prose text-black px-2 pb-2">
                    Digital technologies have already altered the world in which we live, and will continue to do so long after I am alive. Our world grows increasingly digital and
                    interconnected on a global scale - there is no debate that the future is digital.
                </p>
                <p className="prose text-black px-2 pb-2">
                    I believe that the fundamentals in which this world should build upon itself should be open-source, interconnected decentralized applications that empower ownership, accessibility,
                    transparency, and accountability.The ethos of cryptocurrency and blockchain technologies perfectly align with my beliefs. I believe in the futurist embrace of the emerging
                    hyperreality latent within the web<span>&#39;</span>s accelerated networks, the cypherpunk movement, and the notion that access to Internet, access to stable currency, and data
                    privacy should be inalienable rights.
                </p>
                <p className="prose text-black px-2 pb-2">
                    I dream of a future wherein the organization and coordination of finance, governance, entertainment, and, ultimately, human development can be done in a genuinely open and free way for the good of everyone.
                </p>
            </div>
            <hr className="h-px my-4 w-48 bg-white border border-white" />
            <div className="bg-white border border-dark-green m-1 mt-2">
                <div className="bg-light-green mb-2">
                    <h2 className="prose text-dark-green px-2">
                        Interests -<span className="font-Aurebesh"> Interests</span>
                    </h2>
                </div>
                <ul className="prose text-black px-2 pb-2">
                    <li>
                        I really enjoy outdoor activities such as hiking, fishing, kayaking, and camping
                    </li>
                    <li>
                        My favourite Magic: the Gathering Decks to play in Commander are Miirym, Sentinel Wyrm (create a bunch of dragon tokens), and Prosper, Tome-Bound
                        (create a bunch of treasure tokens)
                    </li>
                    <li>
                        I am a black belt in Shotokan Karate. My favourite katas are Kanku Dai, Jion, and Enpi
                    </li>
                    <li>
                        I am currently reading The Sirens of Titan by Kurt Vonnegut
                    </li>
                    <li>
                        My all-time favourite movies (excluding Star Wars and LOTR because they<span>&#39;</span>re goated) include: Trainspotting, The Hidden Fortress, A Clockwork Orange, V for Vendetta, Blade, What We Do in the Shadows,
                        Whisper of the Heart, Kiki<span>&#39;</span>s Delivery Service, From Up on Poppy Hill, The Big Lebowski, Hot Fuzz, Seven Samurai, La Haine, Blade Runner 2049
                    </li>
                </ul>
            </div>
            <hr className="h-px my-4 w-48 bg-white border border-white" />
            <div className="bg-white border border-dark-green m-1 mt-2">
                <div className="bg-dark-green mb-2">
                    <h2 className="prose text-white px-2">
                        Music -<span className="font-Aurebesh"> Music</span>
                    </h2>
                </div>
                <MusicPlayerIchigo />
                <p className="prose text-black p-2">
                    I like to open up Ableton, mess around, and make some really cool sounds. My greatest accomplishment in life is having my music be featured in a
                    Fornite map speedrun YouTube compilation
                </p>
            </div>
        </main>
    )
}