document.addEventListener("DOMContentLoaded", () =>{
  const equal = document.getElementById("equal")
let display = document.getElementById("display")
const clear = document.getElementById("ac")
const numbers  = document.querySelectorAll(".num");
const percentile = document.getElementById("percentile")

 let calculateddata = "";


numbers.forEach(num => {
  num.addEventListener("click", (e)=>{
let value = e.target.innerText ;
calculateddata +=  value;
display.innerText = calculateddata ;
  })
})
 

percentile.addEventListener("click", () =>{
  let data = eval(calculateddata)
  let finalvalue = data/100;
  display.innerText = finalvalue
  calculateddata = finalvalue;
})

equal.addEventListener("click", ()=>{
  let data = eval(calculateddata);
  display.innerText = data ;
  calculateddata = ""
  console.log(data)
})

clear.addEventListener('click', ()=> {
  display.innerText = "";
  calculateddata = "" 
})

})