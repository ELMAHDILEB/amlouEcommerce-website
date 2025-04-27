import { useState } from "react";
import {Link} from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import {discoverCard} from "../../Routes/MainRoutes"



function discoverCards() {
    const [isFocus, setIsFocus] = useState([false, false, false]);

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
        <section className='w-full h-screen md:h-[80dvh] flex flex-col items-center justify-start gap-10 py-10 ' >
      

            <div className="w-[90%] md:w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              
                discoverCard.map((card, index)=>{
                    const {srcImg, alt, title, className} = card;
                    return  <article
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
                        className={`focus ${isFocus[index] ? "open" : ""} h-[40px] md:h-[80px] w-fit  flex flex-row  items-center  justify-center  rounded-[5px] px-2 md:px-4 transition-all duration-500`}
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
                        <Link to="/products?category=amlou"
                            className="cursor-pointer rounded-full w-[25px] md:w-[50px] h-[25px] md:h-[50px] bg-[var(--primary)] flex items-center justify-center"
                            aria-label="buttonCart"
                        >
                            <MdShoppingCartCheckout className="text-[15px] md:text-xl font-bold text-black dark:text-white"  />
                        </Link>
                    </div>
                </article>

                })
            }
            </div>
        </section>
    )
}

export default discoverCards;