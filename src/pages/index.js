import { useRef } from "react"

import { Header } from '@/components/Header'
import { Welcome } from "@/components/Welcome"
import { Bio } from "@/components/Bio"
import { ProjectsPreview } from "@/components/ProjectsPreview"

export default function Home() {
    const aboutRef = useRef();
    const projectsRef = useRef();

    const handleNavClick = (s) => {
        const refs = {
            "about": aboutRef,
            "projects": projectsRef
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
            <div ref={aboutRef}>
                <Bio />
            </div>
            <div ref={projectsRef}>
                <ProjectsPreview />
            </div>
        </>
    );
}
