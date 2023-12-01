import "dotenv/config"
import emailjs from "@emailjs/browser"
import { useState, Dispatch, SetStateAction } from "react"

export default function ContactForm(props: {setSubmitted: Dispatch<SetStateAction<boolean>>}) {
    const { setSubmitted} = props

    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [subject, setSubject] = useState<string>("")

    const handleEmailChange = (e: { target: { value: any } }) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e: { target: { value: any } }) => {
        setMessage(e.target.value)
    }

    const handleNameChange = (e: { target: { value: any} }) => {
        setName(e.target.value)
    }

    const handleSubjectChange = (e: { target: { value: any } }) => {
        setSubject(e.target.value)
    }

    const sendEmail = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        try {
            const templateParams: {[key: string]: string} = {
                name: name,
                email: email,
                subject: subject,
                message: message
            }

            emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)
                .then((res) => {
                    if (res.status === 200) {
                        setSubmitted(true)
                    } else {
                        setSubmitted(false)
                        console.log("Something went wrong during form submission.")
                    }
                })
        } catch(error) {
            setSubmitted(false)
            console.error(error)
        }
    }

    return (
        <>
            <form id="contact-form" onSubmit={sendEmail} className="w-full max-w-xl lg:max-w-none flex flex-col font-inter text-sm sm:text-base lg:text-lg">
                <div className="input-container mb-1.5 relative flex flex-col">
                    <input id="name" type="text" value={name} onChange={handleNameChange} required className="bg-[#ececec] border-form-border border-[1px] rounded-lg w-full h-10 sm:h-11 lg:h-12 px-4 pt-2 outline-none"/>
                    <label htmlFor="name" className={`text-gray-400 ${name && "filled"}`}>
                        Name
                    </label>
                </div>
                <div className="input-container mb-1.5 relative flex flex-col">
                    <input id="email" type="email" value={email} onChange={handleEmailChange} required className="bg-[#ececec] border-form-border border-[1px] rounded-lg w-full h-10 sm:h-11 lg:h-12 px-4 pt-2 outline-none"/>
                    <label htmlFor="email" className={`text-gray-400 ${email && "filled"}`}>
                        Email Address
                    </label>
                </div>
                <div className="input-container mb-1.5 relative flex flex-col">
                    <input id="subject" type="text" value={subject} onChange={handleSubjectChange} required className="bg-[#ececec] border-form-border border-[1px] rounded-lg w-full h-10 sm:h-11 lg:h-12 px-4 pt-2 outline-none"/>
                    <label htmlFor="subject" className={`text-gray-400 ${subject && "filled"}`}>
                        Subject
                    </label>
                </div>
                <div className="input-container relative flex flex-col">
                    <textarea id="message" value={message} onChange={handleMessageChange} required rows={10} className="bg-[#ececec] border-form-border border-[1px] rounded-lg w-full px-4 pt-3.5 outline-none resize-none" />
                    <label htmlFor="message" className={`text-gray-400 ${message && "filled"}`}>
                        Message
                    </label>
                </div>
                <div className="w-full flex justify-center items-center">
                    <input type="submit" value="Submit" className="text-tertiary bg-[#8a582360] border-[#774918] border-[1px] rounded-lg h-8 mt-3 px-5 text-sm sm:text-base lg:text-lg hover:cursor-pointer hover:border-tertiary duration-300" />
                </div>
            </form>
        </>
    )
}