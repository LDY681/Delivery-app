var numbersOfOffers = 0;
var numbersOfRequests = 0;


function removeOffer(clickedID) {
    var div = document.getElementById(clickedID);
    if (div) {
        div.parentNode.removeChild(div);
    }
    numbersOfOffers--;
}

function removeRequest(clickedID) {
    var div = document.getElementById(clickedID);
    if (div) {
        div.parentNode.removeChild(div);
    }
    numbersOfRequests--;
}


$("#offerSubmit").click(function () {
    $('.col-md-4:last').before('<div id="driver01" class="col-md-4">' +
        '<div class="card mb-4 box-shadow">' +
        '<h2>Offering</h2>' +
        '<div class="card-body"><p id="willbechanged" class="card-text">This part can be a brief description of destination and time to go.</p>' +
        '<div class="d-flex justify-content-between align-items-center">' +
        '<div class="btn-group">' +
        '<button id="driver01" onclick="removeOffer(this.id)" type="button" class="btn btn-sm btn-outline-secondary">Confirm</button>' +
        '</div><small class="text-muted">9 mins</small>' +
        '</div></div></div></div>');

    var info = document.getElementById("driver01");
    info.id = "driver" + numbersOfOffers;
    var button = document.getElementById("driver01");
    button.id = info.id;

    var from01 = document.getElementById("from01").value;
    var to01 = document.getElementById("to01").value;
    var date01 = document.getElementById("date01").value;
    var time01 = document.getElementById("time01").value;
    var noSeats = document.getElementById("noSeats").value;

    var driverinfo = document.getElementById("willbechanged");
    driverinfo.id = "driverinfo" + numbersOfOffers;

    numbersOfOffers++;

    document.getElementById(driverinfo.id).innerHTML = "From: " + from01 + "\nTo: " + to01 + "\nTime: " + date01 + " " + time01 + "\nSeats:" + noSeats;
});

$("#requestSubmit").click(function () {



    $('.col-md-4:last').before('<div id="passenger01" class="col-md-4">' +
        '<div class="card mb-4 box-shadow">' +
        '<h2>Finding</h2>' +
        '<div class="card-body"><p id="willbechanged01" class="card-text">This part can be a brief description of destination and time to go.</p>' +
        '<div class="d-flex justify-content-between align-items-center">' +
        '<div class="btn-group">' +
        '<button id="passenger01" onclick="removeRequest(this.id)" type="button" class="btn btn-sm btn-outline-secondary">Confirm</button>' +
        '</div><small class="text-muted">9 mins</small>' +
        '</div></div></div></div>');

    var info01 = document.getElementById("passenger01");
    info01.id = "passenger" + numbersOfRequests;
    var button01 = document.getElementById("passenger01");
    button01.id = info01.id;

    var from02 = document.getElementById("from02").value;
    var to02 = document.getElementById("to02").value;
    var date02 = document.getElementById("date02").value;
    var time02 = document.getElementById("time02").value;

    var passengerinfo = document.getElementById("willbechanged01");
    passengerinfo.id = "passengerinfo" + numbersOfRequests;

    numbersOfRequests++;

    document.getElementById(passengerinfo.id).innerHTML = "From: " + from02 + "\nTo: " + to02 + "\nTime: " + date02 + " " + time02;
});

