 export const validateUser = (user) => {
    const errors = {};

    const addError = (field, message) => {
        errors[field] = message;
        errors.status = true;
    };

    if (!user.firstname) {
        addError('firstname', 'First name is required');
    } else if (user.firstname.length < 3) {
        addError('firstname', 'First name must be at least 3 characters long');
    }

    if (!user.lastname) {
        addError('lastname', 'Last name is required');
    } else if (user.lastname.length < 3) {
        addError('lastname', 'Last name must be at least 3 characters long');
    }

    if (!user.username) {
        addError('username', 'Username is required');
    } else if (user.username.length < 3) {
        addError('username', 'Username must be at least 3 characters long');
    }

    if (!user.password) {
        addError('password', 'Password is required');
    } else if (user.password.length < 6) {
        addError('password', 'Password must be at least 6 characters long');
    }

    if (!user.confirmPassword) {
        addError('confirmPassword', 'Confirm Password is required');
    } else if (user.password !== user.confirmPassword) {
        addError('confirmPassword', 'Passwords do not match');
    }

    if (!user.email) {
        addError('email', 'Email is required');
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        addError('email', 'Email address is invalid');
    }

    if (!user.tel) {
        addError('tel', 'Phone number is required');
    } else if (!/^\+?\d{10,15}$/.test(user.tel)) {
        addError('tel', 'Phone number is invalid');
    }


    return errors;
}