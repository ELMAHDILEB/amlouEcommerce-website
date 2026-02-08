import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    });

    const rules = [
      {
        field: "username",
        regex: /^[A-Za-z0-9]{8,}$/,
        message: "Username must be at least 8 characters, letters and numbers only, no symbols"
      },
      {
        field: "firstName",
        regex: /^[A-Za-z\s'-]+$/,
        message: "First name can contain only letters and symbols like - '"
      },
      {
        field: "lastName",
        regex: /^[A-Za-z\s'-]+$/,
        message: "Last name can contain only letters and symbols like - '"
      }
    ];


    rules.forEach(rule => {
      const value = data[rule.field];

      if (value && !rule.regex.test(value)) {
        newErrors[rule.field] = value.message;
      }
    })

    if (!data?.username || data?.username?.trim().length < 8) {
      newErrors.username = "Username must be at least 8 characters";
    }

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

  const handleSubmit = async (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const validationErrors = validate(data);


    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return
    }
    setErrors({});

    try {
      await axios.post("http://localhost:5000/api/auth/register", data);
      
      navigate("/register/verify", {
        state: { fromRegister: true, email: data.email }
      });
      
      setErrors({});
    } catch (error) {
      const errorMsg = error?.response?.data?.message;

      if (errorMsg) {
        setErrors(prev => ({
          ...prev,
          email: errorMsg
        }));
      } else {
        console.error(error.message);
      }
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
    <div className="min-h-screen flex items-start md:items-center justify-center p-4 bg-[var(--colorBody)] font-[var(--font-poppins)]">
      <div className="w-full max-w-md bg-[var(--cardColor)] p-6 md:p-8 rounded-2xl shadow-lg">

        <h2 className="text-xl md:text-2xl font-bold text-center text-[var(--primary)] mb-6">
          {t("register.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* USERNAME */}
          <div>
            <input
              name="username"
              onChange={handleChange}
              placeholder={t("register.username")}
              className={`w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border outline-none focus:ring-2
                ${errors.username
                  ? "border-red-400 focus:ring-red-400"
                  : "border-[var(--SubColor)] focus:ring-[var(--primary)]"}
              `}
            />
            <p className="text-red-600 text-sm mt-1 min-h-[20px]">
              {errors.username || ""}
            </p>
          </div>


          {/* FIRST + LAST NAME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>
              <input
                name="firstName"
                onChange={handleChange}
                placeholder={t("register.firstName")}
                className={`w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border outline-none focus:ring-2
                  ${errors.firstName
                    ? "border-red-400 focus:ring-red-400"
                    : "border-[var(--SubColor)] focus:ring-[var(--primary)]"}
                `}
              />
              <p className="text-red-600 text-sm mt-1 min-h-[20px]">
                {errors.firstName || ""}
              </p>
            </div>

            <div>
              <input
                name="lastName"
                onChange={handleChange}
                placeholder={t("register.lastName")}
                className={`w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border outline-none focus:ring-2
                  ${errors.lastName
                    ? "border-red-400 focus:ring-red-400"
                    : "border-[var(--SubColor)] focus:ring-[var(--primary)]"}
                `}
              />
              <p className="text-red-600 text-sm mt-1 min-h-[20px]">
                {errors.lastName || ""}
              </p>
            </div>

          </div>


          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder={t("register.email")}
              className={`w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border outline-none focus:ring-2
                ${errors.email
                  ? "border-red-400 focus:ring-red-400"
                  : "border-[var(--SubColor)] focus:ring-[var(--primary)]"}
              `}
            />
            <p className="text-red-600 text-sm mt-1 min-h-[20px]">
              {errors.email || ""}
            </p>
          </div>


          {/* PASSWORD + CONFIRM PASSWORD */}
          <div className="flex flex-col">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder={t("register.password")}
              className={`w-full px-4 py-2 rounded-xl bg-[var(--colorBody)] border outline-none focus:ring-2
      ${errors.password || errors.confirmPassword
                  ? "border-red-400 focus:ring-red-400"
                  : "border-[var(--SubColor)] focus:ring-[var(--primary)]"}
    `}
            />

            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              placeholder={t("register.confirmPassword")}
              className={`w-full px-4 py-2 mt-2 rounded-xl bg-[var(--colorBody)] border outline-none focus:ring-2
      ${errors.password || errors.confirmPassword
                  ? "border-red-400 focus:ring-red-400"
                  : "border-[var(--SubColor)] focus:ring-[var(--primary)]"}
    `}
            />

            {(errors.password || errors.confirmPassword) && (
              <div className="text-red-600 text-sm mt-1 space-y-1">
                {errors.password && <p>{errors.password}</p>}
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
              </div>
            )}
          </div>




          <button className="w-full bg-[var(--primary)] text-white py-2.5 rounded-xl hover:opacity-90 transition cursor-pointer">
            {t("register.submit")}
          </button>

        </form>
      </div>
    </div>
  );

}
