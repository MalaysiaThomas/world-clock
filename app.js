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
// City buttons
let citybuttons = document.querySelectorAll("button")
//Select element
let selectElement = document.getElementById("selectCity")

// Insert desired city names into listed city slots
    let userLocation = moment.tz.guess();
    let userLocationFormatted = userLocation.replace("_", " ");

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
    if (selectedCityName.innerHTML === "Locating...") {
        selectedCityName.innerHTML = userLocationFormatted
    }
}
formatLocatedCity()
setInterval(formatLocatedCity, 1000);


let currentCity = "default";
let interval;
function locatedCityTimeDisplay() {
    if (currentCity === "default") {
        selectedCityTime.innerHTML = moment().format("hh:mm:ss A");
        selectedCityDate.innerHTML = moment().format("dddd, MMMM Do YYYY");
    }
}
locatedCityTimeDisplay()
interval = setInterval(locatedCityTimeDisplay, 1000)

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
    let timeFormat = "hh:mm [<small>] A [</small>]"
    rowOneTime.innerHTML = moment.tz(`${rowOne}`).format(`${timeFormat}`);
    rowTwoTime.innerHTML = moment.tz(`${rowTwo}`).format(`${timeFormat}`);
    rowThreeTime.innerHTML = moment.tz(`${rowThree}`).format(`${timeFormat}`);
    rowFourTime.innerHTML = moment.tz(`${rowFour}`).format(`${timeFormat}`);
    rowFiveTime.innerHTML = moment.tz(`${rowFive}`).format(`${timeFormat}`);
    rowSixTime.innerHTML = moment.tz(`${rowSix}`).format(`${timeFormat}`);

}
listedCityTimeDisplay()
setInterval(listedCityTimeDisplay, 1000)

// Update displayed city based on user selection from listed cities
function updateCityDisplay () {
    citybuttons.forEach(button => button.addEventListener("click", () => {
        clearInterval(interval);
        interval = setInterval(() => {
            
            switch(button.id) {
                    case "row-one-btn":
                        selectedCityName.innerHTML = rowOne.replace("_", " ")
                        selectedCityTime.innerHTML = moment().tz(`${rowOne}`).format("hh:mm:ss A");
                        selectedCityDate.innerHTML = moment().tz(`${rowOne}`).format("dddd, MMMM Do YYYY");
                        break;
                    case "row-two-btn": 
                        selectedCityName.innerHTML = rowTwo.replace("_", " ");
                        selectedCityTime.innerHTML = moment()
                          .tz(`${rowTwo}`)
                          .format("hh:mm:ss A");
                        selectedCityDate.innerHTML = moment()
                          .tz(`${rowTwo}`)
                          .format("dddd, MMMM Do YYYY");
                        break;
                    case "row-three-btn": 
                        selectedCityName.innerHTML = rowThree.replace("_", " ");
                        selectedCityTime.innerHTML = moment()
                          .tz(`${rowThree}`)
                          .format("hh:mm:ss A");
                        selectedCityDate.innerHTML = moment()
                          .tz(`${rowThree}`)
                          .format("dddd, MMMM Do YYYY");
                        break;
                    case "row-four-btn": 
                        selectedCityName.innerHTML = rowFour.replace("_", " ");
                        selectedCityTime.innerHTML = moment()
                          .tz(`${rowFour}`)
                          .format("hh:mm:ss A");
                        selectedCityDate.innerHTML = moment()
                          .tz(`${rowFour}`)
                          .format("dddd, MMMM Do YYYY");
                        break;
                    case "row-five-btn": 
                        selectedCityName.innerHTML = rowFive.replace("_", " ");
                        selectedCityTime.innerHTML = moment()
                          .tz(`${rowFive}`)
                          .format("hh:mm:ss A");
                        selectedCityDate.innerHTML = moment()
                          .tz(`${rowFive}`)
                          .format("dddd, MMMM Do YYYY");
                        break;
                    case "row-six-btn": 
                        selectedCityName.innerHTML = rowSix.replace("_", " ");
                        selectedCityTime.innerHTML = moment()
                          .tz(`${rowSix}`)
                          .format("hh:mm:ss A");
                        selectedCityDate.innerHTML = moment()
                          .tz(`${rowSix}`)
                          .format("dddd, MMMM Do YYYY");
                        break;
                }
        }, 1000);

    }))
}
updateCityDisplay()

