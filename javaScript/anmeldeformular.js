//Evaluierung Anmeldeformular
const form = document.getElementById("formId");
const email = document.getElementById("email");

const errorDiv = document.getElementById("error");

form.addEventListener("submit", (e) =>{
  let errorMessages = [];
  checkInputs(errorMessages); 
  console.log(errorMessages);
  if(errorMessages.length > 0){
    e.preventDefault();//lädt Seite nicht neu 
    errorDiv.innerHTML = errorMessages.join(", "); 
  }
}); 


function checkInputs(errorMessages){
  if(email.value === ''){
    console.log(email.value)
    errorMessages.push('Bitte eine Emailadresse eingeben.'); 
  }else if(!isEmail(email.value)){
    console.log("email error")
    errorMessages.push('Bitte eine gültige Emailadresse eingeben.'); 
  } else {
    console.log("no email error")
  }
}

const isEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};