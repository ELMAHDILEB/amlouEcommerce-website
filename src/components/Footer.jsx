import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full p-4 mx-auto my-0 "'>

            <section className='  w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-between font-montserrat'>
                <div className='w-full h-fit   flex flex-col items-center gap-10  p-5 '>
                    <h1 className="text-[var(--primary)] text-2xl font-extrabold ">Amlou Inou.</h1>

                    <div className='flex flex-col items-center gap-6 text-start'>
                        <p className='font-bold capitalize text-center lg:text-start '>your destination for organic & naturel food</p>
                        <div className='w-full h-fit flex flex-col items-center lg:items-start gap-5 '>
                            <div className='flex items-center gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <span>+212 6XX-XXXXXX</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <span>info@amlouind.com</span>
                            </div>


                        </div>


                    </div>
                </div>

                <div className='w-full h-fit   flex flex-col  items-center gap-10  p-5 '>
                    <h1 className="text-[var(--primary)] text-2xl font-semibold ">Follow Us</h1>
                    <nav>
                        <ul className='flex flex-col items-start gap-5'>
                            <li><a href=''>INSTAGRAM</a></li>
                            <li><a href=''>FACEBOOK</a></li>
                            <li><a href=''>TWITTER</a></li>
                            <li><a href=''>TIKTOK</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='w-full h-fit   flex flex-col  items-center gap-10  p-5 '>
                    <h1 className="text-[var(--primary)] text-2xl font-semibold ">Quick links</h1>

                    <nav>
                        <ul className='flex flex-col items-start gap-5'>
                            <li><a href='#'>HOME</a></li>
                            <li><a href='#'>PRODUCTS</a></li>
                            <li><a href='#'>ABOUT</a></li>
                            <li><a href='#'>CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </section>

            <p className='text-center bg-[var(--cardColor)] py-4 rounded-[15px]'>
                &copy; {new Date().getFullYear()} Amlou Inou | <a href="https://bcoder.vercel.app/" className='no-underline text-[var(--primary)]' target='_blank'>EL MAHDI BEL</a>. All rights reserved
            </p>

        </footer>
    )
}

export default Footer;