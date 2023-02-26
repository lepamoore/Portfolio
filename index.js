"use strict"
const menuBars = document.getElementById("bars");
const menuX = document.getElementById("x");
const nav = document.getElementById("nav");
const project1 = document.getElementById("gradientId1");
const project2 = document.getElementById("gradientId2");
const project3 = document.getElementById("gradientId3");
const leftArr = document.getElementById("leftProjectArr");
const rightArr = document.getElementById("rightProjectArr");
let i = 2;
const form = document.getElementById("form");
const fname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const Btn = document.getElementById("submit");


// Callback functions menu
function mobileMenuBarsClick() {
    nav.style.top = "9.6vh";
    menuBars.style.visibility = "hidden";
    menuX.style.visibility = "visible";
    menuBars.style.opacity = "0";
    menuX.style.opacity = "1";
}

function mobileMenuXClick() {
    nav.style.top = "-100vh";
    menuX.style.visibility = "hidden";
    menuBars.style.visibility = "visible";
    menuX.style.opacity = "0";
    menuBars.style.opacity = "1";
}

// Callback functions Projects

function clickLeft() {
    if(i > 1) {
    i--;
    if(x.matches) {
        mobileProjectSlide(i);
        } else {
            desktopProjectSlide(i);
        }
    if(i == 1) {
        rightArr.style.color = "rgba(222, 222, 222, 100%)";
        leftArr.style.color = "rgba(222, 222, 222, 30%)";
    } else if(i == 2) {
        rightArr.style.color = "rgba(222, 222, 222, 100%)";
        leftArr.style.color = "rgba(222, 222, 222, 100%)";
    }
    }
}

function clickRight() {
    if(i < 3) {
    i++;
    if(x.matches) {
    mobileProjectSlide(i);
    } else {
        desktopProjectSlide(i);
    }

    if(i == 3) {
        rightArr.style.color = "rgba(222, 222, 222, 30%)";
        leftArr.style.color = "rgba(222, 222, 222, 100%)";
    } else if(i == 2) {
        rightArr.style.color = "rgba(222, 222, 222, 100%)";
        leftArr.style.color = "rgba(222, 222, 222, 100%)";
    }
    }
}

function mobileProjectSlide(state) {
    switch(state) {
        case 1:
            project3.style.left = "110vw";
            project2.style.left = "87vw";
            project1.style.left = "5vw";
            project3.style.transform = "scale(0.85)";
            project2.style.transform = "scale(0.85)";
            project1.style.transform = "scale(1)";
            break;
        case 2:
            project3.style.left = "87vw";
            project2.style.left = "5vw";
            project1.style.left = "-78vw";
            project3.style.transform = "scale(0.85)"
            project2.style.transform = "scale(1)";
            project1.style.transform = "scale(0.85)";
            break;
        case 3:
            project3.style.left = "5vw";
            project2.style.left = "-78vw";
            project1.style.left = "-100vw";
            project3.style.transform = "scale(1)"
            project2.style.transform = "scale(0.85)";
            project1.style.transform = "scale(0.85)";
            break;
    }

}

function desktopProjectSlide(state) {
    switch(state) {
        case 1:
            project3.style.left = "110vw";
            project2.style.left = "110%";
            project1.style.left = "3vw";
            project3.style.transform = "scale(0.85)";
            project2.style.transform = "scale(0.85)";
            project1.style.transform = "scale(1)";
            break;
        case 2:
            project3.style.left = "110%";
            project2.style.left = "3vw";
            project1.style.left = "-100%";
            project3.style.transform = "scale(0.85)"
            project2.style.transform = "scale(1)";
            project1.style.transform = "scale(0.85)";
            break;
        case 3:
            project3.style.left = "3vw";
            project2.style.left = "-100%";
            project1.style.left = "-100vw";
            project3.style.transform = "scale(1)"
            project2.style.transform = "scale(0.85)";
            project1.style.transform = "scale(0.85)";
            break;
    }

}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  function myFunction() {

        menuBars.addEventListener("click", mobileMenuBarsClick);
        menuX.addEventListener("click", mobileMenuXClick);
        leftArr.addEventListener("click", clickLeft);
        rightArr.addEventListener("click", clickRight);
        nav.addEventListener("click", mobileMenuXClick);
  }
  
  var x = window.matchMedia("(max-width: 1023px)");