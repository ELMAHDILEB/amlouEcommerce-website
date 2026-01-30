import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--colorBody)] font-[var(--font-poppins)]">
      <div className="w-full max-w-md bg-[var(--cardColor)] p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[var(--primary)] mb-6">
          {t("register.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder={t("register.username")}
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder={t("register.firstName")}
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder={t("register.lastName")}
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder={t("register.email")}
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder={t("register.password")}
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder={t("register.confirmPassword")}
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          <button className="w-full bg-[var(--primary)] text-white py-2 rounded-xl hover:opacity-90 transition">
            {t("register.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
