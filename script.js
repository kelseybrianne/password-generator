// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  password = "";

  // Create an array for each character type
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialChars = ["!","@","#","$","%","^","&","*","(",")","-","_","+","="];

  
  // Ensure that the password length is between 8 and 128 characters
  var passwordLength = prompt("How many characters would you like your password to be?");

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert(`You selected ${passwordLength} characters.`);
    confirmCharacters();
  } else if (passwordLength < 8) {
    alert("Your password must contain at least 8 characters.");
    generatePassword();
  } else if (passwordLength > 128) {
    alert("Your password may not exceed 128 characters.");
    generatePassword();
  } else {
    alert("Your password must be an integer value between 8 and 128.")
    generatePassword();
  } 

  // Prompt users for desired character types
  function confirmCharacters() {
    confirmLowercase = window.confirm("Would you like your password to include lowercase?");
    confirmUppercase = window.confirm("Would you like your password to include uppercase?");
    confirmNumbers = window.confirm("Would you like your password to include numbers?");
    confirmSpecialChars = window.confirm("Would you like your password to include special characters?");

    // Validate user's character type selection
    if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == true && confirmSpecialChars == true) {
      console.log("All four confirmed");
      confirm("You selected lowercase, uppercase, numeric, and special characters. Click `OK` to continue.");
      
    } else if (confirmLowercase == true && confirmUppercase == true && confirmSpecialChars == true && confirmNumbers == false) {
      console.log("lowercase, uppercase, and special characters confirmed");
      confirm("You selected lowercase, uppercase, and special characters. Click `OK` to continue.");
    } else if (confirmNumbers == true && confirmLowercase == true && confirmSpecialChars == true && confirmUppercase == false) {
      console.log("numbers, lowercase, and special characters confirmed");
      confirm("You selected lowercase, numeric, and special characters. Click `OK` to continue.")
    } else if (confirmNumbers == true && confirmLowercase == true && confirmUppercase == true && confirmSpecialChars == false) {
      console.log("numbers, lowercase, and uppercase confirmed");
      confirm("You selected lowercase, uppercase, and numbers. Click `OK` to continue.")
    } else if (confirmNumbers == true && confirmSpecialChars == true && confirmUppercase == true && confirmLowercase == false) {
      console.log("numbers, special characters, and uppercase confirmed");
      confirm("You selected uppercase, numeric, and special characters. Click `OK` to continue.")
    } else if (confirmUppercase == true && confirmSpecialChars == true && confirmLowercase == false && confirmNumbers == false) {
      console.log("uppercase and special characters confirmed");
      confirm("You selected uppercase and special characters. Click `OK` to continue.")
    } else if (confirmLowercase == true && confirmSpecialChars == true && confirmUppercase == false && confirmNumbers == false) {
      console.log("lowercase and special characters confirmed");
      confirm("You selected lowercase and special characters. Click `OK` to continue.")
    } else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == false && confirmSpecialChars == false) {
      console.log("lowercase and uppercase confirmed");
      confirm("You selected lowercase and uppercase letters. Click `OK` to continue.")
    } else if (confirmNumbers == true && confirmSpecialChars == true && confirmUppercase == false && confirmLowercase == false) {
      console.log("numbers and special characters confirmed");
      confirm("You selected numeric and special characters. Click `OK` to continue.")
    } else if (confirmNumbers == true && confirmUppercase == true && confirmSpecialChars == false && confirmLowercase == false) {
      console.log("uppercase and numbers confirmed");
      confirm("You selected uppercase letters and numbers. Click `OK` to continue.")
    } else if (confirmLowercase == true && confirmNumbers == true && confirmUppercase == false && confirmSpecialChars == false) {
      console.log("lowercase and numbers confirmed");
      confirm("You selected lowercase letters and numbers. Click `OK` to continue.")
    } else if (confirmSpecialChars == true && confirmLowercase == false && confirmUppercase == false && confirmNumbers == false) {
      console.log("special characters confirmed");
      confirm("You selected special characters. Click `OK` to continue.")
    } else if (confirmUppercase == true && confirmLowercase == false && confirmNumbers == false && confirmSpecialChars == false) {
      console.log("uppercase confirmed");
      confirm("You selected uppercase letters. Click `OK` continue.")
    } else if (confirmUppercase == false && confirmNumbers == false && confirmSpecialChars == false && confirmLowercase === true) {
      console.log("lowercase confirmed");
      confirm("You selected lowercase letters. Click `OK` continue.")
    } else if (confirmNumbers == true && confirmUppercase == false && confirmLowercase == false && confirmSpecialChars == false) {
      console.log("numbers confirmed");
      confirm("You selected numbers. Click `OK` continue.")
    } else if (!confirmSpecialChars && !confirmUppercase && !confirmLowercase && !confirmNumbers) {
      alert("You must select at least one character type.");
      confirmCharacters();
    }
    
    createArray(confirmLowercase, confirmUppercase, confirmNumbers, confirmSpecialChars);
  
  }
  
  function createArray(confirmLowercase, confirmUppercase, confirmNumbers, confirmSpecialChars) {
    // Create new array with user selected character types
    var allUserChosenCharacters = [];
    
    if (confirmLowercase) {
      allUserChosenCharacters = allUserChosenCharacters.concat(lowercase)
      // Ensure that a lowercase letter is included in the password
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    
    if (confirmUppercase) {
      allUserChosenCharacters = allUserChosenCharacters.concat(uppercase)
      // Ensure that a uppercase letter is included in the password
      password += uppercase[Math.floor(Math.random() * uppercase.length)];
    }
    
    if (confirmNumbers) {
      allUserChosenCharacters = allUserChosenCharacters.concat(numbers)
      // Ensure that a number is included in the password
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    
    if (confirmSpecialChars) {
      allUserChosenCharacters = allUserChosenCharacters.concat(specialChars)
      // Ensure that a special character is included in the password
      password += specialChars[Math.floor(Math.random() * specialChars.length)];
    }
    
    for (var i = 0; i < passwordLength; i++) {
      
      password += allUserChosenCharacters[Math.floor(Math.random() * allUserChosenCharacters.length)];
      
    }
    
  };
  
  return password;

};
  
  // Write password to the #password input
function writePassword() {
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
