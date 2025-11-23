import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import {useDiscoverCard} from "../../Routes/MainRoutes"
import useIsArabic from "../../hooks/useIsArabic";



function discoverCards() {
    const discoverCard = useDiscoverCard();
    const [isFocus, setIsFocus] = useState([false, false, false]);
    const navigate = useNavigate();

    const handleFocusChange = (index, value)=>{
        setIsFocus(prevState=>{
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        })
    }


    return (
        <section className='w-full h-screen md:h-[80dvh] flex flex-col items-center justify-start gap-10 py-10 ' >
      

            <div className="w-[90%] md:w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              
                discoverCard.map(({srcImg, alt, title, className, link}, index)=>{
                    return  <article
                    className={className}
                    onMouseOver={() => handleFocusChange(index,true)}
                    onMouseOut={() => handleFocusChange(index,false)}
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
                        <Link 
                            className="cursor-pointer rounded-full w-[25px] md:w-[50px] h-[25px] md:h-[50px] bg-[var(--primary)] flex items-center justify-center"
                            aria-label="buttonCart"
                            to={link}
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