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
var characterPoolArray = [];

lowerCaseEl.addEventListener("change", function() {
  if(this.checked){
    lowerCase = true;
  } else {
    lowerCase = false;
  }
});
upperCaseEl.addEventListener("change", function() {
  if(this.checked){
    upperCase = true;
  } else {
    upperCase = false;
  }
});
numericEl.addEventListener("change", function() {
  if(this.checked){
    numeric = true;
  } else {
    numeric = false;
  }
});
symbolsEl.addEventListener("change", function() {
  if(this.checked){
    symbols = true;
  } else {
    symbols = false;
  }
});

//If checkboxes are selected, add characters into a pool.

var characterPool = "";
function addCharacters(){
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = lowerChar.toUpperCase();
  var symbol= '!@#$%^&*()+-=<>,./?'
  var number= "1234567890";

  if(lowerCase===true){
    characterPool += lowerChar;
  }

  if(upperCase===true){
    characterPool += upperChar;
  }
  
  if(numeric===true){
    characterPool += number;
  }
  
  if(symbols===true){
    characterPool += symbol;
  } 
  characterPoolArray = characterPool.split("");
  console.log(characterPoolArray)
  return characterPoolArray;
}


function passwordLengthCheck(lengthInput){
  
  if(lengthInput<8 || lengthInput>128){
    alert("Please choose a password length between 8 and 128");
    passwordLength = 0;
    return;
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
  characterPool= "";
  addCharacters();

  var password = generatePassword(passwordLength, characterPoolArray);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 function generatePassword(passwordLength, characterPoolArray){
  var password= [];
  for(i=0 ; i< passwordLength; i++){
    // characterPoolArray(Math.floor(Math.random() * )
    var characters = characterPoolArray[Math.floor(Math.random()* characterPoolArray.length)]
    console.log(characters)
    password.push(characters) 
  }
  return password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

