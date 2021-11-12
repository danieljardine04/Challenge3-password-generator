// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function(){
  var charPrompt = window.prompt("How many characters would you like in your password? It needs to be 8 to 128 characters");
  if(charPrompt > 128){
     window.alert("Your Password needs to be less than 129 characters");
     generatePassword();
  } 
  // I need a for loop for each character in charprompt
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);