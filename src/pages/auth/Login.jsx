import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  
  const [errors, setErrors] = useState("");

  const validate = (data) => {
    const newErrors = {};

    if (!data?.email?.includes("@")) {
      newErrors.email = "invalid email format";
    }

    if (data?.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (data?.password !== data?.confirmPassword) {
      newErrors.confirmPassword = "Passwords not match";
    }
    return newErrors;
  }



  // const handleChange = (e) =>
  //   setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const data = Object.fromEntries(formData.entries());
    const validationErrors = validate(data);

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--colorBody)] font-[var(--font-poppins)]">
      <div className="w-full max-w-md bg-[var(--cardColor)] p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[var(--primary)] mb-6">
          {t("login.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder={t("login.email")}
            // value={form.email}
            // onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] text-[var(--blackColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder={t("login.password")}
            // value={form.password}
            // onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] text-[var(--blackColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-white py-2 rounded-xl hover:opacity-90 transition cursor-pointer"
          >
            {t("login.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
