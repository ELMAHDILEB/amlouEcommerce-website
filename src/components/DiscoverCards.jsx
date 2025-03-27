import { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import {discoverCard} from "../Routes/MainRoutes"



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
        <section className='w-full h-[80dvh]  flex flex-col  items-center justify-start gap-10 py-10 ' >
      

            <div className="w-full h-full md:h-[500px] grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              
                discoverCard.map((card, index)=>{
                    const {srcImg, alt, title, className} = card;
                    return  <div
                    className={className}
                    onMouseOver={() => handleFocus(index)}
                    onMouseOut={() => handleOut(index)}
                    key={index}
                >
                    <img
                        src={srcImg}
                        alt={alt}
                        className="w-full h-full object-contain z-[-1]"
                    />

                    <div
                        className={`focus ${isFocus[index] ? "open" : ""} h-[40px] md:h-[80px] w-fit  flex flex-row  items-center justify-center  rounded-[5px] px-2 md:px-4 transition-all duration-500`}
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(5px)",
                            WebkitBackdropFilter: "blur(5px)",
                        }}
                    >
                        <h1
                            className="capitalize font-normal text-center text-black tracking-widest leading-[2px]"
                            style={{ fontSize: "clamp(12px,1vw,25px)" }}
                        >
                           {title}
                        </h1>
                        <button
                            className="cursor-pointer rounded-full w-[25px] md:w-[50px] h-[25px] md:h-[50px] bg-[var(--primary)] flex items-center justify-center"
                            aria-label="buttonCart"
                        >
                            <MdShoppingCartCheckout className="text-[15px] md:text-xl font-bold text-white"  />
                        </button>
                    </div>
                    {/* <div
                        className={`focus ${isFocus[index] ? "open" : "open"} h-[80px] md:h-[150px] w-[80%]  flex flex-row  items-center justify-center p-4 rounded-[5px] transition-all duration-500`}
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(5px)",
                            WebkitBackdropFilter: "blur(5px)",
                        }}
                    >
                        <h1
                            className="uppercase font-bold text-center text-black"
                            style={{ fontSize: "clamp(15px,1vw,25px)" }}
                        >
                           {title}
                        </h1>
                        <button
                            className="cursor-pointer bg-[var(--primary)] px-4 md:px-6 py-2 md:py-3 rounded-2xl flex items-center justify-center mt-3"
                            aria-label="buttonCart"
                        >
                            <MdShoppingCartCheckout className="text-xl md:text-3xl font-bold text-white"  />
                        </button>
                    </div> */}
                </div>

                })
            }
            </div>
        </section>
    )
}

export default discoverCards;