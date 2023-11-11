// export {};
const endpoint: string = 'https://gist.githubusercontent.com/jcbtfn/688cb35c398469b682168b5bd2513007/raw/61b087a27d8030ba78fdb615fdff04b42d69ee12/testcities.json';

const citiesList = document.querySelector('.cities-list');

interface City{
    country: string;
    name: string;
    lat: string;
    lng: string;
}

const cities: City[] = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...(data as City[])))
    .then(showCities)

function showCities() {
    console.log(cities);
    console.log("showCities");
}

