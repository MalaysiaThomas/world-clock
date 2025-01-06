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
// Listed city date containers
let rowOneDate = document.getElementById("row-one-date");
let rowTwoDate = document.getElementById("row-two-date");
let rowThreeDate = document.getElementById("row-three-date");
let rowFourDate = document.getElementById("row-four-date");
let rowFiveDate = document.getElementById("row-five-date");
let rowSixDate = document.getElementById("row-six-date");
//Listed city month containers
let rowOneMonth = document.getElementById("row-one-month");
let rowTwoMonth = document.getElementById("row-two-month");
let rowThreeMonth = document.getElementById("row-three-month");
let rowFourMonth = document.getElementById("row-four-month");
let rowFiveMonth = document.getElementById("row-five-month");
let rowSixMonth = document.getElementById("row-six-month");
//Listed city day containers
let rowOneDay = document.getElementById("row-one-day");
let rowTwoDay = document.getElementById("row-two-day");
let rowThreeDay = document.getElementById("row-three-day");
let rowFourDay = document.getElementById("row-four-day");
let rowFiveDay = document.getElementById("row-five-day");
let rowSixDay = document.getElementById("row-six-day");
// Listed city time containers
let rowOneTime = document.getElementById("row-one-time");
let rowTwoTime = document.getElementById("row-two-time");
let rowThreeTime = document.getElementById("row-three-time");
let rowFourTime = document.getElementById("row-four-time");
let rowFiveTime = document.getElementById("row-five-time");
let rowSixTime = document.getElementById("row-six-time");
// Listed city time designation containers
let rowOneDesignation = document.getElementById("row-one-time-designation");
let rowTwoDesignation = document.getElementById("row-two-time-designation");
let rowThreeDesignation = document.getElementById("row-three-time-designation");
let rowFourDesignation = document.getElementById("row-four-time-designation");
let rowFiveDesignation = document.getElementById("row-five-time-designation");
let rowSixDesignation = document.getElementById("row-six-time-designation");

// Insert desired city names into listed city slots
    let rowOne = "America/New_York"
    rowOneCity.innerHTML = "New York"
    
    let rowTwo = "Europe/London"
    rowTwoCity.innerHTML = "London"
    
    let rowThree = "Europe/Paris"
    rowThreeCity.innerHTML = "Paris"
    
    let rowFour = "Asia/Bangkok"
    rowFourCity.innerHTML = "Bangkok"
    
    let rowFive = "Asia/Tokyo"
    rowFiveCity.innerHTML = "Tokyo"
    
    let rowSix = "Australia/Sydney"
    rowSixCity.innerHTML = "Sydney"

// Load users' location information as default selected city
function formatLocatedCity () {
    let userLocation = moment.tz.guess()
    let userLocationFormatted = userLocation.replace("_", " ")
    if (selectedCityName.innerHTML === "Locating...") {
        selectedCityName.innerHTML = userLocationFormatted
    }
}
formatLocatedCity()
setInterval(formatLocatedCity, 1000);

function locatedCityTimeDisplay() {
    selectedCityTime.innerHTML = moment().format("hh:mm:ss A");
    selectedCityDate.innerHTML = moment().format("dddd, MMMM Do YYYY");
}
locatedCityTimeDisplay()
setInterval(locatedCityTimeDisplay, 1000)

// Load listed city information
function listedCityDateDisplay() {
    rowOneDate.innerHTML = moment.tz(`${rowOne}`).format('DD');
    rowTwoDate.innerHTML = moment.tz(`${rowTwo}`).format('DD');
    rowThreeDate.innerHTML = moment.tz(`${rowThree}`).format('DD');
    rowFourDate.innerHTML = moment.tz(`${rowFour}`).format('DD');
    rowFiveDate.innerHTML = moment.tz(`${rowFive}`).format('DD');
    rowSixDate.innerHTML = moment.tz(`${rowSix}`).format('DD');
}
listedCityDateDisplay()
setInterval(listedCityDateDisplay, 1000)

function listedCityMonthDisplay() {
    rowOneMonth.innerHTML = moment.tz(`${rowOne}`).format('MMM')
    rowTwoMonth.innerHTML = moment.tz(`${rowTwo}`).format('MMM')
    rowThreeMonth.innerHTML = moment.tz(`${rowThree}`).format('MMM')
    rowFourMonth.innerHTML = moment.tz(`${rowFour}`).format('MMM')
    rowFiveMonth.innerHTML = moment.tz(`${rowFive}`).format('MMM')
    rowSixMonth.innerHTML = moment.tz(`${rowSix}`).format('MMM')
}
listedCityDateDisplay()
setInterval(listedCityMonthDisplay, 1000)

function listedCityDayDisplay() {
    rowOneDay.innerHTML = moment.tz(`${rowOne}`).format('ddd')
    rowTwoDay.innerHTML = moment.tz(`${rowTwo}`).format('ddd')
    rowThreeDay.innerHTML = moment.tz(`${rowThree}`).format('ddd')
    rowFourDay.innerHTML = moment.tz(`${rowFour}`).format('ddd')
    rowFiveDay.innerHTML = moment.tz(`${rowFive}`).format('ddd')
    rowSixDay.innerHTML = moment.tz(`${rowSix}`).format('ddd')
}
listedCityDateDisplay()
setInterval(listedCityDayDisplay, 1000)

function listedCityTimeDisplay() {
    let timeFormat = "hh:mm A"
    rowOneTime.innerHTML = moment.tz(`${rowOne}`).format(`${timeFormat}`);
    rowTwoTime.innerHTML = moment.tz(`${rowTwo}`).format(`${timeFormat}`);
    rowThreeTime.innerHTML = moment.tz(`${rowThree}`).format(`${timeFormat}`);
    rowFourTime.innerHTML = moment.tz(`${rowFour}`).format(`${timeFormat}`);
    rowFiveTime.innerHTML = moment.tz(`${rowFive}`).format(`${timeFormat}`);
    rowSixTime.innerHTML = moment.tz(`${rowSix}`).format(`${timeFormat}`);

}
listedCityTimeDisplay()
setInterval(listedCityTimeDisplay, 1000)
