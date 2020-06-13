// Assignment

var generateBtn = document.querySelector('#generate');

// Password to password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Event Listener to button generate
generateBtn.addEventListener('click', writePassword);

function generatePassword(){

  // variables
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var number = '0123456789';
  var symbol = '!@#$%^&()?`,~/|\{}[]+=:';
  var passArray = [lower, upper, number, symbol];

  // password confirmation length
  var passLength = prompt('How long do you want your password? (8-128 characters)');
  if(passLength > 7 && passLength < 129){
    alert("choose a "  + passLength +  " character password.")
  }
  else {
    alert('Your password must be within 8 to 128 characters long')
    return;
    }
  

  // Validating users choice for lower case letters
  var lowerCase = confirm('Would you like to have lower case letters in your password?')
  if(lowerCase === true){
    alert('You have chosen to use lower case letters.')
    console.log(lowerCase)
  }
  else{
    alert('You have chosen not to use lower case letters.')
    console.log(lowerCase)
  }

   // Validating users choice for upper case letters
   var upperCase = confirm('Would you like to have upper case letters in your password?')
   if(upperCase === true){
    alert('You have chosen to use upper case letters.')
    console.log(upperCase)
  }
  else{
    alert('You have chosen not to use upper case letters.')
    console.log(upperCase)
  }

   // Validating users choice for numeric characters
   var numeric = confirm('Would you like to have numeric characters in your password?')
   if(numeric === true){
    alert('You have chosen to use numeric characters.')
    console.log(numeric)
  }
  else{
    alert('You have chosen not to use numeric characters.')
    console.log(numeric)
  }

   // Validating users choice for special characters
   var symbols = confirm('Would you like to have symbols in your password?')
   if(symbols === true){
    alert('You have chosen to use symbols.')
    console.log(symbols)
  }
  else{
    alert('You have chosen not to use symbols.')
    console.log(symbols)
  }

  // Loop for password creation and the return to writePassword
  for(var i = 0; i<passLength; i++){
    var passCreated = passArray[Math.floor(Math.random() * passArray.length)]
  }
}

    