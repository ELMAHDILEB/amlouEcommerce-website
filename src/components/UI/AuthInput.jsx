const AuthInput = ({ label, name, type = "text", placeholder, handleChange, error, ...props }) => {
    return (
        <div className="w-full flex flex-col gap-1">
            {label && (
                <label className="text-sm font-medium text-[var(--primary)] ml-1">
                    {label}
                </label>
            )}

            <input
                {...props}
                type={type}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                className={`w-full px-4 py-2.5 rounded-xl bg-[var(--colorBody)] border outline-none transition-all duration-200
          ${error
                        ? "border-red-500 ring-1 ring-red-500 shadow-sm"
                        : "border-[var(--SubColor)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
                    }
          placeholder:text-gray-400 text-[var(--blackColor)]
        `}
            />

            <div className="min-h-[20px] px-1">
                {error && (
                    <p className="text-red-500 text-[11px] font-medium animate-in fade-in duration-300">
                        {error}
                    </p>
                )}
            </div>
        </div>
    )
}

export default AuthInput
