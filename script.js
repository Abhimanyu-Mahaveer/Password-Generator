function generatePassword() {
    const digit = parseInt(document.getElementById('digit').value);
    const numeric = parseInt(document.getElementById('numeric').value);
    const lower = parseInt(document.getElementById('lower').value);
    const upper = parseInt(document.getElementById('upper').value);
    const symbols = parseInt(document.getElementById('symbols').value);

    const lowerCases = 'qwertyuiopasdfghjklzxcvbnm';
    const upperCases = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const symbolChars = '!@#$%^&*()_-+=[]{}|;:,.<>?';

    let password = '';

    for (let i = 0; i < numeric; i++) {
        password += String(Math.floor(Math.random() * 10)); // Add a random digit
    }

    for (let i = 0; i < lower; i++) {
        password += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length)); // Add a random lowercase letter
    }

    for (let i = 0; i < upper; i++) {
        password += upperCases.charAt(Math.floor(Math.random() * upperCases.length)); // Add a random uppercase letter
    }

    for (let i = 0; i < symbols; i++) {
        password += symbolChars.charAt(Math.floor(Math.random() * symbolChars.length)); // Add a random symbol
    }

    const remainingChars = digit - (numeric + lower + upper + symbols);

    for (let i = 0; i < remainingChars; i++) {
        const rand = Math.floor(Math.random() * 3);

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
                password += symbolChars.charAt(Math.floor(Math.random() * symbolChars.length)); // Add a random symbol
                break;
        }
    }

    // Shuffle the password characters
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    document.getElementById('password-display').textContent = password;
}
