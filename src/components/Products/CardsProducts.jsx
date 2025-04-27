import { useState } from "react";
import Pagination from "./Pagination";
import 'react-loading-skeleton/dist/skeleton.css';
import Card from "./Card";


const CardsProducts = ({products, isLoading, error}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const endIndex = currentPage  *  productsPerPage;
  const startIndex = endIndex - productsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / productsPerPage);


  return (
    <section className="w-full flex flex-col">
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 py-5 font-montserrat">

        {
          isLoading ? (
               <SkeletonLoader count={5}/>
          ) : (
            currentProducts.map((productItem) => {
              const { id, name, price, category, image } = productItem;
              return (
                
                      <Card key={id} name={name} image={image} price={price} category={category}/>
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
