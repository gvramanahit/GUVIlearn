var request = new XMLHttpRequest();
var url_string = 'http://api.openweathermap.org/data/2.5/weather?id=1264527&appid=9eac29409308a8eb85a2002bac339568';

request.open('GET',url_string , true);

request.send();

request.onload = function() {

var data = JSON.parse(this.response);
console.log(data);
} 

