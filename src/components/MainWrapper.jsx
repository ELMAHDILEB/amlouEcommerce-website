import {Suspense, memo} from 'react'
import {Outlet} from "react-router-dom"
import { HashLoader } from 'react-spinners'
import Header from "./Header";
const MainWrapper = memo(()=> {
  return (
      <Suspense fallback={<div className='w-full h-screen flex items-center justify-center bg-[var(--colorBody)]'><HashLoader color='#7C8C03'/></div>}>
            <section className=' w-full md:w-[90%] flex flex-col  mx-auto my-auto '>
                <Header/>
                    <Outlet/>
            </section>
      </Suspense>
  )
})

export default MainWrapper