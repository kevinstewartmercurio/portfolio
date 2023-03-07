import Link from "next/link"
import Image from "next/image"

import youdosudoku from "../../public/youdosudoku.png"
import enigmachat from "../../public/enigmachat.png"
import rpdocs from "../../public/rpdocs.png"

const projects = [
    {
        title: "YouDoSudoku",
        image: youdosudoku,
        desc: "This was the first project I built after learning HTML, CSS, JavaScript, and React. I made a command line sudoku solver two years ago and I wanted to use it to create a highly customizable sudoku playing experience.",
        live: "https://youdosudoku.com/",
        repo: "https://github.com/kstewartmercurio/you-do-sudoku"
    },
    {
        title: "enigmachat.io",
        image: enigmachat,
        desc: "This was my first full stack application that I built using the MERN stack. I took a traditional chat application and made it my own by incorporating an old Enigma machine emulator that I had built when I was learning C++.",
        live: "https://www.enigmachat.io/",
        repo: "https://github.com/kstewartmercurio/enigma-chat-io"
    },
    {
        title: "RP Documentation",
        image: rpdocs,
        desc: "This is a freelance project I did. A friend of mine had an app designed for fitness coaches to create and manage diets for clients and I wrote the documentation for that app. This site was built using Next.js, TypeScript, and Tailwind.",
        repo: "https://github.com/kstewartmercurio/rpdocs"
    }
]

function ProjectCard({ title, image, desc, live, repo }) {
    const liveBtn = () => {
        if (live !== null) {
            return (
                <>
                    <Link
                        href={live}
                        target="_blank"
                        rel="noreferrer"
                        className="live-btn bg-[#688761] border-solid border-2 border-[#ffffff] rounded-lg mx-1 px-2 py-1 font-['Inter'] text-xs md:text-sm font-light outline-none"
                    >
                        view live
                    </Link>
                </>
            )
        }

        return (
            <></>
        )
    }

    const repoBtn = () => {
        if (repo !== null) {
            return (
                <>
                    <Link
                        href={repo}
                        target="_blank"
                        rel="noreferrer"
                        className="repo-btn bg-[#353535] border-solid border-2 border-[#353535] rounded-lg mx-1 px-2 py-1 font-['Inter'] text-xs md:text-sm font-light outline-none"
                    >
                        repository
                    </Link>
                </>
            )
        }
    }

    return (
        <>
            <div className="text-[#ffffff] bg-[#688761] max-w-[360px] h-full sm:mx-2 my-2 px-2 pt-1.5 pb-2.5 rounded-xl text-center duration-300 hover:scale-[1.025]">
                <p className="font-['Poppins'] text-lg md:text-xl">
                    {title}
                </p>
                <Image
                    src={image}
                    alt="project image"
                    className="my-1.5 rounded-xl"
                />
                <p className="mt-1.5 mb-3 font-['Inter'] text-xs md:text-sm">
                    {desc}
                </p>
                {liveBtn()}
                {repoBtn()}
            </div>
        </>
    )
}

export function ProjectsPreview() {
    return (
        <>
            <div className="h-[1404px] xxs:h-[1380px] xs:h-[1452px] sm:h-[704px] md:h-[748px] lg:h-[788px] xl:h-[790px] 3xl:h-[846px] 4xl:h-[854px]">
                <div className="text-[#cac9c9] bg-[#212f1d] w-full h-[192px] xxs:h-[172px] pl-4 md:pl-12 lg:pl-20 pr-3 md:pr-8 lg:pr-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center absolute z-10">
                    <h1 className="w-max font-['Poppins'] text-5xl md:text-7xl lg:text-8xl font-bold">
                        projects
                    </h1>
                    <p className="mt-4 sm:mt-0 pl-6 font-['Inter'] text-sm md:text-base lg:text-xl font-light">
                        All of my projects can be found on my&nbsp; 
                        <span>
                            <Link
                                href="https://github.com/kstewartmercurio"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#965b0f] hover:underline"
                            >
                                Github&nbsp;
                            </Link>
                        </span> 
                        but here are 
                        some of the projects that I've been working on recently.
                    </p>
                </div>
                <div className="bg-[url(/waves-projects2-haikei.png)] bg-cover bg-no-repeat w-full h-[226px] mt-[148px] xxs:mt-[124px] lg:mt-[158px] absolute"></div>
                <div className="bg-[#703f01] w-full h-[1136px] sm:h-[388px] md:h-[432px] 3xl:h-[480px] mt-[268px] xxs:mt-[244px] xs:mt-[316px] lg:mt-[356px] xl:mt-[358px] 3xl:mt-[366px] 4xl:mt-[380px] px-3 pt-6 pb-4 absolute z-10">
                    <div className="h-full flex flex-col sm:flex-row items-center sm:justify-center">
                        {projects.map((el, idx) => {
                            return (
                                <ProjectCard
                                    key={idx}
                                    title={el.title}
                                    image={el.image}
                                    desc={el.desc}
                                    live={el.live || null}
                                    repo={el.repo || null}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}