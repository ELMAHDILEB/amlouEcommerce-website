export const validateRegister = (data) => {

    const errors = {};

    const labels = {
        username: "Username",
        firstName: "First name",
        lastName: "Last name"
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
            message: "Username must be at least 8 characters, letters and numbers only, no symbols"
        },
        {
            field: "firstName",
            regex: /^[A-Za-z\s'-]+$/,
            message: "First name can contain only letters and symbols like  '"
        },
        {
            field: "lastName",
            regex: /^[A-Za-z\s'-]+$/,
            message: "Last name can contain only letters and symbols like  '"
        }
    ];


    rules.forEach(rule => {
        const value = data[rule.field];

        if (value && !rule.regex.test(value)) {
            errors[rule.field] = value.message;
        }
    })

    if (!data?.username || data?.username?.trim().length < 8) {
        errors.username = "Username must be at least 8 characters";
    }

    if (!data?.email?.includes("@")) {
        errors.email = "invalid email format";
    }


    if (data?.password?.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }

    if (data?.password !== data?.confirmPassword) {
        errors.confirmPassword = "Passwords not match";
    }
    return errors;
}

export const validateLogin = (data) => {
    const errors = {};
    if (!data?.email?.trim()) errors.email = "Email is Required";
    else if (!data?.email?.includes("@")) {
        errors.email = "invalid email format";
    }

    if (!data?.password?.trim()) errors.password = "Password is Required";
    else if (data?.password?.length < 8) errors.password = "Password must be at least 8 characters";

    return errors;
}