import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/auth/authApi";
import { setCredentials } from "../../features/auth/authSlice";
import { useAuthForm } from "../../hooks/useAuthForm";
import AuthInput from "../../components/UI/AuthInput";

export default function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const { errors, serverErrors, setServerErrors, handleChange, handleValidationForm } = useAuthForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!handleValidationForm(data)) return;

    try {
      const res = await login(data).unwrap();
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      const action = setCredentials({ user: res.user, token: res.token });
      dispatch(action);

      const targetPath = res.user.role === "admin" ? "/dashboard/admin" : "/dashboard/user";

      navigate(targetPath, { replace: true });
    } catch (error) {
      setServerErrors(error?.data?.message || "Login Failed");
    }

  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--colorBody)] font-[var(--font-poppins)]">
      <div className="w-full max-w-md bg-[var(--cardColor)] p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[var(--primary)] mb-6">
          {t("login.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-white py-2 rounded-xl hover:opacity-90 transition cursor-pointer"
          >
            {isLoading ? t("login.isLoading") : t("login.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
