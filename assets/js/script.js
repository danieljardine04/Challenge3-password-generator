// Assignment code here
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars =" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"




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
  
  var result = "";
  if(charPrompt <= 128 && charPrompt >= 8){
     var options = "";
    var confirmLowerCase = window.confirm("Would you like to add lowercase letters to your password?");
  confirmLowerCase;
    if(confirmLowerCase){
      options += alphabet;
      console.log(options);
    }
    var confirmUpperCase = window.confirm("Would you like to add Uppercase letters to your password?");
    if(confirmUpperCase){
      options += upperAlphabet;
      console.log(options);
    }
    var confirmNumbers = window.confirm("Would you like to add numbers to your password?");
    if(confirmNumbers){
      options += numbers;
      console.log(options);
    }
  
  var confirmSpecial = window.confirm("Would you like to add special characters to your password?");
  if(confirmSpecial){
    options += specialChars;
    console.log(options);
  }
  if(options === "" || options === null){
    window.alert("You need to choose at least one letter type option");
    return "";
  }
  for(var i = 0; i < charPrompt; i++){
    var randomLetter = options[Math.floor(Math.random() * options.length)];
    result += randomLetter;
  }

  return result;
  // I need a for loop for each character in charprompt
} else {
  window.alert("Your Password needs to be in between 8 characters to 128 characters");
  return "";
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

