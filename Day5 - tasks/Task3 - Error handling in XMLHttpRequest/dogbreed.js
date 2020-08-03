var request = new XMLHttpRequest();
var url_string = 'https://dog.ceo/api/breeds/list/all';

request.open('GET',url_string , true);

request.onload = function() {
   var data = JSON.parse(this.response);
   console.log(data);
} 

request.send();

//Error Handling
request.onerror = function() {
   alert('Request failed');
}