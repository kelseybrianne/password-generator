// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChars = ["!","@","#","$","%","^","&","*","(",")","-","_","+","="];

var numbersAndLowercase = [...numbers, ...lowercase];
var numbersAndUppercase = [...numbers, ...uppercase];
var numbersAndSpecialChars = [...numbers, ...specialChars];
var lowerAndUppercase = [...lowercase, ...uppercase];
var lowercaseAndSpecialChars = [...lowercase, ...specialChars];
var uppercaseAndSpecialChars = [...uppercase, ...specialChars];

var numbersLowercaseUppercase = [...numbers, ...lowercase, ...uppercase];
var numbersLowercaseSpecial = [...numbers, ...lowercase, ...specialChars];
var numbersUppercaseSpecial = [...numbers, ...uppercase, ...specialChars];
var lowerUpperSpecial = [...lowercase, ...uppercase, ...specialChars];

var allFour = [...numbers, ...lowercase, ...uppercase, ...specialChars];


// Write password to the #password input
function writePassword() {
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }


  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);