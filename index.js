getDate();

const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "c0f84b5f5f1575a1f81e3c7340ce6ede"
}

const input = document.querySelector('#input');
input.addEventListener("keypress", enter);

//Только при нажатии на энтер будет работать функционал
function enter(e) {
    if (e.keyCode === 13) 
    getInfo(input.value);
}

//Асинхронная ф-ия - получаем доступ с API погоды
async function getInfo (city) {
    const res = await fetch(`${api.endpoint}weather?q=${city}&units=metric&appID=${api.key}`);
    const result = await res.json();
//Создаем новую фун-ю для отображения данных на старнице и параметр result обязательно прописываем, так как он сохраняет информацию
    displayResult(result);
    input.value = '';
}


//Ф-ия отвечает за отображение данных
function displayResult(result) {
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;

    //DATA
    getDate();

    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML = `Feels like: ${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector('#variation');
    variation.innerHTML = 'Min:' + ` ${Math.round(result.main.temp_min)}<span>°</span>` + ' Max: ' + `${Math.round(result.main.temp_max)}<span>°</span>`  
}

function getDate() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const now = new Date();

    let day = days[now.getDay()];
    let numberDay = now.getDate();
    let mounth = months[now.getMonth()];
    let year = now.getFullYear();
    
    let date = document.querySelector('#date');
    date.textContent = `${day}` + ` ${numberDay}` + ` ${mounth}` + ` ${year}`;
}

gsap.from('#header', 1, {
    y: -150,
    delay: 1
}) 

gsap.from('#city', 1, {
    opacity: 0,
    x: 50,
    delay: 1.7
}) 

gsap.from('#date', 1, {
    x: -50,
    opacity: 0,
    delay: 2.4
}) 

gsap.from('#temperature', 1, {
    opacity: 0,
    delay: 3.1,
    y:-50
}) 


gsap.from('#feelsLike', 1, {
    opacity: 0,
    delay: 3.1,
    y:50
}) 


gsap.from('#conditions', 1, {
    opacity: 0,
    delay: 3.1,
    y:-50
}) 

gsap.from('#variation', 1, {
    opacity: 0,
    delay: 3.1,
    y:50
}) 



