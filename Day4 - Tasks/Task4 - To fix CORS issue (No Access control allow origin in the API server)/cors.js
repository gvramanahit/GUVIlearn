var request = new XMLHttpRequest();
var url_string = 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';

request.open('GET',url_string , true);

request.onload = function() {

var data = JSON.parse(this.response);
console.log(data);
} 

request.send();