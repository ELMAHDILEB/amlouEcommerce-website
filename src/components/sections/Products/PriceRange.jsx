import { useTranslation } from "react-i18next";

const PriceRange = ({min = "0", max = "200", priceValue, setPriceValue}) => {

  const {t} = useTranslation();


    const sliderRange = (e)=>{
        const value = Number(e.target.value);
        setPriceValue(value);
    }
  return (
    <label className="flex flex-col gap-4 h-fit">
    <span className="font-bold">{t("pageProducts.priceRang")}</span>
    <input type="range" min={min} max={max} className="progress" onInput={sliderRange}  value={priceValue}/>
    <div className="w-full flex flex-row justify-between gap-5">
      <span>{min} {t("pageProducts.price")}</span>
      <span className="flex items-center gap-4">{t("pageProducts.value")}: <p className="value">{priceValue} {t("pageProducts.price")}</p></span>
      
      <span>{max} {t("pageProducts.price")}</span>
    </div>

  </label>
  )
}

export default PriceRange;
