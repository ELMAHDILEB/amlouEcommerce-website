import i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "../src/locales/index.js"
import LanguageDetector from "i18next-browser-languagedetector";

i18n
.use(LanguageDetector)
.use(initReactI18next) // linked with react
.init({
     resources,
       // lng:"en", // default language when web site  work
       fallbackLng: "en", // lang returns i18n  to if it does not  find  language
       supportedLngs: ["en","ar","fr"],
       detection:{
              order:["localStorage", "navigator"],
              caches:["localStorage"]
       },
       interpolation:{  // determine how variables are handled within translated texts
              escapeValue:false 
       }
})

export default i18n;