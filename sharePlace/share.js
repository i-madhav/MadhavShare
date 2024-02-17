import { renderMapForCurrentLocation } from "../script.js/utility/map.js";

function loadAddress(coordinates , address){
    renderMapForCurrentLocation(coordinates);
    const title = document.querySelector(".header h1");
    title.textContent = address;
}

const url = new URL(location.href);
const queryParameter = url.searchParams;
const coords = {
    lat:+queryParameter.get('lat'),
    lon:+queryParameter.get('lng')
};

const address = queryParameter.get('address');

loadAddress(coords , address);