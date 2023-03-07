import { Form } from "@/components/Form"

export function Contact() {
    return (
        <>
            <div className="bg-[#703f01] w-full h-[800px]">
                <div className="text-[#cac9c9] h-max pl-4 pr-3 pt-7 pb-4">
                    <h1 className="font-['Poppins'] text-5xl md:text-7xl lg:text-8xl font-bold">
                        contact me
                    </h1>
                    <div className="mt-4 pl-6 font-['Inter'] text-sm font-light">
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
                                (@kevinstewartmercurio@gmail.com)&nbsp;
                            </button>
                            or via the form provided.
                        </p>
                    </div>
                </div>
                <Form />
            </div>
        </>
    )
}