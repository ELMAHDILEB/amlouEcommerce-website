import i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "../public/locales/index"

i18n
.use(initReactI18next) // linked with react
.init({
     resources,
       lng:"en", // default language when web site  work
       fallbackLng: "en", // lang returns i18n  to if it does not  find  language
       interpolation:{  // determine how variables are handled within translated texts
              escapeValue:false 
       }
})

export default i18n;