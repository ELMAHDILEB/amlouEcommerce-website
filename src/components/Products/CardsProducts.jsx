import { useState } from "react";
import Pagination from "./Pagination";
// import data from "../../data/products.json";
import { useEffect } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css'; 


const CardsProducts = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage]  = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    axios.get("/data/products.json")
      .then((res) => {
        const dataValue = res.data;
        setProducts(dataValue);
        setIsLoading(false);

      })
      .catch((error) => {
        setIsLoading(false);
      })
  }, []);

     const startIndex = (currentPage  -  1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const currentProducts  = products.slice(startIndex, endIndex);
     const totalPages = Math.ceil(products.length / itemsPerPage);


  return (
    <section className="w-full flex flex-col">
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 py-5 font-montserrat">

        {
          isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div
                className="w-full h-[500px] flex flex-col items-center bg-[var(--cardColor)] rounded-[15px] shadow-md overflow-hidden pb-2"
                key={index}
              >
                <div className="w-full h-[250px] flex items-center justify-center">
                  <Skeleton height="100%" width="100%" />
                </div>
                <div className="w-full flex flex-col justify-center gap-10 flex-grow">
                  <div className="flex flex-row justify-between px-4">
                    <Skeleton width={150} height={20} />
                    <Skeleton width={100} height={20} />
                  </div>
                  <div className="flex flex-row justify-between px-4">
                    <Skeleton width={80} height={15} />
                    <Skeleton width={50} height={15} />
                  </div>
                </div>
                <Skeleton width={150} height={40} />
              </div>
            ))
          ): (
            currentProducts.map((productItem)=>{
              const {id, name,price,category,image} = productItem;
                            return (
        <div className="w-full h-[500px]  flex flex-col items-center bg-[var(--cardColor)]   rounded-[15px] shadow-md overflow-hidden pb-2"  key={id}>

          <div className="w-full h-[250px] flex items-center justify-center">
            <img src={image} alt={name} className="w-full h-full object-contain " />
          </div>

          <div className="w-full flex flex-col justify-center gap-10  flex-grow">
            <div className="flex flex-col justify-between items-center gap-5 px-4">
              <h1 className="font-semibold tracking-5 uppercase text-center text-[15px]">{name}</h1>
              <h2 className="font-normal tracking-xl">{`${price} DHS`}</h2>

            </div>

            <div className=" flex flex-row justify-between px-4">

              <p className="font-normal text-[14px] text-[var(--SubColor)]">Category</p>
              <p className="font-normal text-[14px] text-[var(--SubColor)]">{category}</p>

            </div>
          </div>

          <a href="#" className="px-10 py-3 bg-[var(--primary)] rounded-[10px] font-semibold uppercase text-[15px]">Add To cart</a>
        </div>

        )
                          })
        )
            }

      </section>
      <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>



  )
}


export default CardsProducts;
