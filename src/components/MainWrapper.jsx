import { Suspense, memo, useState } from 'react'
import { Outlet } from "react-router-dom"
import { HashLoader } from 'react-spinners'
import Header from "./Header";
import ShoppingCart from './ShoppingCart';
const MainWrapper = memo(() => {

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      setCart(cart.map(item => {
        return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item;
      }))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }

    setShowCart(true);
  }

  const closeCart = () => setShowCart(false);

  const incrementItem = (productID)=>{
      setCart(
        cart.map(item=>{
            return item.id === productID ? {...item, quantity: item.quantity + 1} : item
        })
      )
  }
  const decreaseItem = (productID)=>{
      setCart(

        cart.map(item =>{
          return item.id === productID ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1} : item;
        })
      )
  }

  const removeItem = (productID) => {
    setCart(cart.filter(item => item.id !== productID))
  }

const removeAll = () => {
  setCart([]);
}
return (
  <Suspense fallback={<div className='w-full min-h-screen  flex items-center justify-center bg-[var(--colorBody)]'><HashLoader color='#7C8C03' /></div>}>
    <section className=' w-full h-screen md:w-[90%] flex flex-col  mx-auto my-auto '>
      <Header cart={cart} />
      <Outlet context={{ addToCart, cart, decreaseItem, incrementItem, removeItem, removeAll }} />
      {showCart && <ShoppingCart cartItems={cart} onClosePopUp={closeCart} decreaseItem={decreaseItem} incrementItem={incrementItem}   removeItem={removeItem}   removeCart={removeAll}/>}
    </section>
  </Suspense>
)
})

export default MainWrapper