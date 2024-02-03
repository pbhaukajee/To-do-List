//Step11: Create task list
export const taskLists = [];

//Step12: create contructor for tasks
export function tasks(taskName, priorityScale, date) {
  this.taskName = taskName;
  this.priorityScale = priorityScale;
  this.date = date;
}

//Step15: function to display task array in the page
export function displayTask() {
  const taskDiv = document.querySelector(".tasks");
  taskDiv.innerHTML = "";
  taskLists.forEach((task, index) => {
    let newDiv = `<div class="task-list">
    <div class="task-left">
    <input type="checkbox" id="check-box" >
    <p>${task.taskName}</p>
    <p class="t-priority">${task.priorityScale}</p>
    </div>
    <div class="task-right">
    <div class="t-date">${task.date}</div>
    <img  class="cross-bin hide-cross" data-index="${index}" src="./images/cross.png" alt="cross" />
    </div>
  </div>`;

    taskDiv.insertAdjacentHTML("beforeend", newDiv);
  });

  const deleteTask = document.querySelectorAll(".cross-bin");
  deleteTask.forEach((button) => {
    button.addEventListener("click", function () {
      const TaskIndex = button.dataset.index;
      remove(TaskIndex);
    });
  });
}

//Step13:add new task to taskList
export function addTaskToList(taskName, priorityScale, date) {
  let priority;
  if (priorityScale === "High") {
    priority = "❗️❗️";
  } else {
    priority = "";
  }

  const newTask = new tasks(taskName, priority, date);
  taskLists.push(newTask);
}

//Step17: function to delete the task

export function remove(index) {
  taskLists.splice(index, 1);
  displayTask();
}
