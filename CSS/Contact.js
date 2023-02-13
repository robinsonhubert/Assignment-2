// let map;

// function initMap() {
//     var  options = {
//         center: { lat: 37.7749, lng: -122.4194 },
//         zoom: 8,
//       };
//   map = new google.maps.Map(document.getElementById("map"),options)
// }

// window.initMap = initMap;

// function myfunc(){
//     var fuser=document.getElementById("fuser").value;
//     var luser=document.getElementById("luser").value;
//     var email=document.getElementById("email").value;
//     var Pnumber=document.getElementById("Pnumber").value;
//     //Our Regular Expressions Here
//     var userReg=/^[A-Za-z.]{2,23}$/;
//     var mailReg= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
//     //end
//     //FirstName validation
//     if(userReg.test(fuser)){
//         document.getElementById("FirstError").innerHTML="";
//     }else if(fuser==""){
//         document.getElementById("FirstError").innerHTML="* Please enter the First Name";

//     }else{
//         document.getElementById("FirstError").innerHTML="* First Name must be between 2 to 23 charecters";
//     }
//     //end
//         //FirstName validation
//         if(userReg.test(luser)){
//             document.getElementById("LastError").innerHTML="";
//         }else if(luser==""){
//             document.getElementById("LastError").innerHTML="* Please enter the Last Name";
    
//         }else{
//             document.getElementById("LastError").innerHTML="* Last Name must be between 2 to 23 charecters";
//         }
//         //end
//     //mail validation
//     if(mailReg.test(email)){
//         document.getElementById("EmailError").innerHTML="";
//     }else if(email==""){
//         document.getElementById("EmailError").innerHTML="* Enter the Email";
//     }else{
//         document.getElementById("EmailError").innerHTML="* Email is Invalid";
//     }
//     //end
// //Phone Number Validation
// if(phoneRGEX.test(Pnumber)){
//     document.getElementById("PnumberError").innerHTML="";
// }else if(Pnumber==""){
//     document.getElementById("PnumberError").innerHTML="* Enter the Phone Number";
//     return false;
// }else{
//     document.getElementById("PnumberError").innerHTML="* Phone Number is Invalid";
//     return false;
// }
// //end
// }

// var submitButton = document.getElementById('submit');
// submitButton.addEventListener("click", function(){
    
//     var form = document.getElementById('form');
//     var formData = new FormData(form);
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (xhttp.readyState == XMLHttpRequest.DONE) {

//             var response = JSON.parse(xhttp.responseText)
//             if( response.success == true ){

//                 alert("Success Message");

//             }else{

//                 // Show Errors or False Message
//             }
//         }
//     }
//     xhttp.open("POST", "receive.php",true);
//     xhttp.send(formData);

// });

// contacct details form
function validateForm() {
    const firstnameRegex = /[a-zA-Z]{2,15}/igm;
    const lastnameRegex = /[a-zA-Z]{2,15}/igm;
    const emailRegex = /[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim;
    const phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/gm;
    const messageRegex = /[a-zA-Z]{2,120}/igm;
  
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const successMsg = document.getElementById("successMsg");
  
    if (firstnameRegex.test(firstname)) {
      document.getElementById("errorfirstname").innerHTML ="";
    }
    else if(firstname==""){
        document.getElementById("errorfirstname").innerHTML="Please enter the firstname.";
    } 
    else{
      document.getElementById("errorfirstname").innerHTML = "Enter valid firstname.";
    }
    if (lastnameRegex.test(lastname)) {
      document.getElementById("errorlastname").innerHTML ="";
    }
    else if(lastname==""){
        document.getElementById("errorlastname").innerHTML="Please enter the lastname.";
    } 
    else{
      document.getElementById("errorlastname").innerHTML = "Enter valid lastname.";
    }
    if (emailRegex.test(email)) {
      document.getElementById("erroremail").innerHTML ="";
    }
    else if(email==""){
        document.getElementById("erroremail").innerHTML="Please enter the email.";
    }
    else{
      document.getElementById("erroremail").innerHTML = "Enter valid email.";
    }
    if (phoneRegex.test(phone)) {
      document.getElementById("errorphone").innerHTML ="";
    }
    else if(phone==""){
        document.getElementById("errorphone").innerHTML="Please enter the contact number.";
    }
    else{
      document.getElementById("errorphone").innerHTML = "Enter valid contact number.";
    }
    if (messageRegex.test(message)) {
      document.getElementById("errormessage").innerHTML ="";
    }
    else if(message==""){
        document.getElementById("errormessage").innerHTML="Please enter the message";
        return false;
    }
    else{
      document.getElementById("errormessage").innerHTML = "Enter valid message.";
      return false;
    }
    // if(firstnameRegex.test(firstname) && lastnameRegex.test(lastname) && emailRegex.test(email) && phoneRegex.test(phone) && messageRegex.test(message)){
    //   document.getElementById("successMsg").innerHTML ="Submit Success.";
    // }else{
    //   document.getElementById("successMsg").innerHTML=""    
    // }
    // return false ;   

  }
  
  
  // sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
  // map  function
  function initMap(){
    var options={
      zoom:10,
      center:{lat:37.7749,lng:-122.4194}
    }
    var map=new google.maps.Map(document.getElementById("map"),options)
  }