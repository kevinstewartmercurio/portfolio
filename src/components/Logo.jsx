import Link from "next/link"

export function Logo() {
    return (
        <div>
            <Link 
                href="/" 
                className="w-max text-5xl font-['Poppins'] font-semibold duration-300 hover:text-[#703f01] outline-none"
            >
                ksm
            </Link>
        </div>
    )
}