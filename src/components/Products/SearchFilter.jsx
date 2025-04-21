const SearchInput = () => {
  return (
    <section className="w-full">
      <div className="w-full relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search Products..."
          className="w-full pl-12 py-2 rounded-[10px] border border-gray-300 focus:border-gray-500 dark:focus:border-slate-500 outline-none transition-all duration-500 placeholder:italic"
        />
      </div>
    </section>
  );
};

export default SearchInput;
