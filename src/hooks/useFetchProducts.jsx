import axios from "axios";
import { useState, useEffect, useRef } from "react";


const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setIsError] = useState(null);
    const abortControllerRef = useRef(null)


    useEffect(() => {
        const fetchData = async () => {
            // cancel any old request that is still working
            abortControllerRef.current?.abort();

            // create new abort controller
            abortControllerRef.current = new AbortController();
            try {
                setIsLoading(true);
                const response = await axios.get("/data/products.json", {
                    signal: abortControllerRef.current?.signal 
                })
                if(!response.data) throw new  Error("failed fetch data")
                const dataValue = response.data;
                setProducts(dataValue);
            }
            catch (err) {
                if(err.name == "AbortError"){
                    console.error("fetched aborted")
                }else{
                    setIsError(err.message)
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchData()
       return ()=> abortControllerRef.current?.abort()
    }, []);
    return {products, isLoading, error}
}

export default useFetchProducts;
