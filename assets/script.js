// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked me! :)");

  // The required code to make the function work:
  // 1. Prompt the user for password length
  // 2. Prompt the user for character type
  // 3. Check wether the input matches the criteria
  // 4. Generate password based on the criteria
  // 5. Display password to the page

  return "Test, test"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
