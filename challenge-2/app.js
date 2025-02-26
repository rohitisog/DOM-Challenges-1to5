/**
 * Write your challenge solution here
 */

const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
const purpleButton = document.getElementById("purpleButton");
const resetButton = document.getElementById("resetButton");
const mainHeading = document.getElementById("mainHeading");

function redHeading(){
    mainHeading.style.color = "#e74c3c";
}
function greenHeading(){
    mainHeading.style.color = "#2ecc71";
}
function purpleHeading(){
    mainHeading.style.color = "#9b59b6";
}
function blueHeading(){
    mainHeading.style.color = "#3498db";
}
function resetHeading(){
    mainHeading.style.color = "black";
}

// -------Optimise Solution ----------------

// const mainHeading = document.getElementById("mainHeading");

// document.addEventListener("click", (event) => {
//     const colorMap = {
//         redButton: "#e74c3c",
//         greenButton: "#2ecc71",
//         blueButton: "#3498db",
//         purpleButton: "#9b59b6",
//         resetButton: "black"
//     };

//     if (colorMap[event.target.id]) {
//         mainHeading.style.color = colorMap[event.target.id];
//     }
// });
