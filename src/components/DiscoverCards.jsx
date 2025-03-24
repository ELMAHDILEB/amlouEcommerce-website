import { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { IoLeafSharp } from "react-icons/io5";
import cajou1 from "../assets/cajou1.webp"
import amandes1 from "../assets/amandes1.webp"
import amlouBloz from "../assets/amlouBloz.svg"



function discoverCards() {
    const [isFocus, setIsFocus] = useState([false, false, false])

    const handleFocus = (index) => {
        setIsFocus(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState
        })
    }
    const handleOut = (index) => {
        setIsFocus(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        })
    }
    return (
        <section className='w-full h-screen  flex flex-col  items-center justify-center gap-10 p-10 md:p-0 ' >
            <div className='relative flex gap-3 md:gap-10 items-center  text-[var(--primary)] decoration-wavy decoration-red-500 '>
                <IoLeafSharp className='text-[30px]' />
                <h1 className='uppercase font-black' style={{ fontSize: "clamp(15px, 2vw, 30px)" }}>Discover the True Taste of Nature</h1>
                <IoLeafSharp className='text-[30px] transform rotate-90' />
            </div>

            <div className="w-full h-full md:h-[500px] grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                    className="w-full h-full md:grid-col-2 md:row-span-2 overflow-hidden text-black cursor-pointer bg-[var(--cardColor)] rounded-[5px] relative font-poppins"
                    onMouseOver={() => handleFocus(0)}
                    onMouseOut={() => handleOut(0)}
                >
                    <img
                        src={amandes1}
                        alt="amandes"
                        className="w-full h-full object-contain z-[-1]"
                    />

                    <div
                        className={`focus ${isFocus[0] ? "open" : ""} absolute inset-0 flex flex-col items-center justify-center p-4 rounded-[5px] transition-all duration-500`}
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(5px)",
                            WebkitBackdropFilter: "blur(5px)",
                        }}
                    >
                        <h1
                            className="uppercase font-bold text-center text-black"
                            style={{ fontSize: "clamp(23px,1vw,45px)" }}
                        >
                            Noix De Cajou Grillées
                        </h1>
                        <button
                            className="cursor-pointer bg-[var(--primary)] px-4 md:px-6 py-2 md:py-3 rounded-2xl flex items-center justify-center mt-3"
                            aria-label="buttonCart"
                        >
                            <MdShoppingCartCheckout className="text-xl md:text-3xl font-bold text-white" />
                        </button>
                    </div>
                </div>


                <div className="w-full md:grid-col-1   overflow-hidden text-black cursor-pointer bg-[var(--cardColor)] rounded-[5px] relative font-poppins"
                    onMouseOver={() => handleFocus(1)}
                    onMouseOut={() => handleOut(1)}>

                    <img src={cajou1} alt='cajou1' className='w-full h-full object-contain' />
                    <div
                        className={`focus ${isFocus[1] ? "open" : ""} absolute inset-0 flex flex-col items-center justify-center p-4 rounded-[5px] transition-all duration-500`}
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(5px)",
                            WebkitBackdropFilter: "blur(5px)",
                        }}
                    >
                        <h1
                            className="uppercase font-bold text-center text-black"
                            style={{ fontSize: "clamp(23px,1vw,45px)" }}
                        >
                            Noix De Cajou Grillées
                        </h1>
                        <button
                            className="cursor-pointer bg-[var(--primary)] px-4 md:px-6 py-2 md:py-3 rounded-2xl flex items-center justify-center mt-3"
                            aria-label="buttonCart"
                        >
                            <MdShoppingCartCheckout className="text-xl md:text-3xl font-bold text-white" />
                        </button>
                    </div>
                </div>

                <div className="w-full md:grid-col-1   overflow-hidden text-black cursor-pointer bg-[var(--cardColor)] rounded-[5px] relative font-poppins"
                    onMouseOver={() => handleFocus(2)}
                    onMouseOut={() => handleOut(2)}>
                    <img src={amlouBloz} alt='amlouBloz' className='w-full h-full object-contain' />
                    <div
                        className={`focus ${isFocus[2] ? "open" : ""} absolute inset-0 flex flex-col items-center justify-center p-4 rounded-[5px] transition-all duration-500`}
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(5px)",
                            WebkitBackdropFilter: "blur(5px)",
                        }}
                    >
                        <h1
                            className="uppercase font-bold text-center text-black"
                            style={{ fontSize: "clamp(23px,1vw,45px)" }}
                        >
                            Noix De Cajou Grillées
                        </h1>
                        <button
                            className="cursor-pointer bg-[var(--primary)] px-4 md:px-6 py-2 md:py-3 rounded-2xl flex items-center justify-center mt-3"
                            aria-label="buttonCart"
                        >
                            <MdShoppingCartCheckout className="text-xl md:text-3xl font-bold text-white" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default discoverCards