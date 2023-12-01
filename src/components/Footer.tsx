import Link from "next/link"

export default function Footer() {
    return (
        <>
            <div className="text-[#5a5a5a] pt-10 pb-6 font-inter text-xs sm:text-sm flex justify-center items-center">
                <div>
                    Designed and built by&nbsp;
                    <Link href="/" className="underline hover:text-tertiary duration-500">
                        Kevin Stewart-Mercurio
                    </Link>
                </div>
                <div className="hidden sm:block">
                    &nbsp;&nbsp;&#x2022;&nbsp;&nbsp;
                </div>
                <div className="hidden sm:block">
                    December 2023
                </div>
            </div>
        </>
    )
}