const socket = io();
const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Map A2209"
}).addTo(map);

const markers = {};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        // Immediately center the map on your own location
        map.setView([latitude, longitude], 16);

        // Send location to server
        socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
        console.error("Error getting location:", error);
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    });
}

socket.on("recieve-location", (data) => {
    const { id, latitude, longitude } = data;

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map)
            .bindPopup(id === socket.id ? "You are here" : `User: ${id}`)
            .openPopup();
    }
});

socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
