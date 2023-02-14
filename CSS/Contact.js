
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
  
  
  // map  function
  function initMap(){
    var options={
      zoom:10,
      center:{lat:37.7749,lng:-122.4194}
    }
    var map=new google.maps.Map(document.getElementById("map"),options)
  }