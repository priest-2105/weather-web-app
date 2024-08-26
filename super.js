









const Apikey = "a2c1d912d788951a8bc471cf0c1be1b9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =  document.querySelector(".search input")
const searchBtn =  document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather (city){

    const responnse = await fetch(apiUrl + city + `&appid=${Apikey}`);
    var data = await responnse.json();

    if(responnse.status == 404 ){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }else{

    document.querySelector('.temp').textContent = `${data.main.temp}°C `;
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.humidity').textContent = `${data.main.humidity}%`;
    document.querySelector('.wind').textContent = `${data.wind.speed} K / HR`;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
            

    }

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})
checkWeather()














































