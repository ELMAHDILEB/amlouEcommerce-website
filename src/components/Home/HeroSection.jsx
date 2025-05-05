import { NavLink } from "react-router-dom";
import WrapperResponsiveImage from './WrapperResponsiveImage.jsx';
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const {t} = useTranslation();

  return (
    <main className='w-full h-full flex flex-col items-center justify-around'>
          <div className=' w-full flex items-center  justify-evenly  flex-col md:flex-row'>
            <WrapperResponsiveImage />
            <div className='flex items-center justify-center  w-full md:w-3xl h-full uppercase font-extrabold  ' style={{ fontSize: "clamp(25px, 4vw, 50px)" }}>
              <h1 className='text-center '>{t("hero.primaryTitle")} <span className='text-[var(--primary)] font-lobster tracking-[10px]'>{t("hero.secondaryTitle")}</span> {t("hero.tertiaryTitle")} </h1>
            </div>
          </div>
          <NavLink to="/products" className='px-10 py-3 bg-[var(--primary)] rounded-[30px] font-medium uppercase text-black ' data-discover="true" aria-label="Products page">
            {t("hero.button")}
          </NavLink>
        </main>
  )
}

export default HeroSection
