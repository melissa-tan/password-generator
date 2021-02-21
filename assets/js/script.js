var password = "";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = lowerChar.toUpperCase();
var symbol= '!@#$%^&*()+-=<>,./?'
var number= "1234567890";

var generateBtn = document.querySelector("#generate");
var passwordLengthEl = document.querySelector("#charInputNumber");
var lowerCaseEl = document.querySelector("#lowerCaseCheckbox");
var upperCaseEl = document.querySelector("#upperCaseCheckbox");
var numericEl = document.querySelector("#numberCheckbox");
var symbolsEl = document.querySelector("#symbolCheckbox");

var passwordLength;
var lowerCase = false;
var upperCase = false;
var symbols = false;
var numeric = false;

lowerCaseEl.addEventListener("change", function() {
  if(this.checked){
    lowerCase = true;
  }
});
upperCaseEl.addEventListener("change", function() {
  if(this.checked){
    upperCase = true;
  }
});
numericEl.addEventListener("change", function() {
  if(this.checked){
    numeric = true;
  }
});
symbolsEl.addEventListener("change", function() {
  if(this.checked){
    symbols = true;
  }
});

//If checkboxes are selected, add characters into a pool.
function characterPool(){
  var characterPool = "";
  if(lowerCase===true){
    characterPool.concat(lowerChar);
    return characterPool;
  }

  if(upperCase===true){
    characterPool.concat(upperChar);
    return characterPool;
  }

  if(numeric===true){
    characterPool.concat(number);
    return characterPool;
  }

  if(symbols===true){
    characterPool.concat(symbol);
    return characterPool;
  }
  
}

function passwordLengthCheck(lengthInput){
  
  if(lengthInput<8 || lengthInput>128){
    alert("Please choose a password length between 8 and 128");
  }
}

function checkboxCheck(){
  if(lowerCase===false && upperCase===false && numeric===false && symbols===false){
    alert("Please select at least one type of character for your password");
  }
}



// Write password to the #password input
function writePassword() {
  passwordLength = +passwordLengthEl.value
  passwordLengthCheck(passwordLength);
  checkboxCheck();
  console.log(characterPool);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

