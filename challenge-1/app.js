/**
 * Write your challenge solution here
 */

const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const statu = document.getElementById("status");
const body = document.getElementById("body");
let isOn = true;

toggleButton.addEventListener("click", function turnOnOff() {
  if (isOn) {
    bulb.classList.remove("off");
    toggleButton.innerHTML = "Turn On";
    statu.innerHTML = "Status: Off";
    body.style.backgroundColor = "yellow";
    isOn = false;
  } else {
    body.style.backgroundColor = "grey";
    bulb.classList.add("off");
    toggleButton.textContent = "Turn Off";
    statu.textContent = "Status: On";
    isOn = true;
  }
});



// -------Optimise Solution ----------------

// const bulb = document.getElementById("bulb");
// const toggleButton = document.getElementById("toggleButton");
// const statusText = document.getElementById("status");
// const body = document.body; // No need to select by ID if it's the whole body

// let isOn = false;

// toggleButton.addEventListener("click", () => {
//     isOn = !isOn; // Toggle the state

//     bulb.classList.toggle("off", !isOn);
//     body.style.backgroundColor = isOn ? "yellow" : "grey";
//     toggleButton.textContent = isOn ? "Turn Off" : "Turn On";
//     statusText.textContent = `Status: ${isOn ? "On" : "Off"}`;
// });
