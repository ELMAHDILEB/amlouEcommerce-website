import { lazy, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { links } from "./Routes/MainRoutes";
import { useTranslation } from 'react-i18next';
const MainWrapper = lazy(() => import("./components/MainWrapper"));



function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const isArabic = i18n.language === "ar";
    document.body.classList.toggle("arabic-font", isArabic);
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language])
  return (

    <Routes>
      <Route path="/" element={<MainWrapper />}>
        {
          links.map((link, index) => {
            const { path, element } = link;
            return (
              <Route key={index * 3} path={path} element={element} />
            )
          })
        }
      </Route>
    </Routes>


  )
}

export default App
