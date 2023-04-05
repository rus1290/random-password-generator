// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// this function prompts the user to choose length of the password and also validates the answer of a user.
function charLength() {
  var length = prompt("Please choose the number between 8 to 128 characters.");
    if (length >= 8 && length < 128 && !isNaN(length)){
    return length;
  } else {
    alert("Please try agian!");
  }
  return length
}

// this function prompts the user for character type;
// while loop will iterate through all character type choices and will store them in a variable choice.
function charType() {
  var choice = " ";
  while(choice == " "){
    var lower = confirm("Do you want to include lower characters?");
    if (lower == true){choice += "l"};
    console.log(choice);
    var upper = confirm("Do you want to include upper characters?");
    if (lower == true){choice += "u"};
    console.log(choice);
    var number = confirm("Do you want to include numbers?");
    if (number == true){choice += "n"};
    console.log(choice);
    var special = confirm("Do you want to include special characters?");
    if (special == true){choice += "s"};
    console.log(choice);
  }
}

function generatePassword() {

  // The required code to make the function work:
  // 1. Prompt the user for password length
  // 2. Prompt the user for character type
  // 3. Check wether the input matches the criteria
  // 4. Generate password based on the criteria
  // 5. Display password to the page
  
  var passwordLength = charLength();
  var charChoice = charType();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
