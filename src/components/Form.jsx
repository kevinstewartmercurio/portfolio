import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export function Form() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
            .then(() => {
                return null
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <>
            <form 
                ref={form} 
                onSubmit={sendEmail}
                autoComplete="off"
                className="text-[#cac9c9] w-full mt-2 px-4 flex flex-col"
            >
                <label className="w-[282px] xxs:w-[337px] xs:w-[387px] md:w-[85%] mx-auto pl-2 font-['Poppins'] text-sm md:text-base lg:text-lg">
                    Name
                </label>
                <input 
                    type="text" 
                    name="name"
                    required 
                    className="bg-[#676666] w-[282px] xxs:w-[337px] xs:w-[387px] md:w-[85%] mx-auto mb-1 pl-2 rounded-lg text-sm md:text-base lg:text-lg focus-visible:outline-none"
                />
                <label className="w-[282px] xxs:w-[337px] xs:w-[387px] md:w-[85%] mx-auto pl-2 font-['Poppins'] text-sm md:text-base lg:text-lg">
                    Email
                </label>
                <input 
                    type="email" 
                    name="email"
                    required 
                    className="bg-[#676666] w-[282px] xxs:w-[337px] xs:w-[387px] md:w-[85%] mx-auto mb-1 pl-2 rounded-lg text-sm md:text-base lg:text-lg focus-visible:outline-none"
                />
                <label className="w-[282px] xxs:w-[337px] xs:w-[387px] md:w-[85%] mx-auto pl-2 font-['Poppins'] text-sm md:text-base lg:text-lg">
                    Subject
                </label>
                <input
                    type="text" 
                    name="subject"
                    required 
                    className="bg-[#676666] w-[282px] xxs:w-[337px] xs:w-[387px] md:w-[85%] mx-auto mb-1 pl-2 rounded-lg text-sm md:text-base lg:text-lg focus-visible:outline-none"
                    
                />
                <label className="w-[282px] xxs:w-[337px] xs:w-[387px] md:w-[85%] mx-auto pl-2 font-['Poppins'] text-sm md:text-base lg:text-lg">
                    Message
                </label>
                <textarea 
                    name="message"
                    required
                    className="bg-[#676666] w-[282px] xxs:w-[337px] xs:w-[387px] md:w-[85%] h-32 md:h-48 mx-auto pl-2 rounded-lg text-sm md:text-base lg:text-lg focus-visible:outline-none resize-none"
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="bg-[#0a5e18] w-max mx-auto mt-6 px-3 py-[3px] rounded-lg text-sm md:text-base lg:text-lg cursor-pointer outline-none hover:bg-[#085715]" 
                />
            </form>
        </>
    )
}