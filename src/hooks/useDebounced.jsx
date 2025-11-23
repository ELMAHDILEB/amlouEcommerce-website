import { useEffect, useState } from "react";

const useDebounced = (value, delay = 500) => {
    const [isDebounce, setIsDebounce] = useState(value);

   useEffect(()=>{
    const timeout = setTimeout(()=>{
             setIsDebounce(value);
    }, delay)
       return ()=> clearTimeout(timeout)
   },[value, delay])
  return isDebounce
}

export default useDebounced
