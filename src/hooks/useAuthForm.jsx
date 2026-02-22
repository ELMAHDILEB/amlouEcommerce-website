import { useState } from "react"

export const useAuthForm = (validateFunction) => {
    const [errors, setErrors] = useState({});
    const [serverErrors, setServerErrors] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setServerErrors("");
    
        setErrors((prev) => {
          const newErrors = { ...prev };
          if (value.trim()) {
            delete newErrors[name];
          }
          return newErrors;
        })
      }

      const handleValidationForm = (data)=>{
        if(!validateFunction) return true;
        const validationErrors = validateFunction(data);
        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return false;
        }
        setErrors({})
      }
  return {
    errors,
    setErrors,
    serverErrors,
    setServerErrors,
    handleChange,
    handleValidationForm,
  }
}

