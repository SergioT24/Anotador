import deleteIcon from "./DeleteIcon/deleteIcon.js";
import checkComplete from "./Checkcomplete/checkComplete.js";
import { displayTasks } from "./readTask.js";
import { uniqueDates } from "../Services/date.js";
export const addTask = (event) => {
  //prevenir acto-reflejo de página de refresh
  event.preventDefault();
//traer lista, input y fecha
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");
  /*valor que puso el usuario, dato y formato de fecha en 
  formato que quiero recibir/*/
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");
  if (value ==="" || date === "" ){
    return;
  }
  
  input.value = "";
  calendar.value = "";

  const complete = false;

  const taskObj = {
    value, 
    dateFormat,
    complete,
    id: uuid.v4()
};

list.innerHTML = "";  

const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
taskList.push(taskObj);
localStorage.setItem("tasks", JSON.stringify(taskList));
displayTasks(); 
  
};
//agregando y creando elementos
export const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement("li");
        task.classList.add("card");
  //backticks
  const taskContent = document.createElement("div");
 
  const check = checkComplete(id);
  if (complete){
 
    check.classList.toggle("fas");
    check.classList.toggle("completeTask");
    check.classList.toggle("far");
  }
  const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(check);  
        taskContent.appendChild(titleTask);

  const dataElement = document.createElement("span");
        dataElement.innerHTML = dateFormat;

        task.appendChild(taskContent);
        task.appendChild(dataElement);  
        task.appendChild(deleteIcon(id));
        return task;
  };

