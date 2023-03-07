export function Footer() {


    return (
        <>
            <div className="w-full h-[200px] text-center absolute">
                <div className="text-[#0e190d] mt-[164px] text-sm lg:text-base">
                    designed and built by Kevin Stewart-Mercurio&nbsp;
                    <span className="w-0 sm:w-max h-0 sm:h-max invisible sm:visible overflow-hidden absolute sm:static">
                        &#x2022; version 2.0 &#x2022; March 2023
                    </span>
                </div>
            </div>
            <div className="bg-[url(/waves-footer-haikei.png)] bg-cover bg-no-repeat w-full h-[200px]"></div>
        </>
    )
}