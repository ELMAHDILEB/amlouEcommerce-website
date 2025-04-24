const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }


    const currentRenderPage = (page) => {
        return (
            <button
                className={` w-[40px]   h-[40px]  flex items-center justify-center  rounded-[50%] cursor-pointer font-semibold md:font-bold ${currentPage === page ? "bg-black text-white" : "bg-[var(--primary)] text-black"} `}
                key={page}
                onClick={() => setCurrentPage(page)}>
                {page}
            </button>
        )
    }

    const pages = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(currentRenderPage(i))
        }
    } else {
        pages.push(currentRenderPage(1));
        if (currentPage > 3) {
            pages.push(<span key="startDots" className="font-bold">...</span>);
        }
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            if (i > 1 && i < totalPages) {
                pages.push(currentRenderPage(i));
            }
        }
        if (currentPage < totalPages - 2) {
            pages.push(<span key="endDots" className="font-bold">...</span>);
        }
        pages.push(currentRenderPage(totalPages));
    }


    return (
        <section className="flex items-center justify-center flex-wrap gap-4 md:gap-10 w-full py-5 font-montserrat">
            <button className={`w-[40px] h-[40px] bg-[var(--primary)]  items-center justify-center text-black rounded-[50%] cursor-pointer font-semibold md:font-bold ${currentPage === 1 ? "hidden" : "flex"}`} onClick={handlePrev} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>


            {pages}

            <button className={`w-[40px] h-[40px] bg-[var(--primary)]  items-center justify-center text-black rounded-[50%] cursor-pointer font-semibold md:font-bold ${currentPage === totalPages ? "hidden" : "flex"}`} onClick={handleNext} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </section>
    )
}

export default Pagination
