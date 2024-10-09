// step 1 - set event handler
document.getElementById("login-button").addEventListener("click", function(event){
  // step 2 - prevent default behavior(prevent reloading browser)
  event.preventDefault(); //vejal eraite used hoy
 

  // step 3 - get the phone number
  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  // console.log(phoneNumber, pinNumber);

  // BAD way to validate
  if (phoneNumber==="12345" && pinNumber==="1234"){
    console.log("You are logged in");
    window.location.href = "/home.html";

  }

  else{
    console.log("Wrong Number of Pin");
  }
})