
var criteria = {
  promptConfirm: false,
  characterLimit: 8,
  upperCase: true,
  lowerCase: true,
  numbers: true,
  specialCharacters: true,
};

// Object that stores every type of character
var characters = {
  letter: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!#$%&()*+,-./:;<=>?@^_`{|}~",
};

// Function ---------------------------------------
// Below is used to create random number from parameters
var randomNum = function (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Function ---------------------------------------
// Below is used to create random character from characters object
var randomCharacter = function (charactersProperty) {
  randomPickedCharacter = charactersProperty.charAt(randomNum(0,charactersProperty.length));
  // window.alert(randomPickedCharacter);
  return randomPickedCharacter;
};

// Function ---------------------------------------
// Ask the user for parameters for the function generate Password
var setCharacterLimit = function () {
  criteria.characterLimit = window.prompt("What's your desired character limit?\n[Length must be at least 8 characters but no more than 128 characters]");
  criteria.characterLimit = Number(criteria.characterLimit);
  if (typeof criteria.characterLimit === typeof 0 && criteria.characterLimit >= 8 && criteria.characterLimit <= 128) {
    window.alert("You set the character limit to: " + criteria.characterLimit); 
  } else {
    window.alert("Please enter a number valued between 8 and 128");
    setCharacterLimit();
  }
};

// Function ---------------------------------------
// Ask the user for parameters for the function generate Password
var declareOtherCriteria = function() {
  criteria.lowerCase = window.confirm("Do you want Lower Case?");
  criteria.upperCase = window.confirm("Do you want Upper Case?");
  criteria.numbers = window.confirm("Do you want Numbers?");
  criteria.specialCharacters = window.confirm("Do you want Special Characters?");
  if (criteria.lowerCase === false && criteria.upperCase === false && criteria.numbers === false && criteria.specialCharacters === false) {
      window.alert("Please set at least (1) criteria for the password!\n[Lower Case, Upper Case, Numbers, or Special Characters]");
      declareOtherCriteria();
  } else {
  window.alert("Criteria for your password is set!\nGenerating password now...");
  }
}

// Function ---------------------------------------
// Ask the user for parameters for the function generate Password
var promptCriteria = function () {
  criteria.promptConfirm = window.confirm("Would you like to generate a password?");
  if (criteria.promptConfirm) {
    // #### Need a function to confirm if the Character Limit Input is an actual number ####
    setCharacterLimit();
    declareOtherCriteria();
  } else {
  };
}

// Function ---------------------------------------
// Generates the actual password based on parameters generated from the promptCriteria functionand used by the writePassword function
var generatePassword = function () {
  promptCriteria();
  if (criteria.promptConfirm) {
    // To clear any set password
    password = "";
    // Loop to create the password one character at a time til character limit is met
    while (password.length < criteria.characterLimit) {
      switch (randomNum(0,3)) {
        // LowerCase
        case 0:
          if (criteria.lowerCase) {
            password = password + randomCharacter(characters.letter);
            break;
          } else {
            break;
          }
        // UpperCase
        case 1:
          if (criteria.upperCase) {
            password = password + randomCharacter(characters.letter.toUpperCase());
            break;
          } else {
            break;
          }
        // Number
        case 2:
          if (criteria.numbers) {
            password = password + randomCharacter(characters.number);
            break;
          } else {
            break;
          }
        // SpecialCharacter
        case 3:
          if (criteria.specialCharacters) {
            password = password + randomCharacter(characters.special);
            break;
          } else {
            break;
          }
        // Just in case the random number isn't 0, 1, 2,or 3 
        default:
          window.alert("Ooops!! ¯|_(ツ)_|¯");
          break;
      }
    }
    return password;
  } else {
    window.alert("No problem! Maybe next time.");
    password = "ʕ；•`ᴥ•´ʔ";
    return password;
  }
};

// ####################################################
// ####################################################

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);