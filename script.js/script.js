import { domRender, hideModal, modal, showModal} from "./ui/loader.js";
import { getCoordsAddres } from "./utility/loaction.js";
import { renderMapForCurrentLocation, searchRenderMap} from "./utility/map.js";
import { sharePlaceUrl , sharePlaceUrlHandler} from "./utility/sharePlace.js";

const getCurrentLocationBtn= document.querySelector(".currentLocation-btn");
getCurrentLocationBtn.addEventListener('click', getCurrentLocation);

const searchLoaction  = document.querySelector(".searchLocation");
searchLoaction.addEventListener("submit",getCoordsFromAddress);

const shareBtn = document.querySelector("#share-btn");
shareBtn.addEventListener("click" , sharePlaceUrlHandler);

function getCurrentLocation(){
    modal('modal-template');
    navigator.geolocation.getCurrentPosition(success => {
        hideModal();
        const coords = {
            lat: Number(success.coords.latitude),
            lon: Number(success.coords.longitude)
        }
        console.log("I am running");
        console.log(coords)
        handleCallBackCoords(coords,renderMapForCurrentLocation);

        getCoordsAddres("india")
    }, error => {
        hideModal()
        alert("Couldn't Load location" + error);
    })
}

function handleCallBackCoords(coords , callback){
    callback(coords);
}

async function getCoordsFromAddress(event){
    event.preventDefault();
    const searchValue = document.querySelector("#search").value;
    if(!searchValue || searchValue.trim() === ""){
        alert("Invalid Input :(");
        return;
    }
    sharePlaceUrl(searchValue);
    
    try{
        modal('modal-template')
        const coordinates = await getCoordsAddres(searchValue);
        hideModal();
        handleCallBackCoords(coordinates,searchRenderMap);
        document.querySelector("#search").value = "";
    }catch(error){
        hideModal();
        console.log("Try searching again something went wrong" + error)
    }
}

domRender();