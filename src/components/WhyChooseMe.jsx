import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import {accordions}  from  "../Routes/MainRoutes.jsx";

const WhyChooseMe = ()=> {
  return (
    <section>
       <h1>Why Choose Me</h1>
     
       <section>
       {
            accordions.map((accordions)=>{
                const {icon,title,description} = accordions;

              return  <article key={Math.floor(Math.random() * 100 - 1) }>
                       <p>{icon}</p>
                       <h1>{title}</h1>
                       <p>{description}</p>
                </article>
                 {/* <TbSquareRoundedArrowRightFilled/> */}
            })
        }
       </section>
    </section>
  )
}

export default WhyChooseMe;