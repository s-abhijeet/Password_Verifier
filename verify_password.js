function verifyPassword(password) {
    // Perform operation
    // 1. Check for null and throw 
    if (password === '' || password.length <= 0 ) {
        throw 'Password can not be null or empty'; 
    }
}