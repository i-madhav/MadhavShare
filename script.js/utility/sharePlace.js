import { getCoordsAddres } from "./loaction.js";

export async function sharePlaceUrl(address){
    try{
        console.log("I am rnning ")
        const coordinates = await getCoordsAddres(address);
        const shareBtn = document.querySelector("#share-btn");
        shareBtn.disabled = false;

        const shareInput = document.querySelector("#share-link");
        shareInput.value = `${location.origin}/sharePlace/sharePlace.html?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;

    }catch(error){
        console.error("Enable to make url");
    }
}

export function sharePlaceUrlHandler() { 
    const shareInput = document.querySelector("#share-link");
    shareInput.select();

    navigator.clipboard.writeText(shareInput.value)
    .then(() =>{
        alert("Url copied to the clipboard :)");
    })
    .catch(err =>{
        alert("Enable to copy url to the clipboard :( " + err)
    })
 }