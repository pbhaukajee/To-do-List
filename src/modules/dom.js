import * as project from "./project.js";
import * as storage from "./storage.js";
import * as task from "./tasks.js";
import DeleteImg from "../images/delete.png";
import CrossImg from "../images/cross.png";

let currentProjectIndex = 0;

function changeCurrentProjectIndex(index) {
  currentProjectIndex = index;
}

//step5
const addProjectBtn = document.querySelector(".addProjectBtn");
const displayAddProject = document.querySelector("#display-add-project");

addProjectBtn.addEventListener("click", () => showProjectForm());

function showProjectForm() {
  addProjectBtn.classList.add("hide-btn-active");
  displayAddProject.classList.remove("hide-input");
  hideTaskForm();
}

//step6
const projectCancelBtn = document.querySelector(".project-cancel-btn");
projectCancelBtn.addEventListener("click", () => hideProjectForm());
function hideProjectForm() {
  projectInput.value = "";
  displayAddProject.classList.add("hide-input");
  addProjectBtn.classList.remove("hide-btn-active");
}

//Step7
const projectAddBtn = document.querySelector(".project-add-btn");
const projectInput = document.querySelector(".add-project-input");
projectAddBtn.addEventListener("click", () => addProjectForm());
function addProjectForm() {
  if (!projectInput.value) {
    return false;
  }
  project.addProject(projectInput.value);
  projectInput.value = "";
}

//step8
function clearProjectDisplay() {
  const projectListContainer = document.querySelector("#project-list");
  projectListContainer.textContent = "";
}

//Step9
function renderProjects() {
  clearProjectDisplay();
  const projectListContainer = document.querySelector("#project-list");

  project.projectList.forEach((project, index) => {
    projectListContainer.innerHTML += `<div class="project-select flex-div" data-project-index="${index}">
        <p class="project-select" data-project-index="${index}">${project.title}<p><img src="${DeleteImg}" alt="delete-bin" class="delete-bin hide-bin">`;
  });

  listenForProjectClick();
}

//Step10
function listenForProjectClick() {
  const projectButtons = document.querySelectorAll(".project-select");
  projectButtons.forEach((button) => {
    button.addEventListener("click", handleProjectClick);
  });
}

//Step11
function handleProjectClick(e) {
  const listTitle = document.querySelector(".list-title");
  listTitle.textContent = e.target.innerText;
  hideProjectForm();
  hideTaskForm();
  showAddTaskBtn();

  const projectIndex = this.getAttribute("data-project-index");

  changeCurrentProjectIndex(projectIndex);
  task.getTaskFromProject(currentProjectIndex);

  renderTodoList(task.taskList);

  if (e.target.classList.contains("delete-bin")) {
    deleteProjectFromDom(projectIndex);
    clearTaskDisplay();
    return;
  }
}

function deleteProjectFromDom(index) {
  project.spliceProjectList(index);
  changeCurrentProjectIndex(0);
  renderProjects();
}

const addTaskBtn = document.querySelector(".add-task-btn");
const displayAddTask = document.querySelector("#display-add-task");
addTaskBtn.addEventListener("click", showTaskForm);
function showTaskForm() {
  addTaskBtn.classList.add("hide-btn-active");
  displayAddTask.classList.remove("hide-input");

  hideProjectForm();
}

const taskCancelBtn = document.querySelector(".task-cancel-btn");
taskCancelBtn.addEventListener("click", hideTaskForm);
function hideTaskForm() {
  displayAddTask.classList.add("hide-input");
  addTaskBtn.classList.remove("hide-btn-active");
}

const taskAddBtn = document.querySelector(".task-add-btn");
taskAddBtn.addEventListener("click", addTaskForm);
function addTaskForm() {
  hideTaskForm();
  const taskInput = document.querySelector(".add-task-input");
  const priorityScale = document.querySelector(".priority");
  const dateInput = document.querySelector(".task-due-date");
  if (!taskInput.value) {
    return;
  }
  task.getTaskFromProject(currentProjectIndex);
  task.addTask(
    taskInput.value,
    dateInput.value,
    priorityScale.value,
    currentProjectIndex
  );
  taskInput.value = "";
  dateInput.value = "";
  priorityScale.value = "low";
}

function clearTaskDisplay() {
  const todoListContainer = document.querySelector(".todo-list");
  todoListContainer.textContent = "";
}

function renderTodoList(list) {
  clearTaskDisplay();

  const todoListContainer = document.querySelector(".todo-list");
  list.forEach((todo, todoIndex) => {
    todoListContainer.innerHTML += `<div class="todo-item" data-project-index="${todo.projectIndex}" data-task-index="${todoIndex}">
    <div class="task-left">
    <p class="todo-title">• ${todo.title}</p>
    <p class="t-priority">${todo.priority}</p>
    </div>
    <div class="task-right">
    <p class="todo-due-date">${todo.dueDate}</p>
    <img  class="cross-bin hide-cross" data-task-index="${todoIndex}" src="${CrossImg}" alt="crossImg" />
    </div>
  </div>`;
  });

  handleTodoBtnClicks();
}

function handleTodoBtnClicks() {
  const taskDelete = document.querySelectorAll(".cross-bin");
  taskDelete.forEach((btn) => btn.addEventListener("click", deleteTaskFromDom));
}

function deleteTaskFromDom(e) {
  const projectIndex = e.target.parentNode.parentNode.dataset.projectIndex;
  const taskIndex = e.target.parentNode.parentNode.dataset.taskIndex;

  storage.deleteTodo(projectIndex, taskIndex);
  let storageProjectList = localStorage.getItem("projectList");
  let storageProjects = JSON.parse(storageProjectList);
  renderTodoList(storageProjects[projectIndex].task);
}

function showAddTaskBtn() {
  const addProjectBtn = document.querySelector(".add-task-btn");
  addProjectBtn.classList.remove("hide-btn-active");
}

export { clearProjectDisplay, renderProjects, renderTodoList };
