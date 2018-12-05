//window.addEventListener("load",display);

function display(){
    var db = firebase.database().ref("orders/");
    var table = document.getElementById("table-body");
    var i = 0;
    db.once('value').then(function(snapshot){
        snapshot.forEach(function(d){
            var data = d.val();
            var row = table.insertRow(i);
            row.id = "row"+i;
            var c1 = row.insertCell(0);
            var c2 = row.insertCell(1);
            var c3 = row.insertCell(2);
            var c4 = row.insertCell(3);
            var c5 = row.insertCell(4);
            var t = "AM";
            var hours = data.Time_Hours;
            if(data.Time_Hours >= 12){
                hours-=12;
                t="PM";
            }
            c1.innerHTML = hours+ ":" + data.Time_Minutes +" "+t;
            c1.setAttribute('id',"r"+i+"time");
            c2.innerHTML = data.Restaurant_Name;
            c3.innerHTML = data.Restaurant_Location;
            c4.innerHTML = data.Destination;
            c4.setAttribute('id',"r"+i+"dest");
            var btn = document.createElement("button");
            btn.innerHTML = "Choose";
            btn.type = "button";
            btn.setAttribute('class',"btn btn-sm btn-outline-secondary");
            btn.setAttribute('onclick','removeOrder('+i+');');
            c5.appendChild(btn);
            
            i++;
        });
    });
    console.log("hi");
}

function removeOrder(row){
    
    var db = firebase.database().ref("orders/");
    var hours = document.getElementById("r"+row+"time").innerHTML;
    var dest = document.getElementById("r"+row+"dest").innerHTML;
    console.log(hours +" "+dest);
    db.once('value').then(function(snapshot){
        snapshot.forEach(function(d){
            var data = d.val();
            var t = "AM";
            var h = data.Time_Hours;
            if(data.Time_Hours >= 12){
                h-=12;
                t="PM";
            }
            var ho = h + ":"+data.Time_Minutes+" "+t;
            
            if(ho == hours && data.Destination == dest){
                db.child(d.key).remove();
                
                window.alert("You have chose to deliver an order. We will email you your delivery information.");
                location.reload();
                return;
            }
        });
    });
    
    
}
