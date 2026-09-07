function checkStrength() {
    let password = document.getElementById("password").value;
    let commonPasswords = ["password", "password123", "12345678", "qwerty", "admin123"];
    let isCommon = commonPasswords.includes(password.toLowerCase());
    let isRepeated = /^(.)(\1)+$/.test(password);
    let hasSequence = /123456|abcdef|qwerty/i.test(password);

    let result = document.getElementById("result");
    let suggestion = document.getElementById("suggestion");

    suggestion.innerText = "";

    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[^A-Za-z0-9]/.test(password);
    let score = 0;

if (password.length >= 8) {
    score++;
}

if (hasUppercase) {
    score++;
}

if (hasLowercase) {
    score++;
}

if (hasNumber) {
    score++;
}

if (hasSpecial) {
    score++;
}
if (isCommon) {
    result.innerText = "WEAK - This is a common password!";
    suggestion.innerText = "Try a unique password like: Mango@4827";
}
else if (isRepeated) {
    result.innerText = "WEAK - Avoid repeated characters!";
    suggestion.innerText = "Try a more unique password like: Mango@4827";
}
else if (hasSequence) {
    result.innerText = "WEAK - Avoid simple sequences!";
    suggestion.innerText = "Try a less predictable password like: Mango@4827";
}
else if (!hasUppercase) {
    result.innerText = "WEAK - Add at least one capital letter!";
    
}
else if (!hasLowercase) {
    result.innerText = "WEAK - Add at least one small letter!";
    suggestion.innerText = "Try: Hello@123";
}
else if (!hasNumber) {
    result.innerText = "WEAK - Add at least one number!";
    suggestion.innerText = "Try: Hello@123";
}
else if (!hasSpecial) {
    result.innerText = "WEAK - Add at least one special character!";
    suggestion.innerText = "Try: Hello@123";
} 
else if (password.length < 8) {
    result.innerText = "WEAK - Password is too short!";
}
else {
    result.innerText = "STRONG - Good password! Score: " + score + "/5";
}
}