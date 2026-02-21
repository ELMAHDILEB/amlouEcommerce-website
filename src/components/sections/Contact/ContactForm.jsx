import { useTranslation } from "react-i18next";
const ContactForm = () => {
    const {t} = useTranslation();
    return (
        <section className="w-full  h-full flex flex-col  items-center justify-center py-3 px-2 lg:px-0  gap-7 ">

            <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[22px]  py-7" style={{ fontSize: "clamp(20px, 2vw, 35px)" }}>{t("contactus.primaryTitle")}</h1>
            <p className="text-[15px] capitalize text-center">{t("contactus.paagraph")}</p>

            <form>
                <div className="flex flex-col py-3 gap-3">
                    <label>{t("contactus.inputs.name")}</label>
                    <input type="text"  className="w-[300px] outline-none  border-b-[var(--cardColor)] border-solid border-b-2"/>
                </div>
                <div className="flex flex-col py-3 gap-3">
                    <label>{t("contactus.inputs.phone")}</label>
                    <input type="text" className="w-[300px] outline-none   border-b-[var(--cardColor)] border-solid border-b-2" />
                </div>
                <div className="flex flex-col py-3 gap-3">
                    <label>{t("contactus.inputs.email")}</label>
                    <input type="email"  className="w-[300px] outline-none   border-b-[var(--cardColor)] border-solid border-b-2"/>
                </div>
                <div className="flex flex-col py-3 gap-3">
                    <label>{t("contactus.inputs.message")}</label>
                    <textarea className="w-[300px] outline-none   border-b-[var(--cardColor)] border-solid border-b-2 resize-none"></textarea>
                </div>
            </form>

            <button type="submit" className="bg-[var(--primary)] px-7 py-2 cursor-pointer">{t("contactus.inputs.submitMessage")}</button>

        </section>
    )
}

export default ContactForm;
