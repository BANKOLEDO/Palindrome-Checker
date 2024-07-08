const checkButton = document.getElementById("check-btn")
const textInput = document.getElementById("text-input")
const result = document.getElementById("result")

const isPalindrome = (str) => {
    const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

const textEntry = (event) => {
    event.preventDefault();
    const inputValue = textInput.value;
    if (inputValue === "") {
        alert("Please input a value");
    } else {
        if (isPalindrome(inputValue)) {
            result.textContent = `${inputValue} is a palindrome`;
        } else {
            result.textContent = `${inputValue} is not a palindrome`;
        }
    }
}

checkButton.addEventListener("click", textEntry);
