import { useTranslation } from "react-i18next";

const ContentAbout = () => {
    const {t} = useTranslation();
    return (
        <div className='w-full md:w-[70%] h-fit'>
            <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px] py-10 text-center"  style={{fontSize: "clamp(20px, 4vw, 50px)"}}>{t("aboutPage.primaryTitle")}</h1>
            <p className="text-base md:text-lg leading-relaxed tracking-wide text-justify mx-auto my-4 px-4 max-w-3xl">
            {t("aboutPage.description")}
            </p>
        </div>
    )
}

export default ContentAbout;
