import { useRef } from "react"

import { Header } from '@/components/Header'
import { Welcome } from "@/components/Welcome"
import { Bio } from "@/components/Bio"
import { ProjectsPreview } from "@/components/ProjectsPreview"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

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
            <Header handleNavClick={handleNavClick} />
            <Welcome />
            <div ref={aboutRef}>
                <Bio handleNavClick={handleNavClick} />
            </div>
            <div ref={projectsRef}>
                <ProjectsPreview />
            </div>
            <div ref={contactRef}>
                <Contact/>
            </div>
            <Footer />
        </>
    );
}
