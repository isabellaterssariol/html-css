// Recuperando as validações do localStorage
const savedValidations = localStorage.getItem('formValidations');
const validations = JSON.parse(savedValidations);

// Exibindo as informações na página
const radioValidInfo = document.getElementById('radioValidInfo');
const nameValidInfo = document.getElementById('nameValidInfo');
const emailValidInfo = document.getElementById('emailValidInfo');
const messageValidInfo = document.getElementById('messageValidInfo');

radioValidInfo.textContent = validations.radioValid ? 'Válido' : 'Inválido';
nameValidInfo.textContent = validations.nameValid ? 'Válido' : 'Inválido';
emailValidInfo.textContent = validations.emailValid ? 'Válido' : 'Inválido';
messageValidInfo.textContent = validations.messageValid ? 'Válido' : 'Inválido';
