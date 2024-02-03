import { addProjectToList, saveAndDisplay } from "./project";

import { addTaskToList, displayTask } from "./tasks";
export default function Dom() {
  const addProjectBtn = document.querySelector("#add");
  const cancelBtn = document.querySelector("#cancel");
  const addProject = document.querySelector("#add-project");
  const addProjectInput = document.querySelector("#project-input");
  const projectTitle = document.querySelector("#project-name");
  const addTask = document.querySelector(".add-task");
  const addTaskInput = document.querySelector(".task-input");
  const taskName = document.querySelector("#task-name");
  const addTaskBtn = document.querySelector("#add-t");

  const cancelTBtn = document.querySelector("#cancel-t");

  //Step4: Add projects
  addProject.addEventListener("click", function () {
    addProject.classList.add("hide-add-project");
    addProjectInput.classList.remove("hide-btn-input");

    //clear input value if any
    projectTitle.value = "";
  });

  //Step5: extract project input info when "Add" button is clicked
  addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //Extract values from input
    let title = projectTitle.value;
    if (title === "") {
      return false;
    } else {
      addProjectToList(title);
      saveAndDisplay();
      title = "";
      addProject.classList.remove("hide-add-project");
      addProjectInput.classList.add("hide-btn-input");
    }
  });

  //Step6: cancel project
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProject.classList.remove("hide-add-project");
    addProjectInput.classList.add("hide-btn-input");
  });

  //Step9: delete default projects
  const deleteDefaultProject = document.querySelectorAll(".delete-default-bin");
  const defaultProjectList = document.querySelectorAll(".project-list");
  deleteDefaultProject.forEach((button, index) => {
    button.addEventListener("click", function () {
      const defaultProject = defaultProjectList[index];
      defaultProject.remove();
    });
  });

  //Step10: Add tasks
  addTask.addEventListener("click", function (e) {
    e.preventDefault();
    addTask.classList.add("hide-add-task");
    addTaskInput.classList.remove("hide-btn-input");

    //clear input value if any
    taskName.value = "";
  });

  //Step14: extract task input info when "Add" button is clicked
  addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //Extract from input values

    let task = document.querySelector("#task-name").value;
    let priority = document.querySelector("#priority").value;
    let date = document.querySelector("#date").value;

    if (task === "") {
      return false;
    } else {
      addTaskToList(task, priority, date);
      displayTask();
      addTaskInput.reset();
      addTask.classList.remove("hide-add-task");
      addTaskInput.classList.add("hide-btn-input");
    }
  });
  //Step16: cancel task
  cancelTBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask.classList.remove("hide-add-task");
    addTaskInput.classList.add("hide-btn-input");
  });
}
