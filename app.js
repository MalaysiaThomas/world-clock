// Selected city information
let selectedCityName = document.getElementById("selected-city-name");
let selectedCityTime = document.getElementById("selected-city-current-time");
let selectedCityDate = document.getElementById("selected-city-date");


// Listed city name containers
let rowOneCity = document.getElementById("row-one-city-name")
let rowTwoCity = document.getElementById("row-two-city-name")
let rowThreeCity = document.getElementById("row-three-city-name")
let rowFourCity = document.getElementById("row-four-city-name")
let rowFiveCity = document.getElementById("row-five-city-name")
let rowSixCity = document.getElementById("row-six-city-name")

// Insert desired city names into listed city slots
rowOneCity.innerHTML = "New York"
rowTwoCity.innerHTML = "London"
rowThreeCity.innerHTML = "Paris"
rowFourCity.innerHTML = "Bangkok"
rowFiveCity.innerHTML = "Tokyo"
rowSixCity.innerHTML = "Sydney"

// Load users' location information as default selected city
function formatLocatedCityName () {
    let userLocation = moment.tz.guess()
    let userLocationFormatted = userLocation.replace("_", " ")
    if (selectedCityName.innerHTML === "Locating...") {
        selectedCityName.innerHTML = userLocationFormatted
        selectedCityTime.innerHTML = moment().format('hh:mm A')
        selectedCityDate.innerHTML = moment().format('dddd, MMMM Do YYYY');
    }
}
formatLocatedCityName()