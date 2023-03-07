import { Form } from "@/components/Form"

export function Contact() {
    return (
        <>
            <div className="bg-[#703f01] w-full h-max pt-32 flex flex-col md:flex-row-reverse">
                <div className="text-[#cac9c9] md:w-1/2 pl-4 md:pl-0 pr-3 md:pr-10 lg:pr-20 my-auto pt-7 md:pt-0 pb-4 md:pb-20">
                    <h1 className="font-['Poppins'] text-5xl md:text-7xl lg:text-8xl font-bold">
                        contact me
                    </h1>
                    <div className="mt-6 pl-6 md:pl-6 font-['Inter'] text-sm md:text-base lg:text-xl font-light">
                        <p>
                            Got a question or an idea? I'd love to hear it!
                        </p>
                        <p className="mt-5">
                            I am currently looking for new opportunities. The 
                            best way to reach me is via email&nbsp;
                            <button
                                className="text-[#212f1d] hover:underline"
                                onClick={() => {
                                    window.open("mailto:kevinstewartmercurio@gmail.com")
                                }}
                            >
                                (@kevinstewartmercurio@gmail.com)
                            </button>
                            &nbsp;or via the form provided.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Form/>
                </div>
            </div>
        </>
    )
}