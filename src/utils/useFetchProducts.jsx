import axios from "axios";
import { useState, useEffect } from "react";


const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setIsError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/data/products.json")
                const dataValue = response.data;
                setProducts(dataValue);
            }
            catch (error) {
                setIsError(false)
            } finally {
                setIsLoading(false);
            }
        };
        fetchData()
    }, []);
    return {products, isLoading, error}
}

export default useFetchProducts
