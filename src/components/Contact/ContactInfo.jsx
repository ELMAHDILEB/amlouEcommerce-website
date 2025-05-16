import { useTranslation } from "react-i18next";
import useIsArabic from '../../hooks/useIsArabic';

const ContactInfo = () => {
    const {t} = useTranslation();
    const isArabic = useIsArabic();
    return (
        <section className={`w-full  h-full flex flex-col  justify-center pl-20 py-3 ${isArabic ? "pr-[40px]" : ""}`} >
            <div className="flex flex-col text-start w-full">
                <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[22px]  py-7" style={{ fontSize: "clamp(20px, 2vw, 35px)" }}>{t("contactus.address")}</h1>
                <address className="text-[15px] capitalize">
                    1234 Street WAFERS, <br/>
                    Main Street, <br/>
                    New York, USA <br/>
                </address>
            </div>
            <div className="flex flex-col w-full">
                <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[22px]  py-7" style={{ fontSize: "clamp(20px, 2vw, 35px)" }}>{t("contactus.contacts")}</h1>
                <span className="py-3"><b>+212 7X-5XX4578</b></span>
                <p className="text-[15px] capitalize">National Fixed network call</p>
                <span className="py-3"><b>+212 7X-5XX4578</b></span>
                <p className="text-[15px] capitalize">National mobile network call</p>
            </div>
            <div className="flex flex-col  w-full">
                <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[22px]  py-7" style={{ fontSize: "clamp(20px, 2vw, 35px)" }}>{t("contactus.email")}</h1>
                 <p className="text-[15px] lowercase">amlouInou@mail.ma</p>
            </div>

        </section>
    )
}

export default ContactInfo;
