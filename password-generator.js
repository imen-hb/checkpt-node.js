
const generatePassword = require('generate-password');


function generateRandomPassword() {
 
  const passwordOptions = {
    length: 12, 
    numbers: true, 
    symbols: true,
    uppercase: true, 
    excludeSimilarCharacters: true, 
  };

 
  const password = generatePassword.generate(passwordOptions);


  console.log('Generated password:', password);
}


generateRandomPassword();
