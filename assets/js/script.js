// create variable with alphanumeric, special characters password length
// and boolean values for recording responses
var isUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var isNumeric = "0123456789";
var isLowerCase = "abcdefghijklmnopqrstuvwxyz";
var isSpecialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordLength = 0;
var lowerCaseChar = true;
var upperCaseChar = true;
var numericChar = true;
var specialChar = true;

var getPasswordLength = function() {

// ask user how long they want there password to be. between 8 and 128 characters
passwordLength = window.prompt("Please choose a password length between " + 
"8 and 128 characters");

// If no password length chosen
 if (passwordLength === "" || passwordLength === null) {
   window.alert("Please choose a password length");
   getPasswordLength();
 }
 // if length chosen less than 8 or greater than 128
 else if (passwordLength < 8 || passwordLength > 128) {
   window.alert("Please choose a password length between 8 and 128 characters");
   getPasswordLength();
 }
 else if (isNaN(passwordLength)) {
   window.alert("Please choose numbers only!");
   getPasswordLength();
 }
 else {
   passwordLength = parseInt(passwordLength);
   getLowerCase();
 }
};

var getLowerCase = function() {

  // Would user like lower case characters?
  lowerCaseChar = window.prompt("Would you like to include LOWER CASE characters? " + 
  "Please chose YES or NO.");

  lowerCaseChar = lowerCaseChar.toLowerCase();

  // if nothing chosen
  if (lowerCaseChar === "" || lowerCaseChar === null) {
    window.alert("You must choose YES or NO!");
    getLowerCase();
  }
  // if something other than yes or no chosen
  else if (lowerCaseChar !== "yes" && lowerCaseChar !== "no") {
    window.alert("You must choose YES or NO!");
    getLowerCase();
  }
  
  // if yes or no chosen
  if (lowerCaseChar === "yes") {
    lowerCaseChar = true;
    getUpperCase();
  }
  else {
    lowerCaseChar = false;
    getUpperCase();
  }
  
};

var getUpperCase = function() {

  // Would user like upper case characters?
  upperCaseChar = window.prompt("Would you like to include UPPER CASE characters? " + 
  "Please chose YES or NO.")

  upperCaseChar = upperCaseChar.toLowerCase();
  
    // if nothing chosen
    if (upperCaseChar === "" || upperCaseChar === null) {
      window.alert("You must choose YES or NO!");
      getUpperCase();
    }
    // if something other than yes or no chosen
    else if (upperCaseChar !== "yes" && upperCaseChar !== "no") {
      window.alert("You must choose YES or NO!");
      getUpperCase();
    }

  // if yes or no chosen
  if (upperCaseChar === "yes") {
    upperCaseChar = true;
    getNumericChar();
  }
  else {
    upperCaseChar = false;
    getNumericChar();
  }

};

var getNumericChar = function() {

// would use like numeric characters in their password
numericChar = window.prompt("Would you like NUMERIC characters in your password? " +
"Please choose YES or NO.");

isNumeric = isNumeric.toLowerCase();

// if no response given
if (numericChar === "" || numericChar === null) {
  window.alert("You must choose YES or NO!")
}
// if something other than yes or no chosen
else if (numericChar !== "yes" && numericChar !== "no") {
  window.alert("You must choose YES or NO!");
  
}

// if yes or no chosen
if (numericChar === "yes") {
  numericChar = true;
  getSpecialChar();
}
else {
  numericChar = false;
  getSpecialChar();
}

};

var getSpecialChar = function() {

  // would use like numeric characters in their password
  specialChar = window.prompt("Would you like SPECIAL characters in your password? " +
  "Please choose YES or NO.");
  
  specialChar = specialChar.toLowerCase();
  
  // if no response given
  if (specialChar === "" || specialChar === null) {
    window.alert("You must choose YES or NO!")
    getSpecialChar();
  }
  // if something other than yes or no chosen
  else if (specialChar !== "yes" && specialChar !== "no") {
    window.alert("You must choose YES or NO!");
    getSpecialChar();
  }
  
  // if no options chosen, let use know they need to choose at least one and start over
  if (lowerCaseChar === false && upperCaseChar === false && numericChar === false && 
    specialChar === "no") {
      window.alert("You must choose at least one option for your passord!");
      getLowerCase();
    }
    else {

  // if yes or no chosen
  if (specialChar === 'yes') {
    specialChar = true;
    // createPassword();
    writePassword()
  }
  else {
    specialChar = false;
    // createPassword();
    writePassword()
  }
  }

  };

  var createPassword = function() {

    var tempString = "";
    var completePassword = "";
    var completePasswordLen = 0; 

    // loop through passwordLength count
    // debugger;
    for (var i = 0; i < passwordLength; i++) {

      // lower case character
      if (lowerCaseChar === true) {

        // if completePassword length is equal to password length break out of the loop
        completePasswordLen = parseInt(completePassword.length);
        if (completePasswordLen === passwordLength) {
          break;
        }

        // get random letter from array
        // found solution at stack over flow
        tempString = isLowerCase.charAt(Math.floor(Math.random() * isLowerCase.length));
        
        completePassword = completePassword + tempString;

      }
      // upper case character
      if (upperCaseChar === true) {

        // if completePassword length is equal to password length break out of the loop
        completePasswordLen = parseInt(completePassword.length);
        if (completePasswordLen === passwordLength) {
          console.log(completePassword);
          break;
        }

        // get random upper case letter from array
        tempString = isUpperCase.charAt(Math.floor(Math.random() * isUpperCase.length));
        
        completePassword = completePassword + tempString;
        }
        // numeric character
        if (numericChar === true) {

          // if completePassword length is equal to password length break out of the loop
          completePasswordLen = parseInt(completePassword.length);
          if (completePasswordLen === passwordLength) {
            console.log(completePassword);
            break;
          }
  
          // get random upper case letter from array
          tempString = isNumeric.charAt(Math.floor(Math.random() * isNumeric.length));
          
          completePassword = completePassword + tempString;
  
          }
          // special character
          if (specialChar === true) {

            // if completePassword length is equal to password length break out of the loop
            completePasswordLen = parseInt(completePassword.length);
            if (completePasswordLen === passwordLength) {
              console.log(completePassword);
              break;
            }
    
            // get random upper case letter from array
            tempString = isSpecialChar.charAt(Math.floor(Math.random() * isSpecialChar.length));
            
            completePassword = completePassword + tempString;
            console.log(completePassword);
            }
    }

    return completePassword;

  };


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordLength);
