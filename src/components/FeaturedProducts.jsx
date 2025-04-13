import { FaHeart } from "react-icons/fa";
import noixcajou from "../assets/productsImg/noix-de-cajou.webp"

const FeaturedProducts = ()=> {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 p-4 mx-auto my-0 font-montserrat">
      <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px]" style={{fontSize: "clamp(20px, 4vw, 50px)"}}>Featured Products</h1>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 palce-items-center md:place-items-stretch gap-4">
        <article className="h-[calc(350px/2)] flex flex-col items-center bg-white cursor-pointer">
          <div className="w-fit h-full">
            <img className="w-full h-full object-cover" src={noixcajou} alt="noix de cajou" />
          </div>

          <div className="w-full h-full flex flex-col items-center justify-between gap-4">
            <h2 className="text-[15px] font-normal">Title Product</h2>
            <span className="">85 DHS</span>
            <div className="flex items-center gap-2">
              <button className="font-normal text-[15px] border-solid border-[1px] border-black px-[3px] py-[4px] cursor-pointer">Add To Cart</button>
              <span className="font-normal text-[22px] border-solid border-[1px] border-black px-[3px] py-[4px] cursor-pointer"><FaHeart/></span>
            </div>
          </div>
        </article>
      
    

      </section>
    </section>
  )
}

export default FeaturedProducts;