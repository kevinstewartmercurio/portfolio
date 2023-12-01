import About from "@/components/About"
import Contact from "@/components/Contact"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

export default function Home() {
    return (
        <>
			<Hero />
			<div>
				<Header />
			</div>
			<div className="py-32 md:pt-48 lg:pt-60">
				<CTA />
			</div>
			<div className="py-8 md:py-10 lg:py-20">
				<About />
			</div>
			<div className="py-8 md:py-10 lg:py-20">
				<Projects />
			</div>
			<div className="py-8 md:py-10 lg:pt-20">
				<Contact />
			</div>
			<Footer />
		</>
    )
}
