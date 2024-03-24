import { scroller } from "react-scroll"

import {
    AstroBadge,
    CBadge,
    CPlusPlusBadge,
    CSSBadge,
    GitBadge,
    HTMLBadge,
    JavaScriptBadge,
    LatexBadge,
    MongoDBBadge,
    NextJSBadge,
    PythonBadge,
    ReactBadge,
    ReduxBadge,
    TailwindCSSBadge,
    TypeScriptBadge
} from "./Badges"

const tools: (() => JSX.Element)[] = [
    HTMLBadge,
    CSSBadge,
    JavaScriptBadge,
    TypeScriptBadge,
    ReactBadge,
    NextJSBadge,
    AstroBadge,
    TailwindCSSBadge,
    MongoDBBadge,
    ReduxBadge,
    PythonBadge,
    CBadge,
    CPlusPlusBadge,
    GitBadge,
    LatexBadge
]

export default function About() {
    const handleGetInTouchClick = () => {
        scroller.scrollTo("contact", {
            duration: 800,
            delay: 0,
            smooth: true,
            offset: -60
        })
    }

    return (
        <>
            <div id="about" className="w-full flex justify-center items-center">
                <div className="w-full max-w-7xl px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col">
                    <div className="text-secondary mb-2 font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
                        About Me
                    </div>
                    <div className="text-primary md:mb-3 lg:mb-8 font-inter text-sm sm:text-base lg:text-lg">
                        I graduated from Swarthmore College, where I double majored in Computer Science and Mathematics. My education gave me a strong background in theoretical computer science, systems programming, and software development. I'm currently working as a software developer at Actual Size, a branding and digital design agency based in Pittsburgh. I learn fast and I take pride in what I do.&nbsp;
                        <button className="text-tertiary hover:underline" onClick={handleGetInTouchClick}>
                            Let&#39;s get in touch
                        </button>
                        &nbsp;.
                    </div>
                    <div className="w-full hidden md:flex flex-col justify-center items-center">
                        <div className="text-secondary mb-2 font-poppins text-2xl lg:text-4xl xl:text-4xl font-semibold">
                            Tools I Use:
                        </div>
                        <div className="w-2/3 flex flex-wrap justify-center items-center">
                            {tools.map((tool, idx) => (
                                <div key={idx} className="mr-1 mb-1 hover:cursor-default">
                                    {tool()}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}