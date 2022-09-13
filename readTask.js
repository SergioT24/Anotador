import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../Services/date.js";
import dateElement from "./dateElement.js";

export const displayTasks = () => {
const List = document.querySelector("[data-list]");
const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
const dates = uniqueDates(tasksList);
orderDates(dates);
console.log(orderDates);

//fechas almacenadas en el arreglo
dates.forEach( date => {
        const dateMoment = moment(date,"DD/MM/YYYY");
        List.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            //Si coinciden las fechas, se crea la separación
            if(diff === 0){
                List.appendChild(createTask(task));
            }
        });
    });
};
