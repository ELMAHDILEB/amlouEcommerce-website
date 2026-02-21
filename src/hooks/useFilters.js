import { useSearchParams } from "react-router-dom";

const useFilters = (setSelectedCategory, setSelectedSort, setSearchTerm, setPriceValue, setCurrentPage) => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    
    const handleFilterChange = (key, value) => {
      const params = new URLSearchParams(searchParams);

      switch (key) {
        case "category":
          setSelectedCategory && setSelectedCategory(value);
          break;
        case "sort":
          setSelectedSort && setSelectedSort(value);
          break;
        case "search":
          setSearchTerm && setSearchTerm(value);
          break;
        case "price":
          setPriceValue && setPriceValue(value);
          break;
        case "_page":
          setCurrentPage && setCurrentPage(Number(value));
          break;
        default:
          break;
      }

      if(key) {
        params.set(key, value);
        if(key !== "_page") {
          params.set("_page", "1");
          setCurrentPage && setCurrentPage(1);
        }
      }

      setSearchParams(params);
    };

    return { handleFilterChange };
};

export default useFilters;
