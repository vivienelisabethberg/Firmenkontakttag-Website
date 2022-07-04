//fetch json data
fetch("../javaScript/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let information = data.information;
    // console.log(information); 

    let unternehmensnameArray = document.getElementsByClassName("unternehmensname"); 
    // console.log(unternehmensnameArray); 
    let firmenstandorteArray = document.getElementsByClassName("firmenstandorte"); 
    let webseitenURLArray = document.getElementsByClassName("webseitenURL");
    let infotextArray = document.getElementsByClassName("text");

    for(let i = 0; i < information.length; i++){
      unternehmensnameArray[i].innerHTML = information[i].unternehmensname;  
      firmenstandorteArray[i].innerHTML = information[i].firmenstandorte; 
      webseitenURLArray[i].innerHTML = information[i].webseitenURL; 
      infotextArray[i].innerHTML = information[i].infotext; 
    }
  });

//search word in informationtext
const searchInput = document.getElementById("searchbar"); 
const cards = document.getElementsByClassName("card"); 
console.log(cards); 


searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase(); 
  console.log(value);
  
  for(let i = 0; i < cards.length; i++){
    let isVisible = cards[i].textContent.toLowerCase().includes(value); 
    console.log(cards[i].textContent); 
    if(!isVisible){
      cards[i].style.display = "none"; 
    }else{
      cards[i].style.display = "block";
    }
    // cards[i].classList.toggle("hide", !isVisible); 
    // console.log(isVisible); 
  }
}); 

