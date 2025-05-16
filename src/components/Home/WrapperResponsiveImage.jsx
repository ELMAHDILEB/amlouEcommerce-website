
import ResponsiveImage from "../Home/ResponsiveImage";
import shape from "../../assets/img1/shape.webp";
import { motion } from "framer-motion";
import { images } from "../../Routes/MainRoutes";

function WrapperResponsiveImage() {
  return (
    <div className='relative h-auto flex'  style={{width:"min(100%,450px)"}}>
      {/* after:absolute after:top-5 after:right-0 after:z-[-1] after:w-32 after:h-32 after:bg-gradient-to-t after:from-[var(--primary)] after:to-white after:rounded-full before:absolute before:bottom-5 before:left-0 before:z-[-1] before:w-32 before:h-32 before:bg-gradient-to-t  before:from-[var(--primary)] before:to-white before:rounded-full */}

      <ResponsiveImage />
      <div className='absolute w-full h-full z-[9999]  '>
        {
          images.map((img, index) => {
            const { src, alt, className } = img;
            return (
              <motion.img
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                key={index} src={src} alt={alt} className={`object-cover absolute  ${className} `} width="100px" height="100px" loading='lazy' />
            )
          })
        }
      </div>
      <div className="shape w-full  absolute z-[-1] -bottom-8   lg:-bottom-10 animate-rotateAnim">
        <img src={shape} alt="shape" />
      </div>

    </div>
  )
}

export default WrapperResponsiveImage;