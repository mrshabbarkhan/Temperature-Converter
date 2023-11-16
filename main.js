const celciusfeild = document.querySelector("#Celcius");
const degree = document.querySelector("#degree");
const convertbtn = document.querySelector("#btn");
const temptype = document.querySelector("#temptype");


window.addEventListener("load", (e) => {
  degree.value = "";
  celciusfeild.innerHTML = "";
});

convertbtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertC()

});

function convertC(){
    let input = degree.value;
    
   if (degree.value === "" ) {
   alert("Enter any value")
   }
   else{
    setTimeout (() =>{
      
      if (temptype.value === "fahrenheit") {
        const fahrenheitTocelcius = (input -32) *  (5/9)
        celciusfeild.innerHTML = `${fahrenheitTocelcius.toFixed(3)}&deg;c`;
    }
  
   else if (temptype.value === "kelvin") {
        const kelvinTocelcius = input -273.15;
        celciusfeild.innerHTML = `${kelvinTocelcius.toFixed(3)}&deg;c`;
    }
      },500)
   }
    
}


