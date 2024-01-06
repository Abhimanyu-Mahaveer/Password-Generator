function generatePassword() {
    const digit = parseInt(prompt("Enter the length of the password:")); // Set the desired length of the password
    const lowerCases = 'qwertyuiopasdfghjklzxcvbnm';
    const upperCases = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const symbols = '!@#$%^&*()_-+=[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < digit; i++) {
        const rand = Math.floor(Math.random() * 4);

        switch (rand) {
            case 0:
                password += String(Math.floor(Math.random() * 10)); // Add a random digit
                break;
            case 1:
                password += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length)); // Add a random lowercase letter
                break;
            case 2:
                password += upperCases.charAt(Math.floor(Math.random() * upperCases.length)); // Add a random uppercase letter
                break;
            case 3:
                password += symbols.charAt(Math.floor(Math.random() * symbols.length)); // Add a random symbol
                break;
        }
    }

    document.getElementById('password-display').textContent = password;
}
