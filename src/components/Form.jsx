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
                className="text-[#cac9c9] mt-2 px-4 flex flex-col"
            >
                <label className="pl-1.5 font-['Poppins'] text-sm">
                    Name
                </label>
                <input 
                    type="text" 
                    name="name" 
                    className="bg-[#676666] mb-3 rounded-lg focus-visible:outline-none"
                />
                <label className="pl-1.5 font-['Poppins'] text-sm">
                    Email
                </label>
                <input 
                    type="email" 
                    name="email" 
                    className="bg-[#676666] mb-3 rounded-lg focus-visible:outline-none"
                />
                <label className="pl-1.5 font-['Poppins'] text-sm">
                    Message
                </label>
                <textarea 
                    name="message" 
                    className="bg-[#676666] rounded-lg focus-visible:outline-none"
                />
                <input 
                    type="submit" 
                    value="Send" 
                />
            </form>
        </>
    )
}