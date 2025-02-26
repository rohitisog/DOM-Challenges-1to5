/**
 * Write your challenge solution here
 */

const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");

const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

function handleName() {
  nameDisplay.textContent = nameInput.value;
}
function handleJob() {
  jobDisplay.textContent = jobInput.value;
}
function handleAge() {
  ageDisplay.textContent = ageInput.value;
}
function handleBio() {
  bioDisplay.textContent = bioInput.value;
}

nameInput.addEventListener("input", handleName);
jobInput.addEventListener("input", handleJob);
ageInput.addEventListener("input", handleAge);
bioInput.addEventListener("input", handleBio);


// -----------Another method short------------


// nameInput.addEventListener("input", () => {
//     nameDisplay.textContent = nameInput.value;
//   });