import Link from "next/link"
import { scroller } from "react-scroll"

const sections = ["About", "Projects", "Contact"]

export default function Header() {
    const handleNavigationClick = (id: string) => {
        scroller.scrollTo(id, {
            duration: 800,
            delay: 0,
            smooth: true,
            offset: -60
        })
    }

    return (
        <>
            <div className="w-full flex justify-center items-center">
                <div className="w-full max-w-[1440px] px-12 py-1.5 flex justify-center items-center">
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
                        <Link href="/" className="text-primary font-poppins text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-medium hover:text-secondary duration-300">
                            ksm
                        </Link>
                        <div className="ml-8 xl:ml-12 hidden lg:flex">
                            {sections.map((sec, idx) => (
                                <button key={idx} onClick={() => handleNavigationClick(sec.toLowerCase())} className="text-primary mx-4 xl:mx-6 font-inter text-lg hover:text-secondary duration-300">
                                    {sec}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2 hidden md:flex justify-end items-center">
                        <Link id="resume-btn" href="/kevin_stewart-mercurio_resume.pdf" target="_blank" rel="noreferrer" className="text-primary border-[1px] border-primary rounded-lg ml-3 lg:ml-4 px-3 lg:px-4 py-[3px] lg:py-1 text-sm sm:text-base lg:text-lg hover:border-secondary">
                            Resume
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}