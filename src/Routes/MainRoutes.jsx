import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { LuLeaf, LuHandCoins, LuFlaskConical, LuTruck, LuUsersRound } from "react-icons/lu";
import cashews from "../assets/cashews.png";
import loz from "../assets/loz.png";
import pistach from "../assets/pistach.png";
import pistach1 from "../assets/pistach1.png";
import cajou1 from "../assets/cajou1.webp";
import amandes1 from "../assets/amandes1.webp";
import amlouBloz from "../assets/amlouBloz.svg";

import amlouAmandes from "/assets/productsImg/amlouAmandes.png";
import amandesRomarin from "/assets/productsImg/amandes-romarin.png";
import noixCajouTruffeBio from "/assets/productsImg/noix-de-cajou-truffe-bio.png";

import men1 from "../assets/testimonialsPicture/men-1.jpg";
import men2 from "../assets/testimonialsPicture/men-2.jpg";
import men3 from "../assets/testimonialsPicture/men-3.jpg";
import women1 from "../assets/testimonialsPicture/women-1.jpg";
import women2 from "../assets/testimonialsPicture/women-2.jpg";
import women3 from "../assets/testimonialsPicture/women-3.jpg";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/admin";
import UserDashboard from "../pages/dashboard/user";
import AdminUsers from "../pages/dashboard/admin/AdminUsers";
import UserOrders from "../pages/dashboard/user/Orders";
import AddProduct from "../pages/dashboard/admin/AddProduct";
import Orders from "../pages/dashboard/admin/Orders";
import VerifyEmail from "../pages/VerifyEmail";




const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));



export const links = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/register/verify", element: <VerifyEmail /> },

  { path: "/dashboard/admin", element: <Dashboard /> },
  { path: "/dashboard/admin/add-product", element: <AddProduct /> },
  { path: "/dashboard/admin/orders", element: <Orders /> },
  { path: "/dashboard/admin/users", element: <AdminUsers /> },

  { path: "/dashboard/user/", element: <UserDashboard /> },
  { path: "/dashboard/user/orders", element: <UserOrders /> },

  { path: "*", element: <NotFound /> },
]


export const images = [
  { src: cashews, alt: "cashews", className: " md:top-[10%] top-[10%] right-5 md:right-50" },
  { src: loz, alt: "loz", className: "left-[5%] bottom-[40%] blur-[1px]" },
  { src: pistach, alt: "pistach", className: " bottom-[40%] left-[70%] z-[1000]" },
  { src: pistach1, alt: "pistach1", className: " top-[10%] blur-[1px]" },
]

export const useLabels = () => {
  const { t } = useTranslation();
  return [
    { to: "/", label: t("header.nav.home"), ariaLabel: "Home Page" },
    { to: "/products", label: t("header.nav.products"), ariaLabel: "Products Page" },
    { to: "/about", label: t("header.nav.about"), ariaLabel: "About Page" },
    { to: "/contact", label: t("header.nav.contact"), ariaLabel: "Contact Page" },
  ];
};


export const useDiscoverCard = () => {
  const { t } = useTranslation();
  return [
    { srcImg: amandes1, alt: "amandes", title: t("discoverCards.titleProductOne"), className: "w-full h-full md:grid-col-2 md:row-span-2 overflow-hidden text-black cursor-pointer bg-[var(--cardColor)] rounded-[15px] relative", link: "/products?category=preservedProduce" },
    { srcImg: cajou1, alt: "cajou1", title: t("discoverCards.titleProductTwo"), className: "w-full  md:grid-col-1   overflow-hidden text-black cursor-pointer bg-[var(--cardColor)] rounded-[15px] relative", link: "/products?category=driedFruits" },
    { srcImg: amlouBloz, alt: "amlouBloz", title: t("discoverCards.titleProductThree"), className: "w-full  md:grid-col-1   overflow-hidden text-black cursor-pointer bg-[var(--cardColor)] rounded-[15px] relative", link: "/products?category=amlou" }
  ]
}

export const useAccordions = () => {
  const { t } = useTranslation();

  return [
    { icon: <LuLeaf />, title: t("whychooseus.accordion.highQuality.title"), description: t("whychooseus.accordion.highQuality.description") },
    { icon: <LuHandCoins />, title: t("whychooseus.accordion.affordablePrice.title"), description: t("whychooseus.accordion.affordablePrice.description") },
    { icon: <LuFlaskConical />, title: t("whychooseus.accordion.noPreservatives.title"), description: t("whychooseus.accordion.noPreservatives.description") },
    { icon: <LuTruck />, title: t("whychooseus.accordion.fastDelivery.title"), description: t("whychooseus.accordion.fastDelivery.description") },
    { icon: <LuUsersRound />, title: t("whychooseus.accordion.customerTrust.title"), description: t("whychooseus.accordion.customerTrust.description") },
  ]
}

export const useFeaProducts = () => {
  const { t } = useTranslation();
  return [
    { imgSrc: amandesRomarin, title: t("featuredProducts.products.almonds_rosemary"), price: "80", link: "/products?category=driedFruits&_page=1" },
    { imgSrc: amlouAmandes, title: t("featuredProducts.products.almond_amlou"), price: "120", link: "/products?category=amlou&_page=1" },
    { imgSrc: noixCajouTruffeBio, title: t("featuredProducts.products.organic_truffle_cashew_nuts"), price: "45", link: "/products?category=driedFruits&_page=1" },
  ]
}

export const useTestimonials = () => {
  const { t } = useTranslation();

  return [
    {
      text: t("testimonials.1.text"),
      author: t("testimonials.1.author"),
      imgSrc: women1,
    },
    {
      text: t("testimonials.2.text"),
      author: t("testimonials.2.author"),
      imgSrc: men1,
    },
    {
      text: t("testimonials.3.text"),
      author: t("testimonials.3.author"),
      imgSrc: men2,
    },
    {
      text: t("testimonials.4.text"),
      author: t("testimonials.4.author"),
      imgSrc: women2,
    },
    {
      text: t("testimonials.5.text"),
      author: t("testimonials.5.author"),
      imgSrc: men3,
    },
    {
      text: t("testimonials.6.text"),
      author: t("testimonials.6.author"),
      imgSrc: women3,
    }

  ];
}



export const data = [
  {
    id: 1,
    img: "/assets/productsImg/amlou-noix-de-cajou-dattes.png",
    title: "amlou noix de cajou dattes"
  },
  {
    id: 2,
    img: "/assets/productsImg/amlou-chocolat-noir.png",
    title: "amlou chocolat noir"
  },
  {
    id: 3,
    img: "/assets/productsImg/amlou-light.png",
    title: "amlou light"
  },
]