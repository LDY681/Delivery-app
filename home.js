//TODO:
//make database: orders
//Change ids inside home.html departure to pickupLocation, noSeats to deliveryFee

//Extra Info
//functions signOutUser, submitOrder, signUpOrder

var num = 0;
var ordersByID = {};
var card_index = 0;

function signOutUser() {

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    //window.location.href="index.html";
  }).catch(function(error) {
    // An error happened.
    window.alert("Error: " + error.message);
  });

}

function submitOrder() {
    var pickupLocation = document.getElementById("pickupLocation").value;
    var destination = document.getElementById("destination").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var deliveryFee = document.getElementById("deliveryFee").value;

    var user = firebase.auth().currentUser;
    var myDB = firebase.database().ref();
    var orders = myDB.child("orders");
    orders.push({
	"driver": user.email,
	"pickupLocation": pickupLocation,
       	"destination": destination,
       	"date": date,
       	"time": time,
       	"deliveryFee": deliveryFee,
       	"searcher": pickupLocation+destination+date
     }); 
     window.alert("Your order has been placed.");
}

function signUpOrder() {
    var pickup = document.getElementById("from").value;
    var dest = document.getElementById('to').value;
    var da = document.getElementById("datePass").value;
    
   //find entries with matching departure, destination, and date
   var matcher = dep+dest+da;
   var database = firebase.database().ref("orders/");
   var i = 0;
   
   database.orderByChild("searcher").equalTo(matcher).on("value", function(snapshot) {
    var list = document.getElementById("match-list"); // list of corresponding orders
    list.innerHTML = "";
    if (!snapshot.exists()) {
      var noneExist = document.createElement("option");
      //noneExist.setAttribute("disabled");
      noneExist.disabled = true;
      noneExist.appendChild(document.createTextNode("Sorry! There is no order at current time."));
      list.appendChild(noneExist);
    }
    else {
    snapshot.forEach(function(data) {
          console.log("Order found: Pick up from" + data.val().pickupLocation + ". Deliver to " + data.val().destination + " at " + data.val().time + ".");
          var entry = document.createElement("option");     // creates element for that option
            //entry.setAttribute("id", id);                     // id corresponds with entry now
            ordersByID[i] = data.key;                         //maps order key to ordersByID array
            i++;
            entry.appendChild(document.createTextNode("time: " + data.val().time)); // puts text in entry
            list.appendChild(entry);                          // adds entry to list
      });
    }
   });
}
