document.addEventListener("DOMContentLoaded", () =>{
    const cityinput = document.getElementById("city")
    const getweather  = document.getElementById("getwe")
    const weatherinfo = document.getElementById("weather-info")
    const cityname = document.getElementById("city-name")
    const temperature  = document.getElementById("temp")
    const description  = document.getElementById("description")
    const errormessage = document.getElementById("error")
 const myapi = "e6b71c4729f21cc159166acf0872245c"
    getweather.addEventListener("click", async () =>{
        const cityvalue = cityinput.value.trim();

        if(!cityvalue){
            weatherinfo.classList.remove("hidden")
           description.textContent = "Please Enter a city"
           return ;
        }
        try {          
          let weatherdata =  await  fetchweatherdata(cityvalue);
            displayweatherdata(weatherdata);

        } catch (error) {
            displayerror();
        }
    })

   async  function fetchweatherdata(city){
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myapi}&units=metric`
 let response = await  fetch(url);
 let data =  await response.json()
 if(data.cod != 200) {
    throw new error("data.message")
 }
 return data ;
    }

    function displayweatherdata(weatherdata){
        console.log(weatherdata)
const {name , main , weather }= weatherdata ;
cityname.textContent = name;
temperature.textContent = `Temperature : ${main.temp}`
description.textContent = `${weather[0].description}`
 weatherinfo.classList.remove("hidden")
errormessage.classList.add("hidden")
    }
    
    function displayerror(){
weatherinfo.classList.add("hidden")
errormessage.classList.remove("hidden")
    }
})