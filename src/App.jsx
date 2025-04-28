import {  lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import {links} from "./Routes/MainRoutes" ;
const MainWrapper = lazy(() => import("./components/MainWrapper"));



function App() {

  return (
 
        <Routes>
        <Route path="/" element={<MainWrapper/>}>
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
