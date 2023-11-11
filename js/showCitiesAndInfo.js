// export {};
var endpoint = 'https://gist.githubusercontent.com/jcbtfn/688cb35c398469b682168b5bd2513007/raw/61b087a27d8030ba78fdb615fdff04b42d69ee12/testcities.json';
var citiesList = document.querySelector('.cities-list');
var cities = [];
fetch(endpoint)
    .then(function (blob) { return blob.json(); })
    .then(function (data) { return cities.push.apply(cities, data); })
    .then(showCities);
function showCities() {
    console.log(cities);
    console.log("showCities");
}
// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...(data as City[])));
//const citiesList = document.querySelector('.cities-list');
// fetch(endpoint)
//     .then(function (response) { return response.json(); })
//     .then(function (data) { return cities.push.apply(cities, data); })
//     .then(showCities);
