const city = document.querySelector('.city')

//object weather and functions
let weather = {
    "apiKey": "2249d81b6122512fb1443ffb0ab551c1",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector('.city').innerHTML = 'Weather in ' + name
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector('.description').innerText = description
        document.querySelector('#temp').innerText = temp + "°C"
        document.querySelector('.humidity').innerText = humidity + "%"
        document.querySelector('.windy').innerText = speed + "Km/h"
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')" 
    },
    //function search bar
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
}

//search adding 
document.querySelector('.search button').addEventListener('click', function(e){
    weather.search()
})

//enter key
document.querySelector('.search-bar').addEventListener('keyup', function(e){
    if(e.key === "Enter"){
        weather.search()
        document.querySelector('.search-bar').value = " "
    }
})


weather.fetchWeather('Denver')

//dark theme

const btnToggler = document.querySelector('#toggler')
const btnIcon = document.querySelector('#toggler-icon')
const container = document.querySelector('#contain')
const wind = document.querySelector('#wind')
const searchBar = document.querySelector('.search-bar')
const btnLook = document.querySelector('.btn-look')
const desc = document.querySelector('.description')

btnToggler.addEventListener('click', function(e){
    if(container.getAttribute('data-theme') != "dark") {
        container.setAttribute('data-theme', "dark")
        btnIcon.setAttribute('class', "fas fa-solid fa-sun")
        wind.setAttribute('style', 'color: orange;')
        city.style.color = "white";
        searchBar.style.background = "white"
        btnLook.style.background = "white"
        desc.style.color = "white"

        btnLook.addEventListener('mouseover', function(){
            btnLook.style.background = "rgb(201, 198, 198)"
        })

        btnLook.addEventListener('mouseleave', function(){
            btnLook.style.background = "white"
        })
    } else { 
        container.setAttribute('data-theme', "")
        btnIcon.setAttribute('class', 'fas fa-solid fa-moon')
        wind.setAttribute('style', 'color: #0f345fe3;')
        city.style.color = "black";
        searchBar.style.background = "#4747472b"
        btnLook.style.background = "#4747472b"
        desc.style.color = "black"

        btnLook.addEventListener('mouseover', function(){
            btnLook.style.background = "#4747472b"
        })

        btnLook.addEventListener('mouseleave', function(){
            btnLook.style.background = "rgb(201, 198, 198)"
        })
    }
})

