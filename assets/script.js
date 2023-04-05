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
  return choice;
}

// Here we defined what each character type is and used choice, from the previous function to to store chall selected choices in a variable charSelect.
function charDefined(choice) {
  loweChar = "abcdefghijklmnopqrstuvwxyz";
  upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numberChar = "0123456789";
  specialChar = "!#$%&'()*\"+,-./:;<=>?@[]^_`{|}~";
  var charSelect = " ";
  if(choice.includes("1")){charSelect += lowerChar};
  if(choice.includes("u")){charSelect += upperChar};
  if(choice.includes("n")){charSelect += numberChar};
  if(choice.includes("s")){charSelect += specialChar};
  return charSelect;
}

function generatePassword(length, charPool) {

  // The required code to make the function work:
  // 1. Prompt the user for password length
  // 2. Prompt the user for character type
  // 3. Check wether the input matches the criteria
  // 4. Generate password based on the criteria
  // 5. Display password to the page

  var passwordString = " ";
  for(var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * charPool.length);
    passwordString += charPool.substring(randomNumber, randomNumber +1);
  }
  return(passwordString);
}

// Write password to the #password input
function writePassword() {
  var length = charLength();
  var choice = charType();
  var charPool = charDefined(choice);
  var password = generatePassword(length, charPool)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
