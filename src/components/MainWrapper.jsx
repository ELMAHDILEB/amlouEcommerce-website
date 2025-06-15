import { Suspense, memo, useEffect, useState } from 'react'
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import { Outlet } from "react-router-dom"
import { HashLoader } from 'react-spinners'
import Header from "./Header";
import ShoppingCart from './ShoppingCart';
const MainWrapper = memo(() => {

  const { i18n } = useTranslation()
  const lang = i18next.language;
  const STORAGE_KEY = `cart_${lang}`;

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (err) {
      console.error("Failed to parse cart from localStorage:", err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart, STORAGE_KEY]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setCart(saved ? JSON.parse(saved) : []);
  }, [i18n.language]);

  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      setCart(cart.map(item => {
        return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item;
      }))
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          image: product.image,
          price: product.price,
          quantity: 1,
          nameKey: product.nameKey,         
          categoryKey: product.categoryKey, 
        },
      ]);

    }

    setShowCart(true);
  }

  const closeCart = () => setShowCart(false);

  const incrementItem = (productID) => {
    setCart(
      cart.map(item => {
        return item.id === productID ? { ...item, quantity: item.quantity + 1 } : item
      })
    )
  }
  const decreaseItem = (productID) => {
    setCart(

      cart.map(item => {
        return item.id === productID ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item;
      })
    )
  }

  const removeItem = (productID) => {
    setCart(cart.filter(item => item.id !== productID));
  }

  const removeAll = () => {
    setCart([]);
  }
  return (
    <Suspense fallback={<div className='w-full min-h-screen  flex items-center justify-center bg-[var(--colorBody)]'><HashLoader color='#7C8C03' /></div>}>
      <section className=' w-full h-screen md:w-[90%] flex flex-col  mx-auto my-auto '>
        <Header cart={cart} />
        <Outlet context={{ addToCart, cart, decreaseItem, incrementItem, removeItem, removeAll }} />
        {showCart && <ShoppingCart cartItems={cart} onClosePopUp={closeCart} decreaseItem={decreaseItem} incrementItem={incrementItem} removeItem={removeItem} removeCart={removeAll} />}
      </section>
    </Suspense>
  )
})

export default MainWrapper;