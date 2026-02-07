import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});

  const validate = (data) => {

    const newErrors = {};

    const labels = {
      username: "Username",
      firstName: "First name",
      lastName: "Last name"
    };


    Object.keys(labels).forEach(field => {
      if (!data[field]?.trim()) {
        newErrors[field] = `${labels[field]} is required`;
      }
    })

    if (!data.email?.includes("@")) {
      newErrors.email = "invalid email format";
    }


    if (data.password.length < 8) {
      newErrors.password = "password contains greater than 8 characters";
    }

    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords not match";
    }
    return newErrors;
  }



  const handleSubmit = async (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const validationErrors = validate(data);

    console.log(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return
    }
    setErrors({});

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", data);
      console.log("User registered:", res.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors(prev => {
      const newErrors = { ...prev };

      if (value.trim()) {
        delete newErrors[name];
      }
      return newErrors;
    })
  }





  return (
    <div className="flex items-center justify-center bg-[var(--colorBody)] font-[var(--font-poppins)]">
      <div className="w-full max-w-md bg-[var(--cardColor)] p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[var(--primary)] mb-6">
          {t("register.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {errors.username && (
            <p className=" bg-red-50 text-red-700 border border-red-200 px-3 py-2 rounded-lg text-sm md:text-base font-medium mt-1  text-center">{errors.username}</p>
          )}
          <input
            type="text"
            name="username"
            placeholder={t("register.username")}
            // value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {errors.firstName && (
              <p className=" bg-red-50 text-red-700 border border-red-200 px-3 py-2 rounded-lg text-sm md:text-base font-medium mt-1  text-center">{errors.firstName}</p>
            )}
            <input
              type="text"
              name="firstName"
              placeholder={t("register.firstName")}
              // value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
            />

            {errors.lastName && (
              <p className=" bg-red-50 text-red-700 border border-red-200 px-3 py-2 rounded-lg text-sm md:text-base font-medium mt-1  text-center">{errors.lastName}</p>
            )}
            <input
              type="text"
              name="lastName"
              placeholder={t("register.lastName")}
              // value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
            />
          </div>
          {errors.email && (
            <p className=" bg-red-50 text-red-700 border border-red-200 px-3 py-2 rounded-lg text-sm md:text-base font-medium mt-1  text-center">{errors.email}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder={t("register.email")}
            // value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          {errors.password && (
            <p className=" bg-red-50 text-red-700 border border-red-200 px-3 py-2 rounded-lg text-sm md:text-base font-medium mt-1  text-center">{errors.password}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder={t("register.password")}
            // value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />


          {errors.confirmPassword && (
            <p className=" bg-red-50 text-red-700 border border-red-200 px-3 py-2 rounded-lg text-sm md:text-base font-medium mt-1  text-center">{errors.confirmPassword}</p>
          )}
          <input
            type="password"
            name="confirmPassword"
            placeholder={t("register.confirmPassword")}
            // value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border border-[var(--SubColor)] focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          <button className="w-full bg-[var(--primary)] text-white py-2 rounded-xl hover:opacity-90 transition cursor-pointer">
            {t("register.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
