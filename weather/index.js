
const apikey = "c6e97b819833790f4f2f02022f5a7f5d";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputCity = document.querySelector(".country input")
const btn = document.querySelector(".country .btn");
const weatherIcon = document.querySelector(".icon");
const weatherPara = document.querySelector(".weather p");
const error = document.querySelector(".error");



async function checkWeather(city){
  const response = await fetch(apiURL + city + `&appid=${apikey}`);
  
  if(response.status == 404){
     error.style.display = "block";
  }
  else{

  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  

  if(data.weather[0].main == "Mist"){
    weatherIcon.src = "mist.png";
    weatherPara.innerHTML = data.weather[0].main;
  }
  else if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "clouds.png";
    weatherPara.innerHTML = data.weather[0].main;
  }
  else if(data.weather[0].main == "Dizzle"){
    weatherIcon.src = "dizzle.png";
    weatherPara.innerHTML = data.weather[0].main;
  }
  else if(data.weather[0].main == "Haze"){
    weatherIcon.src = "fog.png";
    weatherPara.innerHTML = data.weather[0].main
  }
  
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rain.png";
    weatherPara.innerHTML = data.weather[0].main
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "Snow.png";
    weatherPara.innerHTML = data.weather[0].main
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "Clear.png";
    weatherPara.innerHTML = data.weather[0].main
  }
  error.style.display = "none";
  inputCity.value ="";
  
}
}

btn.addEventListener("click",()=>{
  checkWeather(inputCity.value);
 
});

 
