import { useState } from "react";

const FilterBar = () => {

  const [openDrop, setOpenDrop] = useState(false);
  const [openSortDrop, setOpenSortDrop] = useState(false);

  const categories = ["Dried Fruits","Amlou","Preserved Vegetables and Fruits"];
  const [selectedCategories, setSelectedCategories] = useState("All");

  const sortBy = ["Dried Fruits","Amlou","Preserved Vegetables and Fruits"];
  const [selectedSort, setSelectedSort] = useState("sortOptions");
   

  const openDropDown = () => {

  setOpenDrop((prev => !prev)) ;
  setOpenSortDrop(false);
}
  const handleSort = () => {
    setOpenSortDrop((prev => !prev));
     setOpenDrop(false);
  }



  return (

    <section className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
      <label className="flex flex-col gap-4 ">
        <span className="font-medium">Category</span>
        <button className='relative' onClick={()=>openDropDown()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 absolute top-1/2 right-5 -translate-y-1/2 pointer-events-none">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
          </svg>
          <div className='w-full pl-5 py-2 rounded-[10px] border border-gray-300 focus:border-gray-500 dark:focus:border-slate-500 outline-none transition-all duration-500'>
                <div onClick={ () => setSelectedCategories("All")} className={ `text-start font-bold ${selectedCategories === "All" ? "font-bold"  : ""}`}>All</div>
               <div className={` dropDown ${openDrop ? "open" : ""}`}>
             {
              categories.map((category, index)=>{
                 return (
                <div key={index * 3} onClick={ () => setSelectedCategories(category)} className={`cursor-pointer  ${selectedCategories === category ? " font-bold"  : "" }`}>
                      {category}
                  </div>
                 )
              })
             }
               </div>
          </div>
        </button>
      </label>

     
      <label className="flex flex-col gap-4 ">
        <span className="font-medium">Sort By</span>
        <button className='relative' onClick={()=>handleSort()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 absolute top-1/2 right-5 -translate-y-1/2 pointer-events-none">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
          </svg>
          <div className='w-full pl-5 py-2 rounded-[10px] border border-gray-300 focus:border-gray-500 dark:focus:border-slate-500 outline-none transition-all duration-500'>
                <div onClick={ () => setSelectedSort("sortOptions")} className={ `text-start font-bold ${selectedSort === "sortOptions" ? "font-bold"  : ""}`}>Sort Options</div>
               <div className={`dropDown ${openSortDrop ? "open" : ""}`}>
             {
              sortBy.map((sortItem, index)=>{
                 return (
                <div key={index * 3} onClick={ () =>{ 
                  setSelectedSort(sortItem)
                }
                } className={`${selectedSort === sortItem ? " font-bold"  : "" }`}>
                      {sortItem}
                  </div>
                 )
              })
             }
               </div>
          </div>
        </button>
      </label>



      <label className="flex flex-col gap-4">
        <span className="font-medium">Price Range</span>
        <input type="range" min="0" max="100"  className="progress"/>
      </label>


    </section>
  )
}

export default FilterBar
