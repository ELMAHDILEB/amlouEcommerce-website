import {Suspense, memo} from 'react'
import {Outlet} from "react-router-dom"
import { HashLoader } from 'react-spinners'
import Header from "./Header";
const MainWrapper = memo(()=> {
  return (
      <Suspense fallback={<div className=' w-full h-screen flex items-center justify-center bg-[var(--colorBody)]'><HashLoader color='#4da1a9'/></div>}>
            <section className=' w-full md:w-[90%] flex flex-col  mx-auto my-auto '>
                <Header/>
                    <Outlet/>
            </section>
      </Suspense>
  )
})

export default MainWrapper