import { useState } from "react"

import ContactForm from "./ContactForm"

export default function Contact() {
    const [submitted, setSubmitted] = useState<boolean>(false)

    return (
        <>
            <div id="contact" className="w-full flex justify-center items-center">
                <div className="w-full max-w-7xl px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col lg:flex-row justify-center items-center">
                    <div className="w-full lg:w-7/12 mb-3 lg:mb-0 flex flex-col justify-center items-center">
                        <div className="text-secondary w-full mb-2 lg:mb-4 font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
                            Contact
                        </div>
                        <div className="text-primary w-full mb-2 font-inter text-sm sm:text-base lg:text-lg">
                            <div className="mb-1.5">
                                Got a question or an idea? I&#39;d love to hear it!
                            </div>
                            <div>
                                The best way to reach me is via email&nbsp;
                                <button className="w-max" onClick={() => window.open("mailto:kevinstewartmercurio@gmail.com")}>
                                    <span>
                                        &#40;
                                    </span>
                                    <span className="text-tertiary hover:underline">
                                        kevinstewartmercurio@gmail.com
                                    </span>
                                    <span>
                                        &#41;
                                    </span>
                                </button>
                                &nbsp;or via the form provided.
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 lg:pl-8 flex justify-center items-center">
                        {!submitted ? (
                            <ContactForm setSubmitted={setSubmitted} />
                        ) : (
                            <>
                                <div className="text-black bg-[#ececec] rounded-lg px-6 py-4 flex flex-col justify-center items-center font-inter text-sm sm:text-base lg:text-lg text-center">
                                    <div>
                                        Thanks for reaching out!
                                    </div>
                                    <div>
                                        Keep an eye on your inbox, I'll follow up soon!
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}