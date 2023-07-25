const apiKey='cb78f79a4e356d4e9a7a84c08f965411';
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox=document.querySelector(".entry");
const searchBtn=document.querySelector(".btn");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response= await fetch(apiUrl +city+`&appid=${apiKey}`);

    let data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed +"Km/h";

if(data.weather[0].main=="Clouds"){
weatherIcon.setAttribute('src','images/clouds.png');
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.setAttribute('src','images/clear.png');

}
else if(data.weather[0].main=="Drizzle"){
    weatherIcon.setAttribute('src','images/drizzle.png');

}
else if(data.weather[0].main=="Rain"){
    weatherIcon.setAttribute('src','images/rain.png');

}
else if(data.weather[0].main=="Mist"){
    weatherIcon.setAttribute('src','images/mist.png');

}
else if(data.weather[0].main=="Snow"){
    weatherIcon.setAttribute('src','images/snow.png');

}

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})
