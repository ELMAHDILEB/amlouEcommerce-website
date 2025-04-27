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
                className={` w-[20px] md:w-[40px] h-[20px]  md:h-[40px]  flex items-center justify-center  rounded-[50%] cursor-pointer font-semibold md:font-bold  text-[12px] md:text-[15px]  ${currentPage === page ? "bg-black text-white" : "bg-[var(--primary)] text-black"} `}
                key={page}
                onClick={() => setCurrentPage(page)}>
                {page}
            </button>
        )
    }
    // create array have a name pages for push numbers pages
    const pages = [];

    // if totalPages less or equal 5, create buttons from 1 to 5 = totalPages
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            // generate and add a button  for page number i to pages list
            pages.push(currentRenderPage(i))
        }
    } else {
        // create a button for page have number 1
        pages.push(currentRenderPage(1));

        // if currentPage greater than 3, create 3 dots ... to indicate skipped pages
        if (currentPage > 3) {
            pages.push(<span key="startDots" className="font-bold">...</span>);
        }
 
        //  if i less than or equal to currentPage - 1 and greater than or equal to currentPage + 1 , create 2 buttons for pages around  currentPage
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            if (i > 1 && i < totalPages) {
                pages.push(currentRenderPage(i));
            }
        }

        // if currentPage less than totalPages - 2, create dots ... to indicate skipped pages
        if (currentPage < totalPages - 2) {
            pages.push(<span key="endDots" className="font-bold">...</span>);
        }

        // finally, push totalPages into function currentRenderPage, which displays the button for the latest page
        pages.push(currentRenderPage(totalPages));
    }


    return (
        <section className="flex items-center justify-center flex-wrap gap-4 md:gap-10 w-full py-5 font-montserrat">
            <button className={`w-[20px] md:w-[40px] h-[20px]  md:h-[40px] bg-[var(--primary)]  items-center justify-center text-black rounded-[50%] cursor-pointer font-semibold md:font-bold ${currentPage === 1 ? "hidden" : "flex"}`} onClick={handlePrev} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            {pages}
            <button className={`w-[20px] md:w-[40px] h-[20px]  md:h-[40px] bg-[var(--primary)]  items-center justify-center text-black rounded-[50%] cursor-pointer font-semibold md:font-bold ${currentPage === totalPages ? "hidden" : "flex"}`} onClick={handleNext} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </section>
    )
}

export default Pagination;
