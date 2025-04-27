import { useState } from "react";
import DropDown from "./DropDown";
import PriceRange from "./PriceRange";

const FilterBar = ({ selectedCategory, setSelectedCategory, selectedSort, setSelectedSort, priceValue, setPriceValue }) => {

  const [openCategoriesDrop, setOpenCategoriesDrop] = useState(false);
  const [openSortDrop, setOpenSortDrop] = useState(false);
  const categories = ["All","Dried Fruits", "Amlou", "Preserved Produce"];
  const sortBy = ["All","Price: Low To High", "Price: High To Low"];

  const setOpenFirstDropDown = () => {
    setOpenCategoriesDrop(!openCategoriesDrop);
    setOpenSortDrop(false);
  }
  const setOpenSecondDropDown = () => {
    setOpenSortDrop(!openSortDrop);
    setOpenCategoriesDrop(false);
  }

  return (

    <section className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 font-montserrat">

      <DropDown
        title="Category"
        subTitle={selectedCategory}
        items={categories}
        selectedItem={selectedCategory}
        setSelectedItem={setSelectedCategory}
        isOpen={openCategoriesDrop}
        setIsOpen={setOpenFirstDropDown}
      />

      <DropDown
        title="Sort By"
        subTitle={selectedSort}
        items={sortBy}
        selectedItem={selectedSort}
        setSelectedItem={setSelectedSort}
        isOpen={openSortDrop}
        setIsOpen={setOpenSecondDropDown}
      />

      <PriceRange min={0} max={200} priceValue={priceValue} setPriceValue={setPriceValue} />

    </section>
  )
}

export default FilterBar;
