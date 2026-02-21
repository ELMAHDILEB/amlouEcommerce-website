import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Unauthorized = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--colorBody)] font-[var(--font-poppins)] p-4">
      <div className="w-full max-w-md bg-[var(--cardColor)] p-8 rounded-2xl shadow-lg text-center border border-red-100">
        {/* Icon d l-khata' */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-100 rounded-full text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-[var(--blackColor)] mb-2">
          {t("unauthorized.title") || "Access Denied"}
        </h1>
        
        <p className="text-[var(--SubColor)] mb-8 text-lg">
          {t("unauthorized.message") || "You don't have permission to view this page."}
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-[var(--primary)] text-white py-2 rounded-xl hover:opacity-90 transition cursor-pointer font-semibold"
          >
            {t("unauthorized.goHome") || "Go to Home"}
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="w-full border border-[var(--SubColor)] text-[var(--blackColor)] py-2 rounded-xl hover:bg-gray-50 transition cursor-pointer"
          >
            {t("unauthorized.goBack") || "Go Back"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;