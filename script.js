const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", 
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
    "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", 
    "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", 
    "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", 
    "/"
];

const passwordone = document.getElementById("passwordone");
const passwordtwo = document.getElementById("passwordtwo");
const generate = document.getElementById("generate");
const refresh = document.getElementById("refresh");

let isActivated = false;

generate.addEventListener("click", generatePassword);
refresh.addEventListener("click", clearPasswords);

function generatePassword() {
    if (!isActivated) {
        passwordone.textContent = createRandomPassword();
        passwordtwo.textContent = createRandomPassword();
        isActivated = true;
    }
}

function createRandomPassword(length = 15) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function clearPasswords() {
    passwordone.textContent = "";
    passwordtwo.textContent = "";
    isActivated = false;
}
