import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/auth/authApi";
import { useAuthForm } from "../../hooks/useAuthForm";
import AuthInput from "../../components/UI/AuthInput";

export default function Register() {
  const { t } = useTranslation();
  const [register, { isLoading }] = useRegisterMutation();
  const { errors, serverErrors, setServerErrors, handleChange, handleValidationForm } = useAuthForm();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (!handleValidationForm(data)) return;

    try {

      await register(data).unwrap();
      navigate("/register/verify", {
        state: { fromRegister: true, email: data.email }
      });

    } catch (error) {
      setServerErrors(error.data?.message || "Registration failed");
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--colorBody)] font-[var(--font-poppins)]">
      <div className="w-full max-w-md bg-[var(--cardColor)] p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100/50">

        <header className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--primary)] tracking-tight">
            {t("register.title")}
          </h2>
        </header>

        {serverErrors && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50/80 border border-red-100 shadow-sm">
            <div className="flex flex-col gap-2.5">
              {serverErrors.toString().split(',').map((err, index) => (
                <div key={index} className="flex items-start gap-2 text-red-600 text-[12px] font-semibold leading-tight">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />

                  <span className="flex-1 capitalize">{err.trim()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-0.5">
          <AuthInput
            name="username"
            placeholder={t("register.username")}
            error={errors.username}
            handleChange={handleChange}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <AuthInput
              name="firstName"
              placeholder={t("register.firstName")}
              error={errors.firstName}
              handleChange={handleChange}
            />
            <AuthInput
              name="lastName"
              placeholder={t("register.lastName")}
              error={errors.lastName}
              handleChange={handleChange}
            />
          </div>

          <AuthInput
            type="email"
            name="email"
            placeholder={t("register.email")}
            error={errors.email}
            handleChange={handleChange}
          />

          <AuthInput
            type="password"
            name="password"
            placeholder={t("register.password")}
            error={errors.password}
            handleChange={handleChange}
          />

          <AuthInput
            type="password"
            name="confirmPassword"
            placeholder={t("register.confirmPassword")}
            error={errors.confirmPassword}
            handleChange={handleChange}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 bg-[var(--primary)] text-white py-3 rounded-xl font-bold shadow-lg cursor-pointer shadow-[var(--primary)]/20 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {t("register.isLoading")}
              </div>
            ) : t("register.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
