import { useState } from "react";
import { useTranslation } from "react-i18next";
import { validateLogin } from "../../utils/validators";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/auth/authApi";
import { setCredentials } from "../../features/auth/authSlice";

export default function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const [login, { isLoading }] = useLoginMutation();
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const validationErrors = validateLogin(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await login(data).unwrap();
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      const action = setCredentials({ user: res.user, token: res.token });
      dispatch(action);

      const targetPath = res.user.role === "admin" ? "/dashboard/admin" : "/dashboard/user";

      navigate(targetPath, { replace: true });
    } catch (error) {
      setServerError(error?.data?.message || "Login Failed");
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setServerError("");

    setErrors((prev) => {
      const newErrors = { ...prev };
      if (value.trim()) {
        delete newErrors[name];
      }
      return newErrors;
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--colorBody)] font-[var(--font-poppins)]">
      <div className="w-full max-w-md bg-[var(--cardColor)] p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[var(--primary)] mb-6">
          {t("login.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {serverError && (
            <p className="text-red-600 text-center mb-3">
              {serverError}
            </p>
          )}
          <input
            type="email"
            name="email"
            placeholder={t("login.email")}
            // value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] text-[var(--blackColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />
          <p className="text-red-600 text-sm mt-1 min-h-[20px]">
            {errors.email || ""}
          </p>

          <input
            type="password"
            name="password"
            placeholder={t("login.password")}
            // value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] text-[var(--blackColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />
          {errors.password && <p className="text-red-600 text-sm mt-1 min-h-[20px]">{errors.password}</p>}
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
