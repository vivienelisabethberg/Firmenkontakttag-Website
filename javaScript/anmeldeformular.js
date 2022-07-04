//Evaluierung Anmeldeformular
const form = document.getElementById("formId");
const email = document.getElementById("email").value;
let errorMessages = [];

const errorDiv = document.getElementById("error"); 

form.addEventListener("submit", (e) =>{
  checkInputs(); 
  console.log(errorMessages); 
  if(errorMessages.length > 0){
    e.preventDefault();//lädt Seite nicht neu 
    errorDiv.innerHTML = errorMessages.join(", "); 
  }
}); 


function checkInputs(){
  if(email === ''){
    errorMessages.push('Bitte eine Emailadresse eingeben.'); 
  }
  if(email.match('/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/')){
    errorMessages.push('Bitte eine gültige Emailadresse eingeben.'); 
  }
}