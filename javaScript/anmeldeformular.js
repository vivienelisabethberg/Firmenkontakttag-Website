/*
Evaluierung Anmeldeformular
Durch input-types in html findet teilweise schon eine Überprüfung statt
*/
const errorDiv = document.getElementById("error");
const form = document.getElementById("formId");

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
  const name = document.getElementById('firmenname')
  const logo = document.getElementById('logo')
  const standort = document.getElementById('standort')
  const strasse = document.getElementById('strasse')
  const hnummer = document.getElementById('hnummer')
  const plz = document.getElementById('plz')
  const stadt = document.getElementById('stadt')
  const email = document.getElementById('email')
  const homepage = document.getElementById('homepage')
  const nachricht_kurz = document.getElementById('nachricht-kurz')
  const nachricht_lang = document.getElementById('nachricht-lang')
  const url_bewerber = document.getElementById('url-bewerber')
  const email_bewerber = document.getElementById('email-bewerber')
  const tel = document.getElementById('tel')
  const infos = document.getElementById('infos')
  const files = document.getElementById('files')
  
  //Firmenname
  if (name.value === '') {
    errorMessages.push('Bitte einen Firmennamen eingeben.')    
  } else if (name.value.length > 200) {
    errorMessages.push('Der Firmenname darf maximal 200 Zeichen haben')        
  }

  //Logo
  validateLogo(logo, errorMessages)

  //Standort
  if (standort.value === '') {
    errorMessages.push('Bitte einen Standort angeben.')    
  } else if (standort.value.length > 300) {
    errorMessages.push('Der Standort darf maximal 300 Zeichen haben')        
  }

  //Strasse
  if (strasse.value === '') {
    errorMessages.push('Bitte eine Strasse angeben.')
  }

  //Hausnummer
  if (hnummer.value === '') {
    errorMessages.push('Bitte eine Hausnummer angeben')
  } else if (!isHnummer(hnummer.value)) {
    errorMessages.push('Bitte eine gültige Hausnummer angeben')
  }

  //PLZ
  if (plz.value === '') {
    errorMessages.push('Bitte eine Postleitzahl angeben.')    
  } else if (!isPLZ(plz.value)) {
    errorMessages.push('Bitte eine fünfstellige Postleitzahl angeben.')        
  }

  //Stadt
  if (stadt.value === '') {
    errorMessages.push('Bitte eine Stadt angeben.')    
  }

  //E-Mail
  if(email.value === ''){
    errorMessages.push('Bitte gebe Emailadresse an')
  }else if(!isEmail(email.value)){
    errorMessages.push('Bitte eine gültige Emailadresse eingeben.'); 
  }

  //Homepage
  if(homepage.value === ''){
    errorMessages.push('Bitte gebe eine Homepage an.'); 
  } else if (homepage.value.substr(0, 8) !== 'https://') {
    errorMessages.push('Bitte eine gültige Homepage angeben')
  }

  //Nachricht-kurz
  if(nachricht_kurz.value === ''){
    errorMessages.push('Bitte gebe eine Kurzbeschreibung an.'); 
  } else if( nachricht_kurz.value > 500){
    errorMessages.push('Der Text darf nicht länger als 500 Zeichen sein'); 
  }

  //Nachricht-lang
  if(nachricht_lang.value === ''){
    errorMessages.push('Bitte gebe eine Langbeschreibung an.'); 
  } else if( nachricht_lang.value > 2400){
    errorMessages.push('Der Text darf nicht länger als 2400 Zeichen sein'); 
  }

  //URL-bewerber
  if (url_bewerber.value.substr(0, 8) !== 'https://') {
    errorMessages.push('Bitte eine gültige Homepage angeben')
  }

  //Email-bewerber
  if(email_bewerber.value !== '' && !isEmail(email_bewerber.value)){
    errorMessages.push('Bitte eine gültige Emailadresse für deine Bewerber angeben'); 
  }

  //Telefonnumer
  if (tel.value !== '' && !isTelNummer(tel.value)) {
    errorMessages.push('Bitte eine gültige Telefonnummer angeben')
  }
  //text-infos
  if( infos.value > 2000){
    errorMessages.push('Der Info-Text für die Bewerber darf nicht länger als 2000 Zeichen sein'); 
  }

  //files
  validateFiles(files, errorMessages)
}

const isPLZ = (plz) => {
  console.log(plz)
  return String(plz)
    .match(/^([0-9]{5})$/)
}

const isHnummer = (hnummer) => {
  return String(hnummer)
    .match(/^[0-9]{1,}$/)
}

const isEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const isTelNummer = (tel) => {
  return String(tel)
    .match(/^[0-9\-\+]{9,15}$/)
}

const validateLogo = (logo, errorMessages) => {
  const validFileExt = ['.gif', '.jpg', '.png']

  if (logo.value === '') {
    errorMessages.push('Bitte ein Logo hochladen')
    return false
  }

  if (logo.type === 'file') {
    let filename = logo.value
    let valid = false
    validFileExt.forEach(currExt => {
      if (filename.substr(filename.length - currExt.length, currExt.length) === currExt) {
        valid = true
      }
      console.log(valid)
    })
    if (!valid) {
      errorMessages.push('Bitte das Logo als .gif, .jpg oder .png hochladen')
      return false
    }
  }

  return true
}

const validateFiles = (files, errorMessages) => {
  const validFileExt = '.pdf'

  for (let i = 0; i < files.files.length; i++) {
    console.log(files.files)
    let filename = files.files[i].name
    let valid = false
    console.log(filename)
    if (filename.substr(filename.length - validFileExt.length, validFileExt.length) === validFileExt) {
      valid = true
    }
    
    if (!valid) {
      errorMessages.push('Die Datei ' + filename + ' ist kein pdf')
    }
  }
}