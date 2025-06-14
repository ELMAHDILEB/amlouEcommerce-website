import  {NavLink} from "react-router-dom"
import {useFeaProducts} from "../../Routes/MainRoutes";
import { useTranslation } from "react-i18next";

const FeaturedProducts = () => {
  const FeaProducts = useFeaProducts();
  const {t} = useTranslation();
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 p-4 mx-auto my-0">
      <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px] text-center py-10" style={{ fontSize: "clamp(20px, 4vw, 50px)" }}>{t("featuredProducts.primaryTitle")}</h1>
      <section className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center font-montserrat">
  {
    FeaProducts.map(({ imgSrc, title, price }, index) => {
      return (
        <article className="w-full  h-[350px] flex flex-col items-center justify-between bg-[var(--cardColor)] cursor-pointer rounded-[15px]" key={index * 4}>
          <div className="w-full h-[150px] lg:h-[200px] overflow-hidden flex items-center justify-center">
            <img className="w-full h-full object-contain" src={imgSrc} alt={title} />
          </div>

          <div className="w-full h-[130px] flex flex-col items-center justify-center gap-2 text-center">
            <h2 className="text-[12px]  md:text-[15px] font-bold uppercase">{title}</h2>
            <span>{price + " " + t("featuredProducts.products.dhs")} </span>
            <div className="flex items-center gap-2 py-4">
              <NavLink to="/products" className="w-[40px] h-[40px] flex items-center justify-center bg-[var(--primary)] text-white text-[22px] border border-[var(--blackColor)] rounded-full cursor-pointer" role="button" tabIndex="1" aria-label="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </NavLink>
            </div>
          </div>
        </article>
      )
    })
  }
</section>

    </section>
  )
}

export default FeaturedProducts;