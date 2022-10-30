// DOM
// btn event to login the Web
let btnLogIn = document.querySelector("#btn-log-in");
// variable for changing form log in to sign Up
let loginSlide = document.getElementById("login");
let registerSlide = document.getElementById("register");
let btnNavSlide = document.getElementById("btn");
let registerBtn = document.querySelector("#register-btn");
// register This function is responsible for changing position with login
function slideLeft() {
  loginSlide.style.left = "-400px";
  registerSlide.style.left = "50px";
  btnNavSlide.style.left = "110px";
}
// login This function is responsible for changing position with register
function slideRight() {
  loginSlide.style.left = "50px";
  registerSlide.style.left = "450px";
  btnNavSlide.style.left = "0";
}
// Function listData : save inputs data ( value ) in local Storage
function listData() {
  // DOM : inputs log 
  let userIDLocalStorage = document.querySelector("#userID-localStorage");
  let emailLocalStorage = document.querySelector("#email-localStorage");
  let passLocalStorage = document.querySelector("#pass-localStorage");
  // data object : save the value from inputs
  let data = {
    userID: userIDLocalStorage.value,
    email: emailLocalStorage.value,
    pass: passLocalStorage.value,
  };
  // local Storage
  localStorage.setItem(userIDLocalStorage.value, JSON.stringify(data));
  // Cleaning the inputs after I wrote inside
  userIDLocalStorage.value = "";
  emailLocalStorage.value = "";
  passLocalStorage.value = "";
}
// Event btn register
registerBtn.addEventListener("click", listData);
// Function login Local Storage
function loginLocalStorage() {
  // DOM : log in inputs
  let userId = document.getElementById("user-name");
  let pass = document.getElementById("user-pass");
  // variable take data from localStorage or give empty object
  let localData = JSON.parse(localStorage.getItem(userId.value)) || {};
  // Condition :if username and password correct, take me to the next page
  if (userId.value == localData.userID && pass.value == localData.pass){
    window.location.href = "../Loding/loding.html";
  } else {
    alert("Name and pass is incorrect");
  }
  userId.value = "";
  pass.value = "";
}
// Event btn Log in
btnLogIn.addEventListener('click' , loginLocalStorage)
