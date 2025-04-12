import { lazy } from "react";
import { LuLeaf, LuHandCoins , LuFlaskConical, LuTruck, LuUsersRound } from "react-icons/lu";
import cashews from "../assets/cashews.png";
import loz from "../assets/loz.png";
import pistach from "../assets/pistach.png";
import pistach1 from "../assets/pistach1.png";
import cajou1 from "../assets/cajou1.webp";
import amandes1 from "../assets/amandes1.webp";
import amlouBloz from "../assets/amlouBloz.svg";
const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const NotFound = lazy(() => import("../pages/NotFound"));



export const links = [
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "*", element: <NotFound /> },
  ]

  
  export const images = [
    { src: cashews, alt: "cashews", className: " md:top-[10%] top-[10%] right-5 md:right-50" },
    { src: loz, alt: "loz", className: "left-[5%] bottom-[40%] blur-[1px]" },
    { src: pistach, alt: "pistach", className: " bottom-[40%] left-[70%] z-[1000]" },
    { src: pistach1, alt: "pistach1", className: " top-[10%] blur-[1px]" },
  ]

  export const labels = [
    { to: "/", label: "Home", ariaLabel: "Home Page" },
    { to: "/products", label: "Products", ariaLabel: "Products Page" },
    { to: "/about", label: "About", ariaLabel: "About Page" },
    { to: "/contact", label: "Contact", ariaLabel: "Contact Page" },
  ]
  

  export const discoverCard = [
    {srcImg:amandes1, alt: "amandes", title:"Noix De Cajou Grillées",className:"w-full h-full md:grid-col-2 md:row-span-2 overflow-hidden text-black cursor-pointer bg-[var(--cardColor)] rounded-[5px] relative"},
    {srcImg:cajou1, alt: "cajou1", title:"Noix De Cajou Grillées",className:"w-full  md:grid-col-1   overflow-hidden text-black cursor-pointer bg-[var(--cardColor)] rounded-[5px] relative"},
    {srcImg:amlouBloz, alt: "amlouBloz", title:"Noix De Cajou Grillées",className:"w-full  md:grid-col-1   overflow-hidden text-black cursor-pointer bg-[var(--cardColor)] rounded-[5px] relative"}
  ]

  export const accordions = [
    {icon:<LuLeaf/>,title:"High quality",description:"We use only 100% natural almonds and honey to prepare our organic amlou" },
    {icon:<LuHandCoins/>,title:"Affordable Price",description:"The best quality at the most affordable price." },
    {icon:<LuFlaskConical/>,title:"No Preservatives",description:"100% natural and free of any chemicals." },
    {icon:<LuTruck/>,title:"Fast Delivery",description:"We deliver your order within 48 hours anywhere in Morocco." },
    {icon:<LuUsersRound/>,title:"Customer trust",description:"Excellent reviews from our customers all over Morocco" },
  ]