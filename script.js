// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  
  password = "";

  // Create an array for each character type
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialChars = ["!","@","#","$","%","^","&","*","(",")","-","_","+","="];


  // Ensure that the user puts in a desired password length.
  var x = true;

  while (x) {

    var passwordLength = prompt("How many characters would you like your password to be?");
    // Ensure that the password length is between 8 and 128 characters
    if (passwordLength >= 8 && passwordLength <= 128) {
      alert("You selected " + passwordLength + " characters.");
      x = false;
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

  };


  //NEED HELP**WHY ARE THESE NOT WORKING
  function confirmCharacters() {

    var confirmLowercase = confirm("Would you like your password to include lowercase?");
    var confirmUppercase = confirm("Would you like your password to include uppercase?");
    var confirmNumbers = confirm("Would you like your password to include numbers?");
    var confirmSpecialChars = confirm("Would you like your password to include special characters?");
    if (confirmSpecialChars == false && confirmUppercase == false && confirmLowercase == false && confirmNumbers == false){
      confirmCharacters();
    }
    createArray(confirmLowercase, confirmUppercase, confirmNumbers, confirmSpecialChars);
    validateSelection();
  }
  
  // //*****ADDED SO THAT THE VARIABLES WORK */
  // var confirmLowercase = confirm("Would you like your password to include lowercase letters?");
  // var confirmUppercase = confirm("Would you like your password to include uppercase letters?");
  // var confirmNumbers = confirm("Would you like your password to include numbers?");
  // var confirmSpecialChars = confirm("Would you like your password to include special characters?");
  
  function createArray(confirmLowercase, confirmUppercase, confirmNumbers, confirmSpecialChars) {
    // Combine arrays depending on which character types the user selects
    var allUserChosenCharacters = [];
    
    if (confirmLowercase) {
      allUserChosenCharacters = allUserChosenCharacters.concat(lowercase)
      // Ensure that a lowercase letter is included in the password
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    
    if (confirmUppercase) {
      allUserChosenCharacters = allUserChosenCharacters.concat(uppercase)
      password += uppercase[Math.floor(Math.random() * uppercase.length)];
    }
    
    if (confirmNumbers) {
      allUserChosenCharacters = allUserChosenCharacters.concat(numbers)
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    
    if (confirmSpecialChars) {
      allUserChosenCharacters = allUserChosenCharacters.concat(specialChars)
      password += specialChars[Math.floor(Math.random() * specialChars.length)];
    }
    
    if (confirmSpecialChars == false && confirmUppercase == false && confirmLowercase == false && confirmNumbers == false) {
      
      alert("You must choose at least one character type.");
      
    };
    // Use a for loop to add a random character from the customized array one character at a time until the password length has been reached
    validateSelection();
    
    for (var i = 0; i < passwordLength; i++) {
      
      password += allUserChosenCharacters[Math.floor(Math.random() * allUserChosenCharacters.length)];
      
    }
    
    console.log(confirmLowercase)
    
  };
  
  
  function validateSelection() {
    
    // Create a confirm for each possible outcome to validate the user's selection.
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
    } else if (confirmLowercase = true && confirmUppercase == false && confirmNumbers == false && confirmSpecialChars == false) {
      console.log("lowercase confirmed");
      confirm("You selected lowercase letters. Click `OK` continue.")
    } else if (confirmNumbers == true && confirmUppercase == false && confirmLowercase == false && confirmSpecialChars == false) {
      console.log("numbers confirmed");
      confirm("You selected numbers. Click `OK` continue.")
    } else {
      alert("You must select at least one character type.");
      confirmCharacters();
    }
    return;
  };
  
  return password;

};
  
  
  // Write password to the #password input
function writePassword() {
    var password = generatePassword(); 
    console.log(password);
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }


  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
