import { useState } from "react";
import { useTranslation } from "react-i18next";
import useIsArabic from "../../hooks/useIsArabic"

const DropDown = ({ title, subTitle, items, selectedItem, setSelectedItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const isArabic = useIsArabic()
    const handleSelectItem = (item) => {
        setSelectedItem(item.value);
        setIsOpen(false);
    }

    return (
        <label className="flex flex-col gap-4 ">
            <span className="font-bold">{title}</span>
            <button className='relative' onClick={(e) => setIsOpen(!isOpen)} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`arow size-6 absolute top-1/2  -translate-y-1/2 pointer-events-none ${isArabic ? "left-5" : "right-5"}`}>
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>
                <div className='w-full pl-5 py-2 rounded-[10px] border border-gray-300 focus:border-gray-500 dark:focus:border-slate-500 outline-none transition-all duration-500'>
                    <div

                        className={`text-start font-bold capitalize ${selectedItem === "All" ? "font-bold" : ""}`}
                    >
                        {subTitle}
                    </div>
                    <div className={`dropDown ${isOpen ? "open" : ""}`}>
                        {isOpen &&

                            <div className="w-full  flex flex-col items-start gap-5">
                                {
                                    items.map((item, index) => {
                                        return (
                                            <div key={index * 3} onClick={() => handleSelectItem(item)} className={`cursor-pointer  capitalize ${selectedItem === item.value ? " font-bold" : ""}`}>
                                                {item.label}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            </button>
        </label>
    )
}

export default DropDown
