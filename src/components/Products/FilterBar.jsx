import { useState } from "react";
import DropDown from "./DropDown";

const FilterBar = () => {
 
  // CREATE STATE
  const [openCategoriesDrop, setOpenCategoriesDrop] = useState(false);
  const [openSortDrop, setOpenSortDrop] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

   // CREATE CATEGORIES AND SORT ARRAYS WITH STATE
  const categories = ["Dried Fruits", "Amlou", "Preserved Vegetables and Fruits"];
  const [selectedCategories, setSelectedCategories] = useState("All");

  const sortBy = ["MEHDI", "Amlou", "Preserved Vegetables and Fruits"];
  const [selectedSort, setSelectedSort] = useState("sortOptions");



  // FUNCTION 
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
    setSliderValue(value);
    document.querySelector(".value").textContent = value + "$";
  }

  return (

    <section className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 font-montserrat">
  
      <DropDown
        title="Category"
        subTitle="All"
        items={categories}
        selectedItem={selectedCategories}
        setSelectedItem={setSelectedCategories}
        isOpen={openCategoriesDrop}
        setIsOpen={setOpenFirstDropDown}
      />

      <DropDown
        title="Sort By"
        subTitle="All"
        items={sortBy}
        selectedItem={selectedSort}
        setSelectedItem={setSelectedSort}
        isOpen={openSortDrop}
        setIsOpen={setOpenSecondDropDown}
      />

      <label className="flex flex-col gap-4 h-fit">
        <span className="font-bold">Price Range</span>
        <input type="range" min="0" max="200" className="progress" onInput={sliderRange} />
        <div className="w-full flex flex-row justify-between gap-5">
          <span>0$</span>
          <span className="flex items-center gap-4">Value: <p className="value">{sliderValue}$</p></span>
          <span>200$</span>
        </div>

      </label>


    </section>
  )
}

export default FilterBar
