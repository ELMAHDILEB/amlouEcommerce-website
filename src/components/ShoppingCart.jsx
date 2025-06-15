import { useTranslation } from "react-i18next"
import useArabic from "../hooks/useIsArabic"
import { motion } from "framer-motion"

const ShoppingCart = ({
  onClosePopUp,
  cartItems = [],
  cartitems = [],
  decreaseItem,
  incrementItem,
  removeItem,
  removeCart,
}) => {
  const { t } = useTranslation();
  const isArabic = useArabic();

 
  const items = cartItems.length > 0 ? cartItems : cartitems;

  // total price
  const totalPrice = items.reduce((total, item) => {
    const totalPrice = item?.price || 0
    const totalQuantity = item?.quantity || 0
    return total + totalQuantity * totalPrice
  }, 0)

  return (
    <motion.section
      className="bg-[rgba(0,0,0,0.5)] text-[var(--blackColor)] w-full h-screen fixed left-0 top-0 z-[1000000000000]"
      initial={{ opacity: 0, x: isArabic ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isArabic ? 100 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sm:w-full md:w-[50%] h-full bg-[var(--colorBody)] flex flex-col gap-5">
        <header className="w-full flex justify-between items-center px-2 py-5">
          <h1 className="capitalize text-2xl">{t("ShoppingCart.title")}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={onClosePopUp}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </header>



        <div
          className={`w-full max-h-[68vh] space-y-4 flex flex-col ${items.length <= 0 ? "overflow-y-none" : "overflow-y-auto"}`}
        >
          {items.length === 0 ? (
            <p className="text-center font-bold">{t("ShoppingCart.noItems")}</p>
          ) : (
            items.map((item, index) => {

              let productName;

              if (item.nameKey.startsWith("dataProducts.") || item.nameKey.includes("_")) {
                productName = t(`dataProducts.${item.nameKey}`, item.nameKey)
              } else {
                productName = item.nameKey
              }

              return (
                <div
                  key={item.id || index}
                  className="w-full h-fit flex justify-evenly items-center flex-wrap gap-2 bg-[var(--cardColor)] p-2"
                >
                  <div className="w-[80px] h-[80px] bg-[var(--blackColor)] rounded-full flex items-center justify-center">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={productName}
                      className="w-[80%] h-[80%] object-cover"
                    />
                  </div>

                  <h1 className="capitalize text-[14px]">{productName}</h1>
                  <span>x {item.quantity}</span>

                  <div className="w-fit flex flex-col items-center justify-center gap-2">
                    <div className="w-full flex justify-between items-center">
                      <button
                        className="border-none outline-none cursor-pointer w-[20px] h-[20px] bg-[--SubColor] rounded-full flex items-center justify-center"
                        onClick={() => decreaseItem(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="border-none outline-none cursor-pointer w-[20px] h-[20px] bg-[--SubColor] rounded-full flex items-center justify-center"
                        onClick={() => incrementItem(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="capitalize text-[var(--removeButton)] underline text-[14px] cursor-pointer"
                      onClick={() => removeItem(item.id)}
                    >
                      {t("ShoppingCart.removeItem")}
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {items.length > 0 && (
          <button
            className="capitalize text-[var(--removeButton)] underline text-[14px] cursor-pointer"
            onClick={removeCart}
          >
            {t("ShoppingCart.removeCart")}
          </button>
        )}

        <div
          className={`absolute bottom-0 w-full md:w-1/2 flex justify-center items-center text-[var(--blackColor)] text-center ${
            isArabic ? "right-0" : "left-0"
          }`}
        >
          <span className="w-[50%] py-7 bg-[var(--cardColor)]">
            {t("ShoppingCart.total")}: {totalPrice} {t("ShoppingCart.dhs")}
          </span>
          <button className="w-[50%] py-7 bg-[var(--primary)] cursor-pointer">{t("ShoppingCart.checkout")}</button>
        </div>
      </div>
    </motion.section>
  )
}

export default ShoppingCart
