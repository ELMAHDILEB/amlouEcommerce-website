import { useTranslation } from "react-i18next"

const useIsArabic = () => {
    const {i18n} = useTranslation();
  return i18n.language === "ar";
}

export default useIsArabic;
