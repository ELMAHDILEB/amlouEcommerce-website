import { useState} from "react";
import Pagination from "./Pagination";
import 'react-loading-skeleton/dist/skeleton.css';
import Card from "./Card";
import { useTranslation } from "react-i18next";

const CardsProducts = ({products, isLoading, error, onAddToCart}) => {

  const {t} = useTranslation();

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
            currentProducts.map(({id, nameKey, image, price, category}) => {

              return (
                
                      <Card id={id} key={id} name={t(`dataProducts.${nameKey}`)} image={image} price={price} category={t(`dataProducts.category.${category}`)}  onAddToCart={onAddToCart} />
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
