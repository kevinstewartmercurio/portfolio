import { Welcome } from "@/components/Welcome";
import { Bio } from "@/components/Bio";
import { ProjectsPreview } from "@/components/ProjectsPreview";

export default function Home() {
    return (
        <>
            <Welcome />
            <Bio />
            <ProjectsPreview />
        </>
    );
}
