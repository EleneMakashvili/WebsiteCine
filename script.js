/* =========================
   BUTTON FUNCTIONS
========================= */

function watchTrailer() {
    alert("🎬 Trailer coming soon!");
}


function showInfo() {
    alert(
        "THE LAST HORIZON\n\n" +
        "Genre: Action / Sci-Fi\n" +
        "Year: 2026\n" +
        "Rating: ⭐ 8.7/10\n\n" +
        "A mysterious journey across a forgotten world."
    );
}


function movieDetails(movieName) {
    alert(
        "🎬 " + movieName +
        "\n\nMovie information coming soon!"
    );
}


function showAllMovies() {
    alert("More movies will be added soon!");
}


function showSearch() {

    let movie = prompt("🔍 What movie are you looking for?");

    if (movie) {
        alert("Searching for: " + movie);
    }
}


/* =========================
   MAP
========================= */

// Create map
const map = L.map("map").setView([41.7151, 44.8271], 5);


// Add map tiles
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            '&copy; OpenStreetMap contributors'
    }
).addTo(map);


/* =========================
   FILMING LOCATIONS
========================= */

// Tbilisi
L.marker([41.7151, 44.8271])
    .addTo(map)
    .bindPopup(
        "<b>🎬 Tbilisi</b><br>" +
        "Filming location"
    );


// London
L.marker([51.5074, -0.1278])
    .addTo(map)
    .bindPopup(
        "<b>🎬 London</b><br>" +
        "Filming location"
    );


// New York
L.marker([40.7128, -74.0060])
    .addTo(map)
    .bindPopup(
        "<b>🎬 New York</b><br>" +
        "Filming location"
    );


// Tokyo
L.marker([35.6762, 139.6503])
    .addTo(map)
    .bindPopup(
        "<b>🎬 Tokyo</b><br>" +
        "Filming location"
    );


// Paris
L.marker([48.8566, 2.3522])
    .addTo(map)
    .bindPopup(
        "<b>🎬 Paris</b><br>" +
        "Filming location"
    );
