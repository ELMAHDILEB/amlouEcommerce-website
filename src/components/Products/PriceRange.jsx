import React, { useState } from 'react'

const PriceRange = ({min = "0", max = "200", priceValue, setPriceValue}) => {


    const sliderRange = (e)=>{
        const value = Number(e.target.value);
        setPriceValue(value);
    }
  return (
    <label className="flex flex-col gap-4 h-fit">
    <span className="font-bold">Price Range</span>
    <input type="range" min={min} max={max} className="progress" onInput={sliderRange}  value={priceValue}/>
    <div className="w-full flex flex-row justify-between gap-5">
      <span>{min} dhs</span>
      <span className="flex items-center gap-4">Value: <p className="value">{priceValue} dhs</p></span>
      
      <span>{max} dhs</span>
    </div>

  </label>
  )
}

export default PriceRange;
