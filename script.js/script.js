import { getCoordsAddres } from "./utility/loaction.js";
import { renderMapForCurrentLocation, searchRenderMap } from "./utility/map.js";

const getCurrentLocationBtn= document.querySelector(".currentLocation-btn");
getCurrentLocationBtn.addEventListener('click', getCurrentLocation);

const searchLoaction  = document.querySelector(".searchLocation");
searchLoaction.addEventListener("submit",getCoordsFromAddress);

function getCurrentLocation(){
    console.log("running");
    navigator.geolocation.getCurrentPosition(success => {
        const coords = {
            lat: Number(success.coords.latitude),
            lon: Number(success.coords.longitude)
        }
        console.log("I am running");
        console.log(coords)
        handleCallBackCoords(coords,renderMapForCurrentLocation);

        getCoordsAddres("india")
    }, error => {
        alert("Couldn't Load location" + error);
    })
}

function handleCallBackCoords(coords , callback){
    callback(coords);
}

async function getCoordsFromAddress(event){
    event.preventDefault();
    const searchValue = document.querySelector("#search").value;
    const coordinates = await getCoordsAddres(searchValue);
    
    handleCallBackCoords(coordinates,searchRenderMap);

    document.querySelector("#search").value = "";
}