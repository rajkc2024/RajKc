'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


// Text to be typed for title
var titleText = "Hi, I am Raj";
var titleElement = document.querySelector('.typing-title'); // Selecting the span element with class "typing-title"

// Text to be typed for different roles
var roles = ["a Leader", "a BCA Student", "a Mentor", "an Innovator", "a Problem Solver"];
var currentIndex = 0; // Initialize index for roles

// Function to type title
function typeTitle() {
  var titleLength = titleText.length;
  var currentCharacter = 0;
  var typingInterval = setInterval(function() {
    titleElement.innerHTML += titleText[currentCharacter];
    currentCharacter++;
    if (currentCharacter === titleLength) {
      clearInterval(typingInterval);
      setTimeout(function() {
        // After typing the title, start typing different roles
        typeRole();
      }, 1000); // Delay before typing roles
    }
  }, 100); // Typing speed for title
}

// Function to type different roles
function typeRole() {
  var role = roles[currentIndex];
  var roleLength = role.length;
  var currentCharacter = 0;
  var typingInterval = setInterval(function() {
    var coloredText = "<span style='color: ";
    // Color roles based on their index
    switch (currentIndex) {
      case 0:
        coloredText += "green;'>"; // Leader in blue
        break;
      case 1:
        coloredText += "green;'>"; // BCA Student in green
        break;
      case 2:
        coloredText += "green;'>"; // Mentor in orange
        break;
      case 3:
        coloredText += "green;'>"; // Innovator in purple
        break;
      case 4:
        coloredText +="green;'>"; // Problem Solver in red
        break;
      default:
        coloredText +="green;'>"; // Default color
        break;
    }
    titleElement.innerHTML = titleText + "   " + coloredText + role.slice(0, currentCharacter + 1) + "</span>";
    currentCharacter++;
    if (currentCharacter === roleLength) {
      clearInterval(typingInterval);
      currentIndex++;
      if (currentIndex === roles.length) {
        currentIndex = 0; // Reset index to loop through roles
      }
      setTimeout(function() {
        // After typing the role, start typing the next role
        typeRole();
      }, 1500); // Delay before typing next role
    }
  }, 100); // Typing speed for roles
}

// Start typing title initially
typeTitle();