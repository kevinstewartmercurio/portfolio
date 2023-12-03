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
			<div className="pt-32 pb-20 lg:pt-48">
				<CTA />
			</div>
			<div className="py-8">
				<About />
			</div>
			<div className="py-8">
				<Projects />
			</div>
			<div className="py-8">
				<Contact />
			</div>
			<Footer />
		</>
    )
}
