import Link from "next/link"
import Image from "next/image"

import codeReview from "../../public/undraw_code_review.png"

export function Bio() {
    return (
        <>
            <div className="bg-[#212f1d] w-full h-max py-8 flex flex-col">
                <div className="text-[#cac9c9] h-max pl-4 md:pl-12 lg:pl-20 pr-3 md:pr-10 lg:pr-20 pt-7 pb-4">
                    <h1 className="font-['Poppins'] text-5xl md:text-7xl lg:text-8xl font-bold">
                        about me
                    </h1>
                    <div className="mt-4 pl-6 md:pl-10 lg:pl-16 font-['Inter'] text-sm md:text-base lg:text-xl font-light">
                        <p>
                            I recently graduated from Swarthmore College, where
                            I double majored in Mathematics and Computer
                            Science. I've been programming for 6 years and
                            below you'll find some of the technologies I use
                            most frequently. My education has prepared me for
                            industry work by giving me a strong background in
                            theoretical computer science, systems programming,
                            and software development. I learn fast and I take
                            pride in what I do.&nbsp;
                            <Link
                                href="/"
                                className="text-[#965b0f] hover:underline"
                            >
                                Let's get in touch.
                            </Link>
                        </p>
                        <p className="mt-5">
                            I enjoy working through hard problems. When I'm not
                            working on software projects, I challenge myself on
                            the Ultimate Frisbee field, at the bouldering gym,
                            and at home learning new songs on the guitar.
                        </p>
                    </div>
                </div>
                <div className="bg-[#212f1d] h-max flex justify-center">
                    <Image
                        src={codeReview}
                        alt="undraw"
                        className="bg-[#212f1d] w-[320px] sm:w-[480px]"
                    />
                </div>
            </div>
        </>
    )
}