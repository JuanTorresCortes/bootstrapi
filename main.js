
let dogBut = document.querySelector("#dog-But").addEventListener("click", findDogPic);
let pic = document.querySelector("#dog-pic");
pic.src = 'img/th.jpeg';

function findDogPic(){
    fetch("https://dog.ceo/api/breeds/image/random")
.then( function(response){
return (response.json());
})
.then(function(data){
    pic.src = data.message;
})
}


let userInput = document.querySelector("#user-Input");
let submitBut = document.querySelector("#weather-But").addEventListener("click", getWeather);
let apiContainer = document.querySelector("#api-Content");
let weather = document.createElement("span")

function getWeather(){
    let city = userInput.value;
    fetch(encodeURI(`https://goweather.herokuapp.com/weather/${city}`))
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let description = data.description;
        let temp = data.temperature;
        let wind = data.wind;
        weather.innerText = `Today in ${city} you can expect ${description} with a temperature of ${temp} and winds of ${wind}`;
        apiContainer.append(weather);
        city = "";
        userInput.value = "";
    })
}

