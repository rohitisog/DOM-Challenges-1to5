/**
 * Write your challenge solution here
 */

const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const statu = document.getElementById("status");
const body = document.getElementById("body");
const isOn = true;

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
