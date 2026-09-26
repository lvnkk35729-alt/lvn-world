// LVN WORLD - Demo JavaScript

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}


// SCREEN 1 - LOGIN
function login() {
  const username = document.getElementById("username").value.trim();
  const error = document.getElementById("loginError");

  if (username === "01") {
    error.textContent = "";
    showScreen("screen2");
  } else {
    error.textContent = "ACCESS DENIED";
  }
}


// SCREEN 2 - SEASON
function selectSeason(season) {
  const status = document.getElementById("seasonStatus");

  status.textContent = season + " selected...";
  
  setTimeout(() => {
    startLoading();
  }, 800);
}


// SCREEN 3 - LOADING
function startLoading() {
  showScreen("screen3");

  const bar = document.getElementById("bar");
  const loadingText = document.getElementById("loadingText");

  let progress = 0;

  const loading = setInterval(() => {
    progress++;

    bar.style.width = progress + "%";
    loadingText.textContent = "Loading " + progress + "%";

    if (progress >= 100) {
      clearInterval(loading);

      setTimeout(() => {
        showScreen("screen4");
      }, 700);
    }
  }, 35);
}


// SCREEN 4 - ACCESS CODE
function checkCode() {
  const code = document.getElementById("accessCode").value.trim();
  const error = document.getElementById("codeError");

  if (code === "005") {
    error.textContent = "";

    setTimeout(() => {
      showScreen("screen5");
    }, 500);
  } else {
    error.textContent = "INVALID ACCESS CODE";
  }
}


// RANDOM STRING GENERATOR
function randomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return result;
}


// FAKE DEMO EMAIL
function generateEmail() {
  const emailOutput = document.getElementById("emailOutput");

  const email =
    randomString(8) +
    Math.floor(1000 + Math.random() * 9000) +
    "@lvn.world";

  emailOutput.textContent = email;
}


// FAKE DEMO PASSWORD
function generatePassword() {
  const passwordOutput = document.getElementById("passwordOutput");

  const password =
    randomString(10) +
    "@lvn.world";

  passwordOutput.textContent = password;
}
