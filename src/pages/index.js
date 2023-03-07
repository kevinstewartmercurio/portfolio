import { useRef } from "react"

import { Header } from '@/components/Header'
import { Welcome } from "@/components/Welcome"
import { Bio } from "@/components/Bio"
import { ProjectsPreview } from "@/components/ProjectsPreview"
import { Contact } from "@/components/Contact"

export default function Home() {
    const aboutRef = useRef()
    const projectsRef = useRef()
    const contactRef = useRef()

    const handleNavClick = (s) => {
        const refs = {
            "about": aboutRef,
            "projects": projectsRef,
            "contact": contactRef
        }

        refs[s].current.scrollIntoView({ 
            behavior: "smooth",
            block: "center"
        })
    }

    return (
        <>  
            <Header handleNavClick={handleNavClick}/>
            <Welcome />
            <div className="border-solid border-4 border-black box-border w-full"></div>
            <div ref={aboutRef}>
                <Bio />
            </div>
            <div className="border-solid border-4 border-black box-border w-full"></div>
            <div ref={projectsRef}>
                <ProjectsPreview />
            </div>
            <div className="border-solid border-4 border-black box-border w-full"></div>
            <div ref={contactRef}>
                <Contact/>
            </div>
        </>
    );
}
