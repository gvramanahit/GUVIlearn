var request = new XMLHttpRequest();
var url_string = 'https://restcountries.eu/rest/v2/all';

request.open('GET',url_string , true);

request.onload = function() {

var data = JSON.parse(this.response);

//function to filter ASIAN countries.
filterAsia(data);

//function to filter the countries with less than 2L population
filterPopulation(data);

//function to bump up the current population by 1L
mapBumpup(data);

//function to convert all the countries name to capital
mapConvertUC(data);

//function to print all the countries, capital and flag.
printDetails(data);

//function to print the total population of the countries.
printTotPopulation(data);

//function to print the total population of the Asian countries.
printAsiaPopulation(data);

} 
request.send();

function filterAsia(data){
	console.log(data.filter( (element) => element.region === "Asia"));
}

function filterPopulation(data){
	console.log(data.filter( (element) => element.population < 200000));
}

function mapBumpup(data){
	console.log(data.map( (element) => {
		element["population"] += 100000;
		return element;}));
}


function mapConvertUC(data){
	console.log(data.map( (element) => {
		element["name"] = element.name.toUpperCase();
		return element;}));
}

function printDetails(data){
	data.forEach( (element) => console.log(element.name + "," + element.capital + "," + element.flag));
}

function printTotPopulation(data){
	console.log(data.reduce( (population,element) => population += element["population"],0));
}

function printAsiaPopulation(data){
	console.log(data.filter( (element) => element.region === "Asia").reduce( (population,element) => population += element["population"],0));
}
