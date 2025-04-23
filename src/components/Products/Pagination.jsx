

const Pagination = () => {
    return (
        <section className="flex items-center justify-center flex-wrap gap-10 w-full py-5 font-montserrat">
            <div className="w-[40px] h-[40px] bg-[var(--primary)] flex items-center justify-center text-black rounded-[50%] cursor-pointer font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div className="w-[40px] h-[40px] bg-[var(--primary)] flex items-center justify-center text-black rounded-[50%] cursor-pointer font-bold">1</div>
            <div className="w-[40px] h-[40px] bg-[var(--primary)] flex items-center justify-center text-black rounded-[50%] cursor-pointer font-bold">2</div>
            <div className="w-[40px] h-[40px] bg-[var(--primary)] flex items-center justify-center text-black rounded-[50%] cursor-pointer font-bold">3</div>
            <div className="w-[40px] h-[40px] bg-[var(--primary)] flex items-center justify-center text-black rounded-[50%] cursor-pointer font-bold">...</div>
            <div className="w-[40px] h-[40px] bg-[var(--primary)] flex items-center justify-center text-black rounded-[50%] cursor-pointer font-bold">9</div>
            <div className="w-[40px] h-[40px] bg-[var(--primary)] flex items-center justify-center text-black rounded-[50%] cursor-pointer font-bold">10</div>
            <div className="w-[40px] h-[40px] bg-[var(--primary)] flex items-center justify-center text-black rounded-[50%] cursor-pointer font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </section>
    )
}

export default Pagination
