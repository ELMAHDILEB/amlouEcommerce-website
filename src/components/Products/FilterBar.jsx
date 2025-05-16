import { useMemo, useState } from "react";
import DropDown from "./DropDown";
import PriceRange from "./PriceRange";
import { useTranslation } from "react-i18next";

const FilterBar = ({ selectedCategory, setSelectedCategory, selectedSort, setSelectedSort, priceValue, setPriceValue }) => {
  const { t } = useTranslation();
  const [openCategoriesDrop, setOpenCategoriesDrop] = useState(false);
  const [openSortDrop, setOpenSortDrop] = useState(false);
  const categories = useMemo(() => {
     return [
      { value: "All", label: t("pageProducts.category.all") },
      { value: "driedFruits", label: t("pageProducts.category.driedFruits") },
      { value: "amlou", label: t("pageProducts.category.amlou") },
      { value: "preservedProduce", label: t("pageProducts.category.preservedProduce") },
     ]
  }, [t]);

  const sortBy = useMemo(() => {
    return [
      { value: "All", label: t("pageProducts.sort.All") },
      { value: "Price: Low To High", label: t("pageProducts.sort.lowToHigh") },
      { value: "Price: High To Low", label: t("pageProducts.sort.highToLow") },
    ];
  }, [t]);

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
        title={t("pageProducts.category.title")}
        subTitle={categories.find(category => category.value === selectedCategory)?.label}
        items={categories}
        selectedItem={selectedCategory}
        setSelectedItem={setSelectedCategory}
        isOpen={openCategoriesDrop}
        setIsOpen={setOpenFirstDropDown}
      />

      <DropDown
        title={t("pageProducts.sort.title")}
        subTitle={sortBy.find(option => option.value === selectedSort)?.label}
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
