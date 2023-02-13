let map;

function initMap() {
    var  options = {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 8,
      };
  map = new google.maps.Map(document.getElementById("map"),options)
}

window.initMap = initMap;

function myfunc(){
    var fuser=document.getElementById("fuser").value;
    var luser=document.getElementById("luser").value;
    var email=document.getElementById("email").value;
    var Pnumber=document.getElementById("Pnumber").value;
    //Our Regular Expressions Here
    var userReg=/^[A-Za-z.]{2,23}$/;
    var mailReg= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    //end
    //FirstName validation
    if(userReg.test(fuser)){
        document.getElementById("FirstError").innerHTML="";
    }else if(fuser==""){
        document.getElementById("FirstError").innerHTML="* Please enter the First Name";

    }else{
        document.getElementById("FirstError").innerHTML="* First Name must be between 2 to 23 charecters";
    }
    //end
        //FirstName validation
        if(userReg.test(luser)){
            document.getElementById("LastError").innerHTML="";
        }else if(luser==""){
            document.getElementById("LastError").innerHTML="* Please enter the Last Name";
    
        }else{
            document.getElementById("LastError").innerHTML="* Last Name must be between 2 to 23 charecters";
        }
        //end
    //mail validation
    if(mailReg.test(email)){
        document.getElementById("EmailError").innerHTML="";
    }else if(email==""){
        document.getElementById("EmailError").innerHTML="* Enter the Email";
    }else{
        document.getElementById("EmailError").innerHTML="* Email is Invalid";
    }
    //end
//Phone Number Validation
if(phoneRGEX.test(Pnumber)){
    document.getElementById("PnumberError").innerHTML="";
}else if(Pnumber==""){
    document.getElementById("PnumberError").innerHTML="* Enter the Phone Number";
    return false;
}else{
    document.getElementById("PnumberError").innerHTML="* Phone Number is Invalid";
    return false;
}
//end
}
