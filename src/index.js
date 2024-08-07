let honolulu = document.querySelector("#honoluluDate");
honolulu.innerHTML = moment().tz("Pacific/Honolulu").format("ddd, MMMM D, YYYY");

let heidelberg = document.querySelector("#heidelbergDate");
heidelberg.innerHTML = moment().tz("Europe/Berlin").format("ddd, MMMM D, YYYY");

let qikiqtarjuaq = document.querySelector("#qikiqtarjuaqDate");
qikiqtarjuaq.innerHTML = moment().tz("America/New_York").format("ddd, MMMM D, YYYY");

let startInterval = setInterval(function () {
let honoluluTime = document.querySelector("#honoluluTime");
honoluluTime.innerHTML = moment().tz("Pacific/Honolulu").format("h:mm:ss.SS [<small>]A[</small>]");

let heidelbergTime = document.querySelector("#heidelbergTime");
heidelbergTime.innerHTML = moment().tz("Europe/Berlin").format("h:mm:ss.SS [<small>]A[</small>]");

let qikiqtarjuaqTime = document.querySelector("#qikiqtarjuaqTime");
qikiqtarjuaqTime.innerHTML = moment().tz("America/New_York").format("h:mm:ss.SS [<small>]A[</small>]");
}, 1);

startInterval;

function myStopFunction() {
  clearInterval(startInterval);
}

function updateCity(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement =  document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("ddd, MMMM Do YYYY")}</div>
      </div>
      <div>
        <div class="time" id="newTime">${cityTime.format("h:mm:ss.SS [<small>]A[</small>]")}</div>
      </div>
    </div>`;
  }
}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", myStopFunction);
citiesSelectElement.addEventListener("change", updateCity);