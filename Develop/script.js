
var criteria = {
  promptConfirm: false,
  characterLimit: 8,
  upperCase: true,
  lowerCase: true,
  numbers: true,
  specialCharacters: true,
};


var characters = {
  letter: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!#$%&()*+,-./:;<=>?@^_`{|}~",
};


var randomNum = function (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


var randomCharacter = function (charactersProperty) {
  randomPickedCharacter = charactersProperty.charAt(randomNum(0,charactersProperty.length));
 
  return randomPickedCharacter;
};


var setCharacterLimit = function () {
  criteria.characterLimit = window.prompt("What's your prefered number of characters?\n[Length must be at least 8 characters but no more than 128 characters]");
  criteria.characterLimit = Number(criteria.characterLimit);
  if (typeof criteria.characterLimit === typeof 0 && criteria.characterLimit >= 8 && criteria.characterLimit <= 128) {
    window.alert("You set the prefered number of characters: " + criteria.characterLimit); 
  } else {
    window.alert("Please enter a valid number between 8 and 128");
    setCharacterLimit();
  }
};


var declareOtherCriteria = function() {
  criteria.lowerCase = window.confirm("Do you want use Lower Case?");
  criteria.upperCase = window.confirm("Do you want use Upper Case?");
  criteria.numbers = window.confirm("Do you want use Numbers?");
  criteria.specialCharacters = window.confirm("Do you want use Special Characters?");
  if (criteria.lowerCase === false && criteria.upperCase === false && criteria.numbers === false && criteria.specialCharacters === false) {
      window.alert("Please set at least one option for the password!\n[Lower Case, Upper Case, Numbers, or Special Characters]");
      declareOtherCriteria();
  } else {
  window.alert("Password ready to generate!\nGenerating password now...");
  }
}



var promptCriteria = function () {
  criteria.promptConfirm = window.confirm("Would you like to generate a password?");
  if (criteria.promptConfirm) {
    
    setCharacterLimit();
    declareOtherCriteria();
  } else {
  };
}

var generatePassword = function () {
  promptCriteria();
  if (criteria.promptConfirm) {
    
    password = "";
    
    while (password.length < criteria.characterLimit) {
      switch (randomNum(0,3)) {
       
        case 0:
          if (criteria.lowerCase) {
            password = password + randomCharacter(characters.letter);
            break;
          } else {
            break;
          }
       
        case 1:
          if (criteria.upperCase) {
            password = password + randomCharacter(characters.letter.toUpperCase());
            break;
          } else {
            break;
          }
       
        case 2:
          if (criteria.numbers) {
            password = password + randomCharacter(characters.number);
            break;
          } else {
            break;
          }
        
        case 3:
          if (criteria.specialCharacters) {
            password = password + randomCharacter(characters.special);
            break;
          } else {
            break;
          }
       
        default:
          window.alert("Error");
          break;
      }
    }
    return password;
  } else {
    window.alert("Please try again later");
    password = "ʕ；•`ᴥ•´ʔ";
    return password;
  }
};



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