let honolulu = document.querySelector("#honoluluDate");
honolulu.innerHTML = moment().tz("Pacific/Honolulu").format("ddd, MMMM D, YYYY");

let heidelberg = document.querySelector("#heidelbergDate");
heidelberg.innerHTML = moment().tz("Europe/Berlin").format("ddd, MMMM D, YYYY");

let tokyo = document.querySelector("#tokyoDate");
tokyo.innerHTML = moment().tz("Asia/Tokyo").format("ddd, MMMM D, YYYY");

setInterval(function () {
let honoluluTime = document.querySelector("#honoluluTime");
honoluluTime.innerHTML = moment().tz("Pacific/Honolulu").format("h:mm:ss.SS [<small>]A[</small>]");

let heidelbergTime = document.querySelector("#heidelbergTime");
heidelbergTime.innerHTML = moment().tz("Europe/Berlin").format("h:mm:ss.SS [<small>]A[</small>]");

let tokyoTime = document.querySelector("#tokyoTime");
tokyoTime.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss.SS [<small>]A[</small>]");
}, 1);