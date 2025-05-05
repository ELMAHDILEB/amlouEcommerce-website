import i18next from "i18next";
import { useState } from "react"
import { useTranslation } from "react-i18next";

const SwitcherLang = () => {
  const languages = [
    { code: 'en', label: "Englsh" },
    { code: 'ar', label: "العربية" },
    { code: 'fr', label: "Français" }
  ]
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  // const labels = useLabels();
  const selectedLang = languages.find((i) => i.code === currentLang)?.code.toUpperCase();

  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  }

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  }
  return (
    <div className="flex flex-col gap-2 relative" onClick={handleOpen}>

      <div className="flex items-center justify-center gap-2 bg-[var(--cardColor)] py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>

        <label>{selectedLang}</label>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>


      {
        open &&
        (
          <div className={`w-full py-3 px-1 bg-[var(--cardColor)]  flex-col items-center absolute top-[45px] rounded-2xl ${open ? "flex" : "hidden"}`}>

            <ul className="w-full  text-sm  flex flex-col items-center justify-center gap-2" >
              {
                languages.map((lang, index) => {
                  const { code, label } = lang;
                  return (<li key={index * 3} className="w-full py-3 text-center hover:bg-gray-400 transition-all duration-1000 rounded-2xl">
                    <button onClick={() => handleChange(code)}>
                      <span className="cursor-pointer">{label}</span>
                    </button>
                  </li>
                  )
                })
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default SwitcherLang
