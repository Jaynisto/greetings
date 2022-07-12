const usersName = document.querySelector(".personsName");
const clearingButton = document.querySelector(".clearButton");
const numberOfTimes = document.querySelector(".count");
const engRadio = document.querySelector(".englishRadio");
const zuluRadio = document.querySelector(".zuluRadio");
const xhosaRadio = document.querySelector(".xhosaRadio");
const greetingButton = document.querySelector(".greetButton");
const displayGreet = document.querySelector(".greetings");

let language = null;
if(localStorage.getItem("userNamesArray")){
    var userNamesArray = JSON.parse(localStorage.getItem("userNamesArray"));
}
let greet = GreetingPeople(userNamesArray);
numberOfTimes.innerHTML = greet.userNamesArray.length;
engRadio.addEventListener("click",()=>{
    language = "english";
});
zuluRadio.addEventListener("click",()=>{
    language = "zulu"; 
});
xhosaRadio.addEventListener("click",()=>{
    language = "xhosa";  
}); 
clearingButton.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
    numberOfTimes.innerHTML = greet.userNamesArray.length;
});
greetingButton.addEventListener("click",()=>{
    displayGreet.innerHTML = greet.greetingUsers(usersName.value, language);
    greet.insertedName(usersName.value, language);
    numberOfTimes.innerHTML = greet.userNamesArray.length;
    localStorage.setItem("userNamesArray",JSON.stringify(greet.userNamesArray));    
});
