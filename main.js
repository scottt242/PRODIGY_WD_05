let city=document.querySelector(".weather h1")
let img=document.querySelector(".weather img")
let t=document.querySelector(".weather h2")
let temp=document.querySelector(".weather .temp h2")
let humidity=document.querySelector(".weather .humidity h2")
let api="https://api.openweathermap.org/data/2.5/weather?q="
let apiKey="&appid=3e69da46f05f026f9ee6e97cbf48847d";

async function fetchWeather(apiKey, api){
    let name=document.querySelector(".search input").value
    let response=await fetch(api+name+apiKey)
    let data=await response.json()
    console.log(name)
    console.log(data)

    city.innerHTML=data.name
    img.src=`./images/${data.weather[0].main}.png`
    t.innerHTML=Math.round(data.main.temp-273)+"c"
    temp.innerHTML=data.main.humidity+"%"
    humidity.innerHTML=data.wind.speed+"km/h"
}
document.querySelector(".search button").onclick=()=>{
fetchWeather(apiKey,api)
}
document.querySelector(".search input").addEventListener("keydown", (event) => {
if (event.key === "Enter") {
fetchWeather(apiKey,api)
}
}
)