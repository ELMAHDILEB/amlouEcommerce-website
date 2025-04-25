import React from 'react'

const Card = ({id,name,image,category,price}) => {
  return (
    <div className="w-full h-[500px]  flex flex-col items-center bg-[var(--cardColor)]   rounded-[15px] shadow-md overflow-hidden pb-2" key={id}>

    <div className="w-full h-[200px] lg:h-[250px] flex items-center justify-center">
      <img src={image} alt={name} className="w-full h-[70%]  lg:h-full object-contain " />
    </div>

    <div className="w-full flex flex-col justify-center gap-10  flex-grow">
      <div className="flex flex-col justify-between items-center gap-5 px-4">
        <h1 className="font-semibold tracking-5 uppercase text-center text-[12px] md:text-[15px]">{name}</h1>
        <h2 className="font-normal tracking-xl">{`${price} DHS`}</h2>

      </div>

      <div className=" flex flex-col md:flex-row justify-between items-center gap-5  px-4">

        <p className="font-normal text-[14px] text-[var(--SubColor)]">Category</p>
        <p className="font-normal text-[14px] text-[var(--SubColor)]">{category}</p>

      </div>
    </div>

    <a href="#" className="px-7 py-3 lg:px-10 lg:py-3 bg-[var(--primary)] rounded-[10px] font-semibold uppercase text-[12px] lg:text-[15px]">Add To cart</a>
  </div>
  )
}

export default Card
