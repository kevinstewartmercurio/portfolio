import Link from "next/link"

import { Logo } from "./Logo"

export const links = [
    {title: "about", id: "about-link", href: "#about"},
    {title: "projects", id: "projects-link", href: "#projects"},
    {title: "contact", id: "contact-link", href: "#contact"}
]

export function Header() {
    return (
        <>
            <div className="text-[#cac9c9] bg-[#6b7c66] h-20 flex items-center">
                <div className="w-1/2 px-[4%]">
                    <Logo/>
                </div>
                <div className="w-1/2 px-[4%] flex items-center justify-end">
                    {links.map((el, idx) => {
                        return (
                            <Link 
                                href={el.href} 
                                key={idx} 
                                className="mx-[3.5%] font-['Inter'] text-lg font-light duration-300 hover:text-[#703f01]"
                                id={el.id}
                            >
                                {el.title}
                            </Link>
                        )
                    })}
                    <Link 
                        href="/Kevin_Stewart-Mercurio_Resume.pdf" 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-max ml-[3.5%] px-[2%] py-[.75%] border-solid border-2 border-[#cac9c9] rounded-lg box-border font-['Inter'] text-lg font-light"
                        id="resume-btn"
                    >
                        resume
                    </Link>
                </div>
            </div>
        </>
    )
}