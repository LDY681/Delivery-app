var numOrders = 0;


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

function submitOrder(){
    var rname = document.getElementById("rname").value;
    var rest = document.getElementById("from02").value;
    var dest = document.getElementById("to02").value;
    var rphone = document.getElementById("phone1").value;
    var custphone = document.getElementById("phone2").value;
    var custname = document.getElementById("name").value;
    
    var db = firebase.database().ref();
    var c = db.child("orders");
    var date = new Date();
    c.push({
        "Restaurant_Name": rname,
        "Restaurant_Phone": rphone,
        "Restaurant_Location": rest,
        "Customer_Name": custname,
        "Destination": dest,
        "Customer_Phone": custphone,
        "Time_Hours": date.getHours(),
        "Time_Minutes": date.getMinutes()
    });
    window.alert("Success! Your order for delivery has been placed.");
    console.log(rname+" "+rest + " " + dest + " " + rphone + " " + custphone +" "+custname);
}






$("#requestSubmit").click(function () {


    
    submitOrder();
    document.getElementById("from02").value = "";
    document.getElementById("to02").value = "";
    document.getElementById("phone1").value = "";
    document.getElementById("phone2").value = "";
    document.getElementById("name").value = "";
    
});

