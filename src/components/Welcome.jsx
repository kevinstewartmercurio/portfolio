const buttons = [
    {
        id: "github-btn",
        iconClassName: "fa-brands fa-github text-2xl",
        url: "https://github.com/kstewartmercurio"
    },
    {
        id: "linkedin-btn",
        iconClassName: "fa-brands fa-linkedin text-2xl",
        url: "https://www.linkedin.com/in/kevin-stewart-mercurio-3a8817246/"
    }
]

export function Welcome() {
    return (
        <>
            <div className="bg-[#6b7c66] h-[360px] md:h-[470px] lg:h-[580px] pl-[8%] md:pl-[10%] lg:pl-[14%] pr-[2%] pt-[12%] sm:pt-[10%] md:pt-[12%] lg:pt-[8%]">
                <h2 className="text-[#cac9c9] font-['Inter'] text-4xl md:text-5xl lg:text-7xl leading-[42px] md:leading-[64px] lg:leading-[84px]">
                    Hi, my name is
                </h2>
                <div className="text-4xl md:text-5xl lg:text-7xl leading-[42px] md:leading-[64px] lg:leading-[84px]">
                    <span className="text-[#703f01] font-['Poppins']">
                        Kevin Stewart-Mercurio
                    </span>
                    <spspan className="text-[#cac9c9] font-['Inter']">
                        .
                    </spspan>
                </div>
                <div className="text-[#cac9c9] mt-8 font-['Inter'] text-xl lg:text-2xl">
                    <span>
                        I'm a&nbsp;
                    </span>
                    <span className="text-[#703f01]">
                        software developer&nbsp;
                    </span>
                    <span>
                        and I'm ready to work with you.
                    </span>
                </div>
                <div className="mt-4 pl-[48%] sm:pl-[64%] md:pl-[56%] lg:pl-[42%]">
                    {buttons.map((el, idx) => {
                        return (
                            <button
                                key={idx}
                                id={el.id}
                                className="text-[#cac9c9] bg-[#6b7c66] w-10 h-10 ml-[4%] lg:ml-[1%] border-[1.5px]  border-solid border-[#cac9c9] rounded-full"
                                onClick={() => {
                                    window.open(el.url, "_blank")
                                }}
                            >
                                <i className={el.iconClassName}></i>
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="bg-[url(/layered-peaks-haikei.png)] bg-cover bg-no-repeat h-[320px] rotate-180"></div>
        </>
    )
}