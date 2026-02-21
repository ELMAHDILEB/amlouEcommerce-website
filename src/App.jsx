import { lazy, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { links } from "./routes/MainRoutes";
import { useTranslation } from 'react-i18next';
const MainWrapper = lazy(() => import("./components/sections/MainWrapper"));



function App() {
 
  const { i18n } = useTranslation();
  useEffect(() => {
    const isArabic = i18n.language === "ar";
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    isArabic ? document.body.classList.add("arabic-font") : document.body.classList.remove("arabic-font");
  }, [i18n.language]);
  return (
      <Routes>
      <Route path="/" element={<MainWrapper />}>
        {
          links.map(({ path, element, children }, index) => {
            if(children){
              return (
              <Route key={index * 3} element={element} >
                    {children.map((child, childID)=>(
                       <Route key={childID} path={child.path} element={child.element}/>
                    ))}
              </Route>
            );
            }

            return <Route key={index * 3} path={path} element={element}/>
          })
        }
      </Route>
    </Routes>


  )
}

export default App