// Load city selection from dropdown
let optionOne = selectElement[1].value
let optionTwo = selectElement[2].value
let optionThree = selectElement[3].value
let optionFour = selectElement[4].value
let optionFive = selectElement[5].value
let optionSix = selectElement[6].value
let optionSeven = selectElement[7].value
let optionEight = selectElement[8].value
let optionNine = selectElement[9].value


function loadCitySelection(event) {
    clearInterval(interval);
    setInterval(() => {
        switch(event.target.value) {
            case optionOne: 
                currentCity = "default"
                selectedCityName.innerHTML = userLocationFormatted;
                locatedCityTimeDisplay()
                break;
            case optionTwo: 
                selectedCityName.innerHTML = optionTwo.replace("_", " ");
                selectedCityTime.innerHTML = moment().tz(`${optionTwo}`).format("hh:mm:ss A");
                selectedCityDate.innerHTML = moment().tz(`${optionTwo}`).format("dddd, MMMM Do YYYY");
                break;
            case optionThree: 
                selectedCityName.innerHTML = optionThree.replace("_", " ");
                selectedCityTime.innerHTML = moment().tz(`${optionThree}`).format("hh:mm:ss A");
                selectedCityDate.innerHTML = moment().tz(`${optionThree}`).format("dddd, MMMM Do YYYY");
                break;
            case optionFour: 
                selectedCityName.innerHTML = optionFour.replace("_", " ");
                selectedCityTime.innerHTML = moment().tz(`${optionFour}`).format("hh:mm:ss A");
                selectedCityDate.innerHTML = moment().tz(`${optionFour}`).format("dddd, MMMM Do YYYY");
                break;
            case optionFive: 
                selectedCityName.innerHTML = optionFive.replace("_", " ");
                selectedCityTime.innerHTML = moment().tz(`${optionFive}`).format("hh:mm:ss A");
                selectedCityDate.innerHTML = moment().tz(`${optionFive}`).format("dddd, MMMM Do YYYY");
                break;
            case optionSix: 
                selectedCityName.innerHTML = optionSix.replace("_", " ");
                selectedCityTime.innerHTML = moment().tz(`${optionSix}`).format("hh:mm:ss A");
                selectedCityDate.innerHTML = moment().tz(`${optionSix}`).format("dddd, MMMM Do YYYY");
                break;
            case optionSeven: 
                selectedCityName.innerHTML = optionSeven.replace("_", " ");
                selectedCityTime.innerHTML = moment().tz(`${optionSeven}`).format("hh:mm:ss A");
                selectedCityDate.innerHTML = moment().tz(`${optionSeven}`).format("dddd, MMMM Do YYYY");
                break;
            case optionEight: 
                selectedCityName.innerHTML = optionEight.replace("_", " ");
                selectedCityTime.innerHTML = moment().tz(`${optionEight}`).format("hh:mm:ss A");
                selectedCityDate.innerHTML = moment().tz(`${optionEight}`).format("dddd, MMMM Do YYYY");
                break;
            case optionNine: 
                selectedCityName.innerHTML = optionNine.replace("_", " ");
                selectedCityTime.innerHTML = moment().tz(`${optionNine}`).format("hh:mm:ss A");
                selectedCityDate.innerHTML = moment().tz(`${optionNine}`).format("dddd, MMMM Do YYYY");
                break;
        }
    }, 1000);
}
selectElement.addEventListener("change", loadCitySelection)
