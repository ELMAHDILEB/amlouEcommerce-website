import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'

const categories = ["All", "AMLOU", "AMANDES", "CAJOU"]

const FilterDropdown = () => {
  const [selected, setSelected] = useState(categories[0])

  return (
    <div className="w-64 mx-auto">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="py-2 pl-5 pr-12 border rounded-[10px] w-full text-left">
            {selected}
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full border rounded-[10px] bg-white shadow-lg z-10">
            {categories.map((category, idx) => (
              <Listbox.Option key={idx} value={category} className="cursor-pointer px-5 py-2 hover:bg-gray-100">
                {category}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

export default FilterDropdown
