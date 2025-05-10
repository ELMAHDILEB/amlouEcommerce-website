import { useState } from "react";
import FilterBar from "../components/Products/FilterBar";
import CardsProducts from "../components/Products/CardsProducts";
import useFetchProducts from "../utils/useFetchProducts";
import SearchInput from "../components/Products/SearchInput";
import { useTranslation } from "react-i18next";


const Products = () => {
  const {t} = useTranslation();
  const { products, isLoading } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState("All");
  const [priceValue, setPriceValue] = useState(200);
  const [searchTerm, setSearchTerm] = useState("");



  const filterProducts = products
    .filter((product) =>
      selectedCategory === "All" ||  product.category === selectedCategory
    )
    .filter((product) => product.price <= priceValue)
    .filter((product) => product.nameKey.toLowerCase().includes(searchTerm.toLowerCase().trim())
    )
    .sort((a, b) => {
      // if (selectedSort === "All") return a.price + b.price;
      if (selectedSort === "Price: Low To High") return a.price - b.price;
      if (selectedSort === "Price: High To Low") return b.price - a.price;
      return 0;
    })

  const noDatFounded = filterProducts.length === 0;
  return (
    <section className="w-full h-[calc(100dvh-70px)] flex flex-col items-center  gap-10  pt-7 relative  px-4 md:px-0  mx-auto my-0">
      <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px] pt-10 text-center" style={{ fontSize: "clamp(20px, 4vw, 50px)" }}>{t("pageProducts.ourProducts")}</h1>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        priceValue={priceValue}
        setPriceValue={setPriceValue}
      />
      {
        noDatFounded ?
          (<p className="w-full h-full flex items-center justify-center font-bold text-2xl">No Data Fonded</p>) :
          <CardsProducts products={filterProducts} isLoading={isLoading} />
      }
    </section>
  )
}

export default Products