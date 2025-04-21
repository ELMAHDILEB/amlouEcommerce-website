import { memo } from "react";
import SearchFilter from "../components/Products/SearchFilter"
import FilterBar from "../components/Products/FilterBar";

const Products = memo(() => {
  const categories = ["Dried Fruits","Amlou","Preserved Vegetables and Fruits"];
  return (
    <section className="w-full h-[calc(100dvh-70px)] flex flex-col items-center  gap-10  pt-7 relative  px-4 md:px-0  mx-auto my-0">
      <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px] pt-10 text-center"  style={{fontSize: "clamp(20px, 4vw, 50px)"}}>Our Products</h1>
       <SearchFilter/>
       <FilterBar/>
    </section>
  )
})

export default Products