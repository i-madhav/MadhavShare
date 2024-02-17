export async function getCoordsAddres(address){
    console.log("i am running")
    const urlAddress = encodeURI(address);
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=AIzaSyAkwPFImiKBn47DYXqrnZvhdJIeMwlmmYk`);

    if(!response.ok){
        throw new Error("Failed to fetch the coords from the location");
    }

    const data = await response.json();
    const coordinates = data.results[0].geometry.location;
    return coordinates;
}
