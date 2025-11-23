import { useTranslation } from "react-i18next"

const Card = ({ id, nameKey, image, categoryKey, price, onAddToCart }) => {
  const { t } = useTranslation()


  const product = { id, nameKey, image, categoryKey, price }
  const translateName = t(`dataProducts.${nameKey}`, nameKey)
  const displayname = translateName === nameKey ? translateName.replace(/_/g, " ") : translateName

  const translatedCategory = categoryKey
    ? t(`dataProducts.category.${categoryKey}`, categoryKey)
    : t("dataProducts.category.title")

  return (
    <div
      className="w-full h-[500px] flex flex-col items-center bg-[var(--cardColor)] rounded-[15px] shadow-md overflow-hidden pb-2"
      key={id}
    >
      <div className="w-full h-[200px] lg:h-[250px] flex items-center justify-center">
        <img src={image || "/placeholder.svg"} alt={displayname} className="w-full h-[70%] lg:h-full object-contain" />
      </div>

      <div className="w-full flex flex-col justify-center gap-10 flex-grow">
        <div className="flex flex-col justify-between items-center gap-5 px-4">
          <h1 className="font-semibold tracking-5 uppercase text-center text-[12px] md:text-[15px]">{displayname}</h1>
          <h2 className="font-normal tracking-xl">
            {`${price}`} {t("pageProducts.price")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-4">
          <p className="font-normal text-[14px] text-[var(--SubColor)]">{t("dataProducts.category.title")}</p>
          <p className="font-normal text-[14px] text-[var(--SubColor)]">{translatedCategory}</p>
        </div>
      </div>

      <button
        className="cursor-pointer px-7 py-3 lg:px-10 lg:py-3 bg-[var(--primary)] rounded-[10px] font-semibold uppercase text-[12px] lg:text-[15px]"
        onClick={() => onAddToCart(product)} 
      >
        {t("dataProducts.addtocard")}
      </button>
    </div>
  )
}

export default Card
