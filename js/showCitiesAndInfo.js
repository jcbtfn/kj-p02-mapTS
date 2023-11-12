var endpoint = 'https://gist.githubusercontent.com/jcbtfn/688cb35c398469b682168b5bd2513007/raw/61b087a27d8030ba78fdb615fdff04b42d69ee12/testcities.json';
var citiesList = document.querySelector('.cities-list');
var cities = [];
fetch(endpoint)
    .then(function (blob) { return blob.json(); })
    .then(function (data) { return cities.push.apply(cities, data); })
    .then(showCities);
function showCities() {
    var html = cities.map(function (city) {
        return "\n                <li>\n                    <span class=\"name\">".concat(city.name, "</span>\n                </li>\n                ");
    }).join('');
    citiesList.innerHTML = html;
    var allCitiesList = document.querySelectorAll('.name');
    allCitiesList.forEach(function (cityInTheList) {
        cityInTheList.addEventListener('click', showInfo);
    });
}
var citiesinfo = document.querySelector('.cities-info');
function showInfo(e) {
    var cityToShow = cities.find(function (cityInArray) { return cityInArray.name === e.target.textContent; });
    citiesinfo.innerHTML = "\n                            <li>\n                                <span><b>Name:</b> ".concat(cityToShow.name, "</span>\n                            </li>\n                            <li>\n                                <span><b>Country code:</b> ").concat(cityToShow.country, "</span>\n                            </li>\n                            <li>\n                                <span><b>Lat:</b> ").concat(cityToShow.lat, "</span>\n                            </li>\n                            <li>\n                                <span><b>Lng:</b> ").concat(cityToShow.lng, "</span>\n                            </li>\n                            ");
    position = { lat: parseFloat(cityToShow.lat), lng: parseFloat(cityToShow.lng) };
    initMap(position);
}
;
