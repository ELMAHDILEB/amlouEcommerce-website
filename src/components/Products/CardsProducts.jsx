import amandes from "../../assets/productsImg/amlouAmandes.png";
import Pagination from "./Pagination";

const CardsProducts = () => {
  return (
     <section className="w-full flex flex-col">
          <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 py-5 font-montserrat">
      {
        Array.from({ length: 11 }, (_, index) => (
          <div className="w-full h-[500px]  flex flex-col items-center bg-[var(--cardColor)]   rounded-[15px] shadow-md overflow-hidden pb-2" key={index * 3}>

            <div className="w-full h-[250px] flex items-center justify-center">
              <img src={amandes} alt="almonds" className="w-full h-full object-contain " />
            </div>

            <div className="w-full flex flex-col justify-center gap-10  flex-grow">
              <div className="flex flex-row justify-between px-4">
                <h1 className="font-semibold tracking-5">Title Product</h1>
                <h2 className="font-semibold tracking-xl">50DHS</h2>

              </div>

              <div className=" flex flex-row justify-between px-4">

                <p className="font-normal text-[14px] text-[var(--SubColor)]">Category</p>
                <p className="font-normal text-[14px] text-[var(--SubColor)]">Amlou</p>

              </div>
            </div>

            <a href="#" className="px-10 py-3 bg-[var(--primary)] rounded-[10px] font-semibold uppercase text-[15px]">Add To cart</a>
          </div>
        ))
      }
      
    </section>
    <Pagination/>
     </section>
    

   
  )
}


export default CardsProducts;
