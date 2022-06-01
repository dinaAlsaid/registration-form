"use strict";

let form = document.getElementById("LoginForm");
let resetButton = document.getElementById("resetButton");
let main = document.getElementById("main");
let popupClose =document.getElementById("popupClose");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let loginData = {
    pincode: e.target.pincode.value,
    email: e.target.email.value,
  };
  let storageData = localStorage.getItem("formData");
  let popup = document.createElement("div");
  
  popup.id = "popup";

  if (loginData.pincode === storageData?.pincode && loginData.email === storageData?.email) {
    popup.className = "popup valid";
    popup.innerHTML = "<div>Logged in successfully</div>";
  } else {
    popup.className = "popup invalid";
    popup.innerHTML = "<div>Invalid Login</div>";
  }

  main.appendChild(popup);

  setTimeout(()=>{

    document.getElementById("popup").remove();

  },3000)
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
});

  