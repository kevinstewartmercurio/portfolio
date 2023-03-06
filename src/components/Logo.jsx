import Link from "next/link"

export function Logo() {
    return (
        <div>
            <Link 
                href="/" 
                className="w-max text-5xl font-['Poppins'] font-semibold"
            >
                ksm
            </Link>
        </div>
    )
}