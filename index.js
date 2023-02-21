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



// Callback functions menu
function mobileMenuBarsClick() {
    nav.style.top = "9.6vh";
    menuBars.style.visibility = "hidden";
    menuX.style.visibility = "visible";
    menuBars.style.opacity = "0";
    menuX.style.opacity = "1";
}

function mobileMenuXClick() {
    nav.style.top = "-35vh";
    menuX.style.visibility = "hidden";
    menuBars.style.visibility = "visible";
    menuX.style.opacity = "0";
    menuBars.style.opacity = "1";
}

// Callback functions Projects


function returnNum() {

}

function clickLeft() {
    if(i > 0) {
    i--;
    mobileProjectSlide(i);
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
    if(i < 4) {
    i++;
    mobileProjectSlide(i);
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function myFunction(x) {
    if (x.matches) { 
      menuBars.addEventListener("click", mobileMenuBarsClick);
      menuX.addEventListener("click", mobileMenuXClick);
      leftArr.addEventListener("click", clickLeft);
      rightArr.addEventListener("click", clickRight);
      nav.addEventListener("click", mobileMenuXClick);



    } else {

    }
  }

var x = window.matchMedia("(max-width: 767px)");
myFunction(x);