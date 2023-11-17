import { Header } from '@/components/Header'
import { Welcome } from "@/components/Welcome"
import { Bio } from "@/components/Bio"
import { ProjectsPreview } from "@/components/ProjectsPreview"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
    return (
        <>
            <Header />
            <Welcome />
            <div>
                <Bio />
            </div>
            <div>
                <ProjectsPreview />
            </div>
            <div>
                <Contact/>
            </div>
            <Footer />
        </>
    );
}
