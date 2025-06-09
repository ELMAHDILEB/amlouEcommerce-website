import { useState, useEffect } from "react"

 const useDarkMode = ()=> {
    const [isDarkMode, setIsDarkMode] = useState(()=>{
        return localStorage.getItem("theme") === "darkMode";
    });



    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add("darkMode");
        }else{
            document.documentElement.classList.remove("darkMode");
        }
        localStorage.setItem("theme", isDarkMode ? "darkMode" : "lightMode");
    },[isDarkMode]);

    const toggleDarkTheme = ()=>{
        setIsDarkMode((prev)=> !prev);
    }
  return [isDarkMode, toggleDarkTheme];
}


export  default useDarkMode;