import { useState } from "react";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { accordions } from "../Routes/MainRoutes.jsx";

const WhyChooseUs = () => {
  const [toggle, setToggle] = useState(null);

  const handleToggle = (index) => {
    setToggle(prevToggle => prevToggle === index ? null : index);
  }
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 p-4 mx-auto my-0 font-montserrat">
      <h1 className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px]" style={{fontSize: "clamp(20px, 4vw, 50px)"}}>Why Choose Me</h1>
      <section className="w-full  xl:w-[60%]  flex flex-col space-y-5">
        {
          accordions.map((accordion, index) => {
            const { icon, title, description } = accordion;

            return <article key={index * 4} className="px-2 py-3 flex flex-col items-center bg-[var(--cardColor)] rounded-2xl">
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center gap-0 md:gap-10">
                  <p className="text-[1.5em] md:text-[2em] text-[var(--primary)]">{icon}</p>
                  <h1 className="w-full text-center md:text-start text-[1em]  font-semibold uppercase tracking-[1px] leading-6 break-normal" >{title}</h1></div>
                <TbSquareRoundedArrowRightFilled className={`text-[1.5em] md:text-[2em] text-[var(--primary)] cursor-pointer transition-transform duration-500 ${toggle === index ? "rotate-90" : "rotate-0"
                  }`} onClick={() => handleToggle(index)} />
              </div>

              <p className={`toggle ${toggle === index ? "open" : ""}`} style={{fontSize:"clamp(14px,1vw,18px)"}}>{description}</p>
            </article>

          })
        }
      </section>
    </section>
  )
}

export default WhyChooseUs;