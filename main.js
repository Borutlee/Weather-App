let apikey = "fb44e4f917f9ab1a6047ed9f7944bdcc";
let search = document.getElementById('city');
let day1 = document.getElementById('d1');
let date1 = document.getElementById('da1');

let day2 = document.getElementById('d2');

let day3 = document.getElementById('d3');

let column1 = document.getElementsByClassName('c4')[0];
let column2 = document.getElementsByClassName('c5')[0];
let column3 = document.getElementsByClassName('c6')[0];
let btn = document.getElementById('searchBtn');

function weatherapi() {
    btn.addEventListener('click', () => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search.value}&appid=${apikey}`)
        .then(respone => respone.json())
        .then(data => {    

        console.log(data)   
        console.log(data.list[0])

        let maintemp = data.list[0].main.temp;
        let celsius  = Math.round(maintemp - 273.15);
        let currenttemp = document.createElement('span');
        currenttemp.className = 'current';

        let icon = document.createElement('img');
        let iconcode = data.list[0].weather[0].icon;
        let description =  document.createElement('span');
        let title = data.list[0].weather[0].description;
        
        description.textContent = `/ ${title}`;
        description.className = 'title';
        icon.src = `https://openweathermap.org/img/wn/${iconcode}@2x.png`;
        icon.alt = data.list[0].weather[0].description;
        icon.title = data.list[0].weather[0].description;

        let feelslike = document.createElement('span');
        feelslike.className = 'feelslike';
        let feelslikedata = data.list[0].main.feels_like;
        feelslike.textContent = `Feels Like ${Math.round(feelslikedata - 273.15)}℃`

        date1.textContent = '';
        date1.textContent = data.list[0].dt_txt.slice(0, 10);

        column1.textContent = '';
        currenttemp.textContent = `${celsius}℃`;
        column1.appendChild(currenttemp);
        column1.appendChild(icon);
        column1.appendChild(feelslike);
        column1.appendChild(description);
        tomorrow(data);
        aftertomorrow(data);
        })
        .catch(error => console.error("Error:", error))
    })
    
}
function tomorrow(data){
    let maintemp = data.list[8].main.temp;
    let celsius  = Math.round(maintemp - 273.15);
    let currenttemp = document.createElement('span');
    currenttemp.className = 'current';

    let icon = document.createElement('img');
    let iconcode = data.list[8].weather[0].icon;
    let description =  document.createElement('span');
    let title = data.list[8].weather[0].description;
    
    description.textContent = `/ ${title}`;
    description.className = 'title';
    icon.src = `https://openweathermap.org/img/wn/${iconcode}@2x.png`;
    icon.alt = data.list[8].weather[0].description;
    icon.title = data.list[8].weather[0].description;

    // let feelslike = document.createElement('span');
    // feelslike.className = 'feelslike';
    // let feelslikedata = data.list[8].main.feels_like;
    // feelslike.textContent = `Feels Like ${Math.round(feelslikedata - 273.15)}℃`

    date1.textContent = '';
    date1.textContent = data.list[8].dt_txt.slice(0, 10);

    column2.textContent = '';
    currenttemp.textContent = `${celsius}℃`;
    column2.appendChild(currenttemp);
    column2.appendChild(icon);
//     column2.appendChild(feelslike);
    column2.appendChild(description);

}
function aftertomorrow(data){
    let maintemp = data.list[16].main.temp;
    let celsius  = Math.round(maintemp - 273.15);
    let currenttemp = document.createElement('span');
    currenttemp.className = 'current';

    let icon = document.createElement('img');
    let iconcode = data.list[16].weather[0].icon;
    let description =  document.createElement('span');
    let title = data.list[16].weather[0].description;
    
    description.textContent = `/ ${title}`;
    description.className = 'title';
    icon.src = `https://openweathermap.org/img/wn/${iconcode}@2x.png`;
    icon.alt = data.list[16].weather[0].description;
    icon.title = data.list[16].weather[0].description;

    // let feelslike = document.createElement('span');
    // feelslike.className = 'feelslike';
    // let feelslikedata = data.list[16].main.feels_like;
    // feelslike.textContent = `Feels Like ${Math.round(feelslikedata - 273.15)}℃`

    // date1.textContent = '';
    // date1.textContent = data.list[16].dt_txt.slice(0, 10);

    column3.textContent = '';
    currenttemp.textContent = `${celsius}℃`;
    column3.appendChild(currenttemp);
    column3.appendChild(icon);
    // column3.appendChild(feelslike);
    column3.appendChild(description);

}



weatherapi();