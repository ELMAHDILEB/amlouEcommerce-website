export const validateRegister = (data) => {
    const errors = {};

    const labels = {
        username: "Username",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        password: "Password"
    };

  
    Object.keys(labels).forEach(field => {
        if (!data[field]?.trim()) {
            errors[field] = `${labels[field]} is required`;
        }
    });

       const rules = [
        {
            field: "username",
            regex: /^[A-Za-z0-9]{8,}$/,
            message: "Username must be at least 8 characters, letters and numbers only"
        },
        {
            field: "firstName",
            regex: /^[A-Za-z\s'-]+$/,
            message: "First name can contain only letters"
        },
        {
            field: "lastName",
            regex: /^[A-Za-z\s'-]+$/,
            message: "Last name can contain only letters"
        }
    ];

    rules.forEach(rule => {
      
        if (data[rule.field] && !errors[rule.field] && !rule.regex.test(data[rule.field])) {
            errors[rule.field] = rule.message;
        }
    });

   // email validation
    if (data.email && !errors.email && !data.email.includes("@")) {
        errors.email = "Invalid email format";
    }

    // password valdiation
    if (data.password && !errors.password && data.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }

    // compare password
    if (data.password && data.confirmPassword && data.password !== data.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    } else if (data.password && !data.confirmPassword) {
        errors.confirmPassword = "Please confirm your password";
    }

    return errors;
}

export const validateLogin = (data) => {
    const errors = {};
    
    // Email
    if (!data?.email?.trim()) {
        errors.email = "Email is required";
    } else if (!data.email.includes("@")) {
        errors.email = "Invalid email format";
    }

    // Password
    if (!data?.password?.trim()) {
        errors.password = "Password is required";
    } else if (data.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }

    return errors;
}