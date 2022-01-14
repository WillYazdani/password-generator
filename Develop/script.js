//password characters
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var special = "!@#$%^&*()-=_+[]{}~`<>,./?|:;";

var generatePassword = function() {

  var length = "";

  while (length === "" || length === null) {
    var passLength = prompt("How long would you like your password to be? Must be 8-18 characters.");

    if (isNaN(passLength)) {
      window.alert("Value entered must be a number");
    } else if (passLength < 8) {
      window.alert("Password length must be between 8-128 characters.");
    } else if (passLength > 128) {
      window.alert("Password length must be between 8-128 characters.");
    } else if (passLength === null) {
      window.alert("Please enter value between 8-128.");
    } else {
      length = passLength;
    }
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






//button generates 

//prompt for criteria

//prompt for length 8-128

//prompt for character types - lowercase, uppercase, numeric, special characters

//when prompts are answered then password is generated matches selected criteria

//when password is generated then it is displayed in an alert or on the page