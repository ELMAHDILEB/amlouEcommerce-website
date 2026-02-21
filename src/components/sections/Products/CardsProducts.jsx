import { useState } from "react"
import Pagination from "./Pagination"
import "react-loading-skeleton/dist/skeleton.css"
import Card from "./Card"
import { useTranslation } from "react-i18next"
import SkeletonLoader from "./SkeletonLoader"
import { useSearchParams } from "react-router-dom";
import useFilters from "../../../hooks/useFilters"

const CardsProducts = ({ products, isLoading }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("_page")) || 1);
  const productsPerPage = 5

  const endIndex = currentPage * productsPerPage
  const startIndex = endIndex - productsPerPage
  const currentProducts = products.slice(startIndex, endIndex)
  const totalPages = Math.ceil(products.length / productsPerPage);

  const { handleFilterChange } = useFilters(undefined, undefined, undefined, undefined, setCurrentPage);

  return (
    <section className="w-full flex flex-col">
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 font-montserrat">
        {isLoading ? (
          <SkeletonLoader count={5} />
        ) : (
          currentProducts.map(({ _id, nameKey, imageUrl, price, categoryKey }) => {
            return (
              <Card
                id={_id}
                key={_id}
                nameKey={nameKey} 
                image={imageUrl}
                price={price}
                categoryKey={categoryKey}
              />
            )
          })
        )}
      </section>
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={(page) => handleFilterChange("_page", page)} />
    </section>
  )
}

export default CardsProducts;
