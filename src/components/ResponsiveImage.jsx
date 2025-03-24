import {memo} from "react"
import img1Webp2000 from '../assets/img1/img1_w_2000.webp';
import img1Webp1268 from '../assets/img1/img1_w_1268.webp';
import img1Webp882 from '../assets/img1/img1_w_882.webp';
import img1Png from '../assets/img1/img1.webp';

const ResponsiveImage =  memo(() =>{

    return (
        <picture>
            <source srcSet={img1Webp882} type="image/webp" media="(min-width: 882px)" />
            <source srcSet={img1Webp1268} type="image/webp" media="(min-width: 1268px)" />
            <source srcSet={img1Webp2000} type="image/webp" media="(min-width: 2000px)" />
            <img src={img1Png} alt="Responsive Image" loading='lazy' className="w-full h-full object-cover z-10" />
        </picture>
    )
})

export default ResponsiveImage;