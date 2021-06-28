function verifyPassword(password) {
    // Perform operation
    // Check for null or empty 
    if (password === null || password === '' || password.length <= 0 ) {
        throw "Password can not be null or empty"; 
    }
    else if (password.length < 9 ) {
        throw "Password should be larger than 8 characters";
    }
    else if (!/[A-Z]/.test(password)) {   // Check the string containe capital letter
        throw "Password must contain a capital letter";
    }  
    else if (!/[a-z]/.test(password)) { // Check the string containe small letter
        throw "Password must contain a small letter";
    }

    else if (!/[0-9]/.test(password)) { // Check the string contain a number
        throw "Password must contain a number";
    }
}