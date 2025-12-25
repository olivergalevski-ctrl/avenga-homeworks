function accessCheck() {
    const correctPassword = "admin123";
    const password = prompt("Enter the password to access the site:");
    if (password === correctPassword) {
        return alert(`Entered password: ${password}.
            Result: Access granted.`);
        } 
        else {
            return alert(`Entered password: ${password}.
            Result: Access denied.`);
        }
    }

accessCheck();