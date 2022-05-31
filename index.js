'use strict'

const jordanCities = ["Amman", "Zarqa", "Madaba"]
const SACities = ["Riyadh", "Jeddah", "Medina"]
const turkeyCities = ["Istanbul", "Antalya", "Ankara"]

let form = document.getElementById("registrationForm");
let state = document.getElementById("state");
let selectCity = document.getElementById("city");
let resetButton=document.getElementById("resetButton");

state.addEventListener("change", (e) => {
        selectCity.innerHTML = '';
    switch (e.target.value) {
        case "Jordan":
            jordanCities.forEach((city) => {
                let ele = document.createElement("option");
                ele.innerText = city;
                ele.setAttribute("value", city)
                selectCity.appendChild(ele)
            })
            break;
        case "Saudi Arabia":
            SACities.forEach((city) => {
                let ele = document.createElement("option");
                ele.innerText = city;
                ele.setAttribute("value", city)
                selectCity.appendChild(ele)
            })
            break;
        case "Turkey":
            turkeyCities.forEach((city) => {
                let ele = document.createElement("option");
                ele.innerText = city;
                ele.setAttribute("value", city)
                selectCity.appendChild(ele)
            })
            break;
        default:
            selectCity.innerHTML = '';
    }
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData={
        firstName:e.target.first.value,
        lastName:e.target.last.value,
        address:e.target.address.value,
        gender:e.target.gender.value,
        state:e.target.state.value,
        city:e.target.city.value,
        pincode:e.target.pincode.value,
        email:e.target.email.value,
        course:e.target.course.value
    }
    localStorage.setItem("formData",formData)
})

resetButton.addEventListener("click",(e)=>{
    e.preventDefault();
    form.reset();
})