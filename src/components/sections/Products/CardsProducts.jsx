import Pagination from "./Pagination"
import "react-loading-skeleton/dist/skeleton.css"
import Card from "./Card"
import { useTranslation } from "react-i18next"
import SkeletonLoader from "./SkeletonLoader"
import { useDispatch, useSelector } from "react-redux"
import { setPage } from "../../../features/products/productsSlice"

const CardsProducts = ({ products, isLoading, totalPages }) => {
  // const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.products.page);

  return (
    <section className="w-full flex flex-col">
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 font-montserrat">
        {isLoading ? (
          <SkeletonLoader count={5} />
        ) : (
          products?.map(({ _id, nameKey, imageUrl, price, categoryKey }) => {
            return (
              <Card
                _id={_id}
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
      <Pagination 
      totalPages={totalPages} 
      currentPage={currentPage} 
      setCurrentPage={(page) => dispatch(setPage(page))} />
    </section>
  )
}

export default CardsProducts;
