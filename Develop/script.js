//generator
var generatePassword = function() {

  //length prompt
  var length = "";

  while (length === "" || length === null) {
    var passLength = prompt("How long would you like your password to be? Must be 8-128 characters.");

    if (isNaN(passLength)) {
      window.alert("Please enter value between 8-128.");
    } else if (passLength < 8) {
      window.alert("Please enter value between 8-128.");
    } else if (passLength > 128) {
      window.alert("Please enter value between 8-128.");
    } else if (passLength === null) {
      window.alert("Please enter value between 8-128.");
    } else {
      length = passLength;
    }
  }

  //character selectiion

  //lowercase confirm
  var lowerCase = window.confirm("Click 'OK' if you would like your password to contain lowercase characters.");

  //uppercase confirm
  var upperCase = window.confirm("Click 'OK' if you would like your password to contain uppercase characters.");

  //numeric confirm
  var numericChars = window.confirm("Click 'OK' if you would like your password to contain numeric characters.");

  //special confirm
  var specialChars = window.confirm("Click 'OK' if you would like your password to contain special characters.");

  //no selection
  if (lowerCase === false && upperCase === false && numericChars === false && specialChars === false) {
    window.alert("You must select a character type. Try again.");
    generatePassword();
  } else {

    //character check
    var passOutput = "";

    if (lowerCase) {
      passOutput += alphabet.toLowerCase();
    }
    if (upperCase) {
      passOutput += alphabet.toUpperCase();
    }
    if (numericChars) {
      passOutput += numeric;
    }
    if (specialChars) {
      passOutput += special;
    }

    //rng
    var password = "";

    for (var i = 0; i < length; i++) {
      var rng = passOutput.charAt(Math.floor(Math.random() * passOutput.length));
      password += rng;
    }

    return password;
  }
};

//password characters
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numeric = "123456789";
var special = "!@#$%^&*()-=_+[]{}~`'<>,./?|:;";

//password display
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//button
var generateBtn = document.querySelector("#generate");

//button click
generateBtn.addEventListener("click", writePassword);