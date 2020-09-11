let container = document.createElement('div');
container.setAttribute('class','container row');
document.body.append(container);

getData();

async function getData(){
    let data = await fetch('https://restcountries.eu/rest/v2/all');
    let data1 =  await data.json();
    for(i=0;i<data1.length;i++){
        processCards(data1[i]);
    }
}

function processCards(data){
    let div1 = document.createElement('div');
    div1.setAttribute('class','col-lg-4 col-md-6 col-sm-12');

    let div2 = document.createElement('div');
    div2.setAttribute('class','cardList card card-flex border mb-3 gradient1');

    let header = document.createElement('div');
    header.setAttribute('class','card-header headerList');
    header.innerHTML = data.name;  

    let img = document.createElement("img");
    img.setAttribute('class','image mt-3 mb-3 card-img-top');
    img.setAttribute("src", data.flag);

    let body = document.createElement("div");
    body.setAttribute('class','card-body bodyList');

    let capital = document.createElement("p");
    capital.innerHTML = "Capital : " + data.capital;

    let code = document.createElement("p");
    code.innerHTML = "Coutry Code : "+data.cioc;

    let region = document.createElement("p");
    region.innerHTML = "Region : "+data.region;

    let timezone = document.createElement("p");
    timezone.innerHTML = "TimeZone : "+data.timezones[0];

    let lat = document.createElement("p");
    lat.innerHTML = "Latitude : "+ data.latlng[0];

    let lan = document.createElement("p");
    lan.innerHTML = "Langitude : "+ data.latlng[1];

    let button = document.createElement("button");
    button.setAttribute('class','mt-3 mb-1');
    button.innerHTML = "Click for Weather";
    button.onclick = function()
    {
        getWeatherInfo(data,div2,header,body,img);
    };

    body.append(capital,code,region,lat,lan,timezone,button);
    div2.append(header,img,body)
    div1.append(div2)

    container.append(div1);
}

async function getWeatherInfo(data,card,header,body,img){
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+data.capital+'&appid=9eac29409308a8eb85a2002bac339568';
    let weath = await fetch(url);
    let dataa = await weath.json();
    showWeatherInfo(dataa,card,header,body,img);
}

function showWeatherInfo(data,card,header,body,image){
    card.removeChild(body);
    card.removeChild(header);
    card.removeChild(image);

    let nBody = document.createElement("div");
    nBody.setAttribute('class', 'card-body bodyList');

    let status = document.createElement("p");
    status.innerHTML = 'Status : '+data.weather[0].main;

    let temp = document.createElement("p");
    temp.innerHTML = 'Temperature : '+data.main.temp;

    let humidity = document.createElement("p");
    humidity.innerHTML = 'Humidity : '+data.main.humidity+'%';

    let pressure = document.createElement("p");
    pressure.innerHTML = 'Pressure : '+data.main.pressure;

    let button = document.createElement("button");
    button.setAttribute('class',"mt-2");
    button.innerHTML ="Return";
    button.onclick = function(){
        card.removeChild(nBody),
        card.append(header,image,body);
    };
    nBody.append(status,temp,humidity,pressure,button);
    card.append(header,image,nBody);

}