const ShoppingCart = () => {
    return (
        <section className="bg-[rgba(0,0,0,0.5)] w-full h-screen fixed left-0 top-0  z-[1000000000000]">
            <div className="sm:w-full md:w-[50%] h-full bg-[var(--colorBody)] flex flex-col gap-5">
                <header className="w-full flex justify-between align-center  px-2 py-5">
                    <h1 className="capitalize text-2xl">Your Cart</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </header>

                 <div className="w-full max-h-[68vh] overflow-y-auto space-y-4 pr-2 bg-red-200 flex flex-col">
            
                    <div className="w-full h-fit flex justify-center items-center bg-red-200 p-2">
                           <div className="w-[70px] h-[70px] block bg-red-500 rounded-full overflow-hidden">
                            <img src="public/assets/productsImg/amande-forna.png" alt="amandes"  className="w-full h-full object-cover"/>
                           </div>

                           <h1>amandes romarin</h1>
 


                    </div>
                    

                 </div>

                 <div className="absolute bottom-0 left-0 w-full md:w-1/2   flex justify-center items-center text-[var(--blackColor)]  text-center">
                      <span className="w-[50%] py-7 bg-[var(--cardColor)]">Total: 200$</span>
                      <button className="w-[50%] py-7 bg-[var(--primary)] cursor-pointer">Check Out</button>
                 </div>

            </div>
        </section>
    )
}

export default ShoppingCart;
