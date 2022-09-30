var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(searchCapital){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCapital}&appid=f0cc09ce54d1aa1300db11a8614178e8`
    
    let data = await fetch(apiUrl).then(res=> res.json())
    if(data.cod == 200){
        content.classList.remove('hide')
        console.log(data);
        city.innerText = data.name;
        country.innerText = data.sys.country;
        value.innerText = Math.round(data.main.temp - 273.15)
        visibility.innerText = data.visibility + ' m';
        wind.innerText = data.wind.speed + ' m/s';
        sun.innerText = data.main.humidity;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('Vi')

        body.setAttribute('class', 'hot')
        if(value.innerText > 25){
            body.setAttribute('class', 'hot')
        } else{
            body.setAttribute('class', 'cold')
        }
    } else{
        content.classList.add('hide')
    }
}

search.addEventListener('keydown', function(e){
    if(e.code == 'Enter'){
    let searchCapital = search.value.trim()
        changeWeatherUI(searchCapital)
    }
})
