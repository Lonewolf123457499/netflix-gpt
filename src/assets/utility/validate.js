export const checkValidateData = (email, password) => {
    // console.log(email)
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

    // Enhanced password validation to ensure at least one lowercase letter, one uppercase letter, one digit, and one special character
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailValid) {
        return "Email is not valid";
    }
    if (!isPasswordValid) {
        return "Password is not valid";
    }

    return null;
}

// Example usage
const result = checkValidateData("test@example.com", "Password123!");
if (result) {
    console.log(result); // If there's an error, it will be logged here
} else {
    console.log("Email and password are valid.");
}