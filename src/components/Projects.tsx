import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import enigmachat from "../../public/images/enigmachat.png"
import friendspsl from "../../public/images/friendspsl.png"
import yds from "../../public/images/yds.png"

import {
    ExpressJSBadge,
    HerokuBadge,
    MongoDBBadge,
    NextJSBadge,
    NodeJSBadge,
    ReactBadge,
    ReduxBadge,
    TailwindCSSBadge,
    TypeScriptBadge,
    VercelBadge
} from "./Badges"

type Project = {
    title: string,
    img: StaticImageData,
    alt: string,
    desc: string,
    tools: (() => JSX.Element)[],
    liveUrl: string,
    repoUrl: string,
}

const projects: Project[] = [
    {
        title: "YouDoSudoku API",
        img: yds,
        alt: "youdosudoku api",
        desc: "This is a REST API that I built to provide developers with a Sudoku generator. Puzzles come in three difficulties and there are over 200 billion puzzles to choose from, all with unique solutions.",
        tools: [NextJSBadge, TailwindCSSBadge, TypeScriptBadge, MongoDBBadge, ReduxBadge, VercelBadge],
        liveUrl: "https://www.youdosudoku.com/",
        repoUrl: "https://github.com/kevinstewartmercurio/you-do-sudoku-api"
    },
    {
        title: "FriendsPSL",
        img: friendspsl,
        alt: "friendspsl",
        desc: "This was a project that I made for the Ultimate Frisbee league that I play in. Figuring out when and where your friends were playing used to be painstakingly slow but this tool makes that process as easy as typing in a list of names.",
        tools: [NextJSBadge, TailwindCSSBadge, TypeScriptBadge, MongoDBBadge, ReduxBadge, VercelBadge],
        liveUrl: "https://www.friendspsl.com/",
        repoUrl: "https://github.com/kevinstewartmercurio/friendspsl"
    },
    {
        title: "enigmachat.io",
        img: enigmachat,
        alt: "enigmachat.io",
        desc: "This was the first fullstack application that I built. I took a traditional chat application and made it my own by incorporating an Enigma machine emulator. In order to read a message you'll need to know the three letters the author used for the encryption.",
        tools: [MongoDBBadge, ExpressJSBadge, ReactBadge, NodeJSBadge, HerokuBadge],
        liveUrl: "https://www.enigmachat.io/",
        repoUrl: "https://github.com/kevinstewartmercurio/enigma-chat-io"
    },
]

function ProjectDescription(props: {project: Project}) {
    const { project } = props

    return (
        <>
            <div className="text-primary flex lg:hidden flex-col justify-center items-center font-inter">
                <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="text-secondary font-poppins sm:text-lg underline hover:text-tertiary duration-300">
                    {project.title}
                </Link>
                <Image src={project.img} alt={project.alt} className="my-1" />
                <div className="w-full max-w-xl px-2 flex flex-col justify-center items-center text-sm sm:text-base">
                    <div className="w-full mb-1.5">
                        {project.desc}
                    </div>
                    <div className="flex text-sm sm:text-base">
                        <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="text-primary border-primary border-[1px] rounded-lg box-border mx-1.5 px-2 py-0.5 hover:border-secondary live-btn">
                            See Live
                        </Link>
                        <Link href={project.repoUrl} target="_blank" rel="noreferrer" className="text-tertiary bg-repo-btn-bg border-repo-btn-border border-[1px] rounded-lg box-border mx-1.5 px-2 py-0.5 hover:bg-repo-btn-bg-hover hover:border-repo-btn-border-hover duration-500">
                            View Code
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-primary my-3 hidden lg:flex justify-center items-center font-inter">
                <Image src={project.img} alt={project.alt} className="rounded-xl max-w-lg xl:max-w-none my-1" />
                <div className="px-4 xl:px-6 flex flex-col justify-center items-center textsm text-lg">
                    <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="text-secondary font-poppins text-xl underline hover:text-tertiary duration-300">
                        {project.title}
                    </Link>
                    <div className="mb-2.5">
                        {project.desc}
                    </div>
                    <div className="my-2 flex flex-wrap">
                        {project.tools.map((tool, idx) => (
                            <div key={idx} className="mr-1 mb-1 hover:cursor-default">
                                {tool()}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center text-base">
                        <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="text-primary border-primary border-[1px] rounded-lg box-border mx-1.5 px-2 py-0.5 hover:text-bg hover:border-secondary live-btn">
                            See Live
                        </Link>
                        <Link href={project.repoUrl} target="_blank" rel="noreferrer" className="text-tertiary bg-[#8a582360] border-[#774918] border-[1px] rounded-lg box-border mx-1.5 px-2 py-0.5 hover:border-tertiary duration-500">
                            View Code
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Projects() {
    return (
        <>
            <div id="projects" className="w-full flex justify-center items-center">
                <div className="w-full max-w-7xl px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col">
                    <div className="lg:mb-6 flex flex-col lg:flex-row">
                        <div className="text-secondary mb-2 lg:mb-0 font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
                            Projects
                        </div>
                        <div className="text-primary lg:ml-12 mb-2 lg:mb-0 font-inter text-sm sm:text-base lg:text-lg flex items-center">
                            <div>
                                Here are some projects that I&#39;ve been working on. Feel free to visit the source code for each project on my&nbsp;
                                <Link href="/" className="text-tertiary hover:underline">
                                    Github
                                </Link>
                                .
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <ProjectDescription project={projects[0]} />
                    </div>
                    <div className="my-3">
                        <ProjectDescription project={projects[1]} />
                    </div>
                    <div className="mt-3">
                        <ProjectDescription project={projects[2]} />
                    </div>
                </div>
            </div>
        </>
    )
}