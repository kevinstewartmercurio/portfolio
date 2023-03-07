export function Footer() {
    return (
        <>
            <div className="w-full h-[248px] text-center absolute">
                <p className="text-[#0e190d] mt-[224px] text-sm">
                    designed and built by Kevin Stewart-Mercurio&nbsp;
                    <span className="invisible sm:visible absolute sm:static">
                        &#x2022; version 2.0 &#x2022; March 2023
                    </span>
                </p>
            </div>
            <div className="bg-[url(/waves-footer-haikei.png)] bg-no-repeat w-full h-[248px]"></div>
        </>
    )
}