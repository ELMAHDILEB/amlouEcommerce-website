import { useState } from "react";
import FilterBar from "../components/sections/Products/FilterBar";
import CardsProducts from "../components/sections/Products/CardsProducts";
import SearchInput from "../components/sections/Products/SearchInput";
import { useTranslation } from "react-i18next";
import { useOutletContext, useSearchParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts"
import { filtredProducts } from "../utils/filtredProducts";
import useDebounced from "../hooks/useDebounced";
import { HashLoader } from "react-spinners";
import useFilters from "../hooks/useFilters";
import MetaTag from "../components/UI/MetaTag";


const Products = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams()
  const { products, isLoading, error } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");
  const [selectedSort, setSelectedSort] = useState(searchParams.get("sort") || "All");
  const [priceValue, setPriceValue] = useState(Number(searchParams.get("price") || 200));
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const { addToCart } = useOutletContext();
  const debouncedSearch = useDebounced(searchTerm, 1000);


  const filterProducts = filtredProducts(products, selectedCategory, selectedSort, debouncedSearch, priceValue)
  const noDatFounded = filterProducts.length === 0;

  const { handleFilterChange } = useFilters(
    setSelectedCategory,
    setSelectedSort,
    setSearchTerm,
    setPriceValue,
    undefined
  );


  return (
    <>
      <MetaTag pageKey="products" />
      <section className="w-full  flex flex-col items-center  gap-10  pt-7 relative  px-4 md:px-0  mx-auto my-0">
        <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px] pt-10 text-center" style={{ fontSize: "clamp(20px, 4vw, 50px)" }}>{t("pageProducts.ourProducts")}</h1>
        <SearchInput searchTerm={searchTerm} setSearchTerm={(val) => handleFilterChange("search", val)} />
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={(val) => handleFilterChange("category", val)}
          selectedSort={selectedSort}
          setSelectedSort={(val) => handleFilterChange("sort", val)}
          priceValue={priceValue}
          setPriceValue={(val) => handleFilterChange("price", val)}
        />

        {
          
          isLoading ? <div><HashLoader /></div> :
            error ? <p>Error Laoding Products</p> : noDatFounded ?
              (<p className="w-full h-full flex items-center justify-center font-bold text-2xl">{t("dataProducts.noResults")}</p>) :
             
              <CardsProducts products={filterProducts} isLoading={isLoading} onAddToCart={addToCart} />
        }

      </section>


    </>

  )
}

export default Products