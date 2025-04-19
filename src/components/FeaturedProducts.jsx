// import noixcajou from "../assets/productsImg/noix-de-cajou.png"
// import cajoufromage from "../assets/productsImg/cajou-fromage.png";
// import cajouChili from "../assets/productsImg/cajou-chili.png";
import  {NavLink} from "react-router-dom"
import {FeaProducts} from "../Routes/MainRoutes";

const FeaturedProducts = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 p-4 mx-auto my-0 font-montserrat">
      <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px]" style={{ fontSize: "clamp(20px, 4vw, 50px)" }}>Featured Products</h1>
      <section className="w-full h-fit flex flex-wrap items-center justify-center gap-4">
        {
          FeaProducts.map((item, index) => {
            const {imgSrc, title, price } = item;
            return   <article className="w-[300px] h-[400px] flex flex-col items-center justify-between bg-[var(--cardColor)]  cursor-pointer rounded-[2px]" key={index * 4}>
                <div className="w-full h-[200px] overflow-hidden flex items-center justify-center">
                  <img className="w-full h-full object-contain"  src={imgSrc}  alt={title} />
                </div>

                <div className="w-full h-[130px] flex flex-col items-center justify-center gap-2">
            <h2 className="text-[15px] font-bold uppercase">{title}</h2>
            <span className="">{price} DHS</span>
            <div className="flex items-center gap-2 py-4">

              <NavLink to="/products" className="w-[40px] h-[40px]  flex items-center justify-center bg-[var(--primary)] text-white text-[22px] border border-[var(--blackColor)] rounded-[50%] cursor-pointer" role="button" tabIndex="1" aria-label="button">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>

              </NavLink>
            </div>
          </div>
              </article>

          })
        }


      </section>
    </section>
  )
}

export default FeaturedProducts;