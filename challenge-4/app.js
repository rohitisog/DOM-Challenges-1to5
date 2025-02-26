/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");
const taskList = document.getElementById("taskList");
const checkbox = document.getElementById("checkbox");

// checkbox + text + deleteButton
addButton.addEventListener("click", addTask);



function addTask() {
  const task = taskInput.value;
  //   task.trim();
  if (task.trim() === "") {
    alert("Please enter a task");
  } else {
    taskList.classList.add("task-list");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    checkbox.classList.add("complete-checkbox");
    const text = document.createElement("span");
    text.classList.add("task-text");
    //   text.classList.add("task-item")
    text.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    const li = document.createElement("li");
    li.classList.add("task-item");

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    //increment tasks number

    taskInput.value = "";
  }
}

deleteButton.addEventListener("click", deleteTask);
function deleteTask() {
    taskList.removeChild(taskItem);
}

function completeTask() {
  // increment completed task
  if (checkbox.checked) {
    li.classList.add("completed");
  } else {
    li.classList.remove("completed");
  }
}
