export function renderMapForCurrentLocation(coord) {
    console.log("I am running")
    if (!google.maps) {
        alert("Could'nt load map")
        return;
    }

    let coordinates = new google.maps.LatLng(coord.lat, coord.lon); //core functionality where you create a new instance of the LatLng object from the Google Maps JavaScript API

    const maps = new google.maps.Map(document.querySelector(".map"), { center: coordinates, zoom: 16 });

    new google.maps.Marker({
        position:coordinates,
        map:maps
    })
}

export function searchRenderMap(coords){
    console.log(coords);
    if(!coords){
        throw new Error("Invalid Coordinates");
    }

    if( typeof !coords.lat === "number" || typeof !coords.lng === "number" || isNaN(coords.lat) || isNaN(coords.lng)){
        console.error("Invalid Input/Coordinates" + coords);
    }

    let coordinates = new google.maps.LatLng(Number(coords.lat) , Number(coords.lng));

    const maps = new google.maps.Map(document.querySelector(".map") , {center:coordinates , zoom:16});

    new google.maps.Marker({
        position:coordinates,
        map:maps,
        animation: google.maps.Animation.DROP 
    })
}

