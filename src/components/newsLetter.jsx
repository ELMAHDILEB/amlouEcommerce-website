

const newsLetter = () => {
    return (
        <section className='w-[95%] md:w-full min-h-[80vh] flex flex-col items-center justify-center gap-20 p-4 mx-auto my-0 font-montserrat bg-[url("./assets/bgNewsLetter.jpg")] bg-center bg-no-repeat bg-cover bg-blend-multiply bg-black/70 text-white text-center'>
            <div className="text-center flex flex-col gap-10">
                <h1 className='break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px]' style={{ fontSize: "clamp(20px, 4vw, 50px)" }}>our newsletter</h1>
                <h1 className="capitalize font-medium text-2xl">Join our community of organic lovers</h1>
                <p className="capitalize font-bold" style={{ fontSize: "clamp(17px, 2vw, 50px)" }}>Subscribe to receive <span className="text-[var(--primary)]">exclusive offers, recipes and tips</span></p>
            </div>

            <div className='flex items-center'>
                <input type='email' placeholder='Enter Email Address'  className="p-3 rounded-l-[25px] text-black outline-none bg-gray-500 placeholder:text-white placeholder:italic" />
                <button className="bg-[var(--primary)] text-black  p-3 rounded-r-[25px]  font-semibold cursor-pointer">Subscribe</button>
            </div>
        </section>
    )
}

export default newsLetter