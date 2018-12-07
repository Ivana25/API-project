function initMap() {
    geolocation()
} 

function locality(place){
    let locality = {
        lat: place.coords.latitude, lng: place.coords.longitude};
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 2,
            center: locality,
            
        })
let marker = new google.maps.Marker({position: locality, map: map, title: "googleApi"})
        
    }
function geolocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locality);
    } else {
        alert("Geolocation is not supported by this browser.")
    }
 }
