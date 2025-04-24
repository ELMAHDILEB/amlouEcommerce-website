import { useState } from "react";
import DropDown from "./DropDown";

const FilterBar = ({selectedCategory, setSelectedCategory, selectedSort, setSelectedSort, priceValue, setPriceValue}) => {

  const [openCategoriesDrop, setOpenCategoriesDrop] = useState(false);
  const [openSortDrop, setOpenSortDrop] = useState(false);
  const categories = ["Dried Fruits", "Amlou", "Preserved Vegetables and Fruits"];
  const sortBy = ["Price: Low To High", "Price: High To Low"];

  const setOpenFirstDropDown = ()=>{
     setOpenCategoriesDrop(!openCategoriesDrop);
    setOpenSortDrop(false);
  }
  const setOpenSecondDropDown = ()=>{
    setOpenSortDrop(!openSortDrop);
    setOpenCategoriesDrop(false);
  }

  const sliderRange = (e) => {
    const value = e.target.value;
    setPriceValue(value);
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

      <label className="flex flex-col gap-4 h-fit">
        <span className="font-bold">Price Range</span>
        <input type="range" min="0" max="200" className="progress" onInput={sliderRange}  value={priceValue}/>
        <div className="w-full flex flex-row justify-between gap-5">
          <span>0$</span>
          <span className="flex items-center gap-4">Value: <p className="value">{priceValue}$</p></span>
          <span>200$</span>
        </div>

      </label>


    </section>
  )
}

export default FilterBar;
