import { addTask } from "./Components/addTask.js";
import { displayTasks } from "./Components/readTask.js";

const btn = document.querySelector("[data-form-btn]");

//Arrow functions
btn.addEventListener("click", addTask);

displayTasks();