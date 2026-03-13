import FilterBar from "../components/sections/Products/FilterBar";
import CardsProducts from "../components/sections/Products/CardsProducts";
import SearchInput from "../components/sections/Products/SearchInput";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import useDebounced from "../hooks/useDebounced";
import { HashLoader } from "react-spinners";
import MetaTag from "../components/UI/MetaTag";
import { useGetProductsQuery } from "../features/products/productsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCategory, setPrice, setSort } from "../features/products/productsSlice";


const Products = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { search, category, sort, price } = useSelector(state => state.products)

  const { addToCart } = useOutletContext();
  const debouncedSearch = useDebounced(search, 1000);
  const sortValue = sort === "Price: High to Low" ? "price-desc"
                 : sort === "Price: Low to High" ? "price-asc"
                 : "";
  const { data: products = [], error, isLoading }  = useGetProductsQuery({
     search: debouncedSearch, 
     category: category === "all" ? "" : category, 
     maxPrice: price, 
     sort:sortValue
    });


  const noDatFounded = !isLoading && products.length === 0;


  return (
    <>
      <MetaTag pageKey="products" />
      <section className="w-full  flex flex-col items-center  gap-10  pt-7 relative  px-4 md:px-0  mx-auto my-0">
        <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px] pt-10 text-center" style={{ fontSize: "clamp(20px, 4vw, 50px)" }}>{t("pageProducts.ourProducts")}</h1>
        <SearchInput searchTerm={search} setSearchTerm={(val) => dispatch(setSearch(val))} />
        <FilterBar
          selectedCategory={category}
          setSelectedCategory={(val) => dispatch(setCategory(val))}
          selectedSort={sort}
          setSelectedSort={(val) => dispatch(setSort(val))}
          priceValue={price}
          setPriceValue={(val) => dispatch(setPrice(val))}
        />

        {
          
          isLoading ? <div><HashLoader /></div> :
            error ? <p>Error Loading Products</p> : noDatFounded ?
              (<p className="w-full h-full flex items-center justify-center font-bold text-2xl">{t("dataProducts.noResults")}</p>) :
             
              <CardsProducts products={products} isLoading={isLoading} onAddToCart={addToCart} />
        }

      </section>


    </>

  )
}

export default Products