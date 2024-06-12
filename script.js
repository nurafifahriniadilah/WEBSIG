document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-5.450000, 105.266670], 10); // Set the coordinates to Lampung

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});