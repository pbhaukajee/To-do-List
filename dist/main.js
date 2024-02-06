/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearProjectDisplay: () => (/* binding */ clearProjectDisplay),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTodoList: () => (/* binding */ renderTodoList)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/modules/tasks.js");




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
  _project_js__WEBPACK_IMPORTED_MODULE_0__.addProject(projectInput.value);
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

  _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project, index) => {
    projectListContainer.innerHTML += `<div class="project-select flex-div" data-project-index="${index}">
        <p class="project-select data-project-index="${index}">${project.title}<p><img src=./images/delete.png alt="delete-bin" class="delete-bin hide-bin">`;
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
  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.getTaskFromProject(currentProjectIndex);

  renderTodoList(_tasks_js__WEBPACK_IMPORTED_MODULE_2__.taskList);

  if (e.target.classList.contains("delete-bin")) {
    deleteProjectFromDom(projectIndex);
    clearTaskDisplay();
    return;
  }
}

function deleteProjectFromDom(index) {
  _project_js__WEBPACK_IMPORTED_MODULE_0__.spliceProjectList(index);
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
  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.getTaskFromProject(currentProjectIndex);
  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.addTask(
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
    <img  class="cross-bin hide-cross" data-task-index="${todoIndex}" src="./images/cross.png" alt="cross" />
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

  _storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo(projectIndex, taskIndex);
  let storageProjectList = localStorage.getItem("projectList");
  let storageProjects = JSON.parse(storageProjectList);
  renderTodoList(storageProjects[projectIndex].task);
}

function showAddTaskBtn() {
  const addProjectBtn = document.querySelector(".add-task-btn");
  addProjectBtn.classList.remove("hide-btn-active");
}




/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateProject: () => (/* binding */ CreateProject),
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   spliceProjectList: () => (/* binding */ spliceProjectList),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList),
/* harmony export */   updateTaskArray: () => (/* binding */ updateTaskArray)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/modules/tasks.js");




//Step1
let projectList = [];

function getLocalStorage() {
  let localProjects = localStorage.getItem("projectList");
  if (!localProjects) {
    addProject("Study");
    _tasks_js__WEBPACK_IMPORTED_MODULE_2__.addTask("Practice Coding");
  } else {
    projectList = JSON.parse(localProjects);
  }
  return projectList;
}

//Step2
function CreateProject(title) {
  const task = [];
  return {
    title,
    task,
  };
}

//Step3
function addProject(title) {
  const project = CreateProject(title);
  projectList.push(project);
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects();
}

function spliceProjectList(index) {
  if (index > -1) {
    projectList.splice(index, 1);
  }
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();
}

function updateProjectList(index, list) {
  projectList[index].task = list;
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();
}

function updateTaskArray(
  projectIndex,
  taskIndex,
  newName,
  newPriority,
  newDate
) {
  projectList[projectIndex].task[taskIndex].title = newName;
  projectList[projectIndex].task[taskIndex].priority = newPriority;
  projectList[projectIndex].task[taskIndex].dueDate = newDate;
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();
}




/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),
/* harmony export */   saveProjectToLocalStorage: () => (/* binding */ saveProjectToLocalStorage)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");




//Step4
function saveProjectToLocalStorage() {
  const projects = _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList;
  const projectListInJSON = JSON.stringify(projects);
  localStorage.setItem("projectList", projectListInJSON);
}

function deleteTodo(projectIndex, taskIndex) {
  let storageProjectList = localStorage.getItem("projectList");
  let storageProjects = JSON.parse(storageProjectList);

  storageProjects[projectIndex].task.splice(taskIndex, 1);

  const jsonProjectList = storageProjects;
  const jsonProjects = JSON.stringify(jsonProjectList);
  localStorage.setItem("projectList", jsonProjects);

  _tasks_js__WEBPACK_IMPORTED_MODULE_1__.taskList.splice(taskIndex, 1);
}

function getLocalStorage() {
  // retreieve data
  let storageProjectList = localStorage.getItem("projectList");
  let storageProjects = JSON.parse(storageProjectList);
  return storageProjects;
}




/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTask: () => (/* binding */ CreateTask),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   getTaskFromProject: () => (/* binding */ getTaskFromProject),
/* harmony export */   taskList: () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");



let taskList = [];

function getTaskFromProject(projectIndex) {
  if (_project_js__WEBPACK_IMPORTED_MODULE_1__.projectList[projectIndex]) {
    taskList = _project_js__WEBPACK_IMPORTED_MODULE_1__.projectList[projectIndex].task;
  } else {
    return;
  }
}

function CreateTask(title, dueDate, priorityScale, projectIndex) {
  let priority;
  if (priorityScale === "high") {
    priority = "❗️❗️";
  } else {
    priority = "";
  }
  return {
    title,
    dueDate,
    priority,
    projectIndex,
  };
}

function addTask(name, dueDate, priorityScale, projectIndex) {
  const task = CreateTask(name, dueDate, priorityScale, projectIndex);
  taskList.push(task);
  _project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectList(projectIndex, taskList);
  console.log(taskList);
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTodoList(taskList);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom.js */ "./src/modules/dom.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");





_modules_project_js__WEBPACK_IMPORTED_MODULE_3__.getLocalStorage();
_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.renderProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQXlCO0FBQzNCO0FBQ0EsRUFBRSxtREFBa0I7QUFDcEI7O0FBRTZEOzs7Ozs7O1VDcEM3RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ0s7QUFDUjtBQUNROztBQUVoRCxnRUFBdUI7QUFDdkIsMkRBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCAqIGFzIHRhc2sgZnJvbSBcIi4vdGFza3MuanNcIjtcblxubGV0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSAwO1xuXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50UHJvamVjdEluZGV4KGluZGV4KSB7XG4gIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBpbmRleDtcbn1cblxuLy9zdGVwNVxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdEJ0blwiKTtcbmNvbnN0IGRpc3BsYXlBZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWFkZC1wcm9qZWN0XCIpO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93UHJvamVjdEZvcm0oKSk7XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0Rm9ybSgpIHtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZS1idG4tYWN0aXZlXCIpO1xuICBkaXNwbGF5QWRkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1pbnB1dFwiKTtcbiAgaGlkZVRhc2tGb3JtKCk7XG59XG5cbi8vc3RlcDZcbmNvbnN0IHByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2FuY2VsLWJ0blwiKTtcbnByb2plY3RDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhpZGVQcm9qZWN0Rm9ybSgpKTtcbmZ1bmN0aW9uIGhpZGVQcm9qZWN0Rm9ybSgpIHtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgZGlzcGxheUFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcImhpZGUtaW5wdXRcIik7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtYnRuLWFjdGl2ZVwiKTtcbn1cblxuLy9TdGVwN1xuY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1hZGQtYnRuXCIpO1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1pbnB1dFwiKTtcbnByb2plY3RBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZFByb2plY3RGb3JtKCkpO1xuZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XG4gIGlmICghcHJvamVjdElucHV0LnZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByb2plY3QuYWRkUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG4vL3N0ZXA4XG5mdW5jdGlvbiBjbGVhclByb2plY3REaXNwbGF5KCkge1xuICBjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xuICBwcm9qZWN0TGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbi8vU3RlcDlcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICBjbGVhclByb2plY3REaXNwbGF5KCk7XG4gIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG5cbiAgcHJvamVjdC5wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2plY3Qtc2VsZWN0IGZsZXgtZGl2XCIgZGF0YS1wcm9qZWN0LWluZGV4PVwiJHtpbmRleH1cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LXNlbGVjdCBkYXRhLXByb2plY3QtaW5kZXg9XCIke2luZGV4fVwiPiR7cHJvamVjdC50aXRsZX08cD48aW1nIHNyYz0uL2ltYWdlcy9kZWxldGUucG5nIGFsdD1cImRlbGV0ZS1iaW5cIiBjbGFzcz1cImRlbGV0ZS1iaW4gaGlkZS1iaW5cIj5gO1xuICB9KTtcblxuICBsaXN0ZW5Gb3JQcm9qZWN0Q2xpY2soKTtcbn1cblxuLy9TdGVwMTBcbmZ1bmN0aW9uIGxpc3RlbkZvclByb2plY3RDbGljaygpIHtcbiAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qtc2VsZWN0XCIpO1xuICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByb2plY3RDbGljayk7XG4gIH0pO1xufVxuXG4vL1N0ZXAxMVxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdENsaWNrKGUpIHtcbiAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gIGhpZGVQcm9qZWN0Rm9ybSgpO1xuICBoaWRlVGFza0Zvcm0oKTtcbiAgc2hvd0FkZFRhc2tCdG4oKTtcblxuICBjb25zdCBwcm9qZWN0SW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKTtcblxuICBjaGFuZ2VDdXJyZW50UHJvamVjdEluZGV4KHByb2plY3RJbmRleCk7XG4gIHRhc2suZ2V0VGFza0Zyb21Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0SW5kZXgpO1xuXG4gIHJlbmRlclRvZG9MaXN0KHRhc2sudGFza0xpc3QpO1xuXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtYmluXCIpKSB7XG4gICAgZGVsZXRlUHJvamVjdEZyb21Eb20ocHJvamVjdEluZGV4KTtcbiAgICBjbGVhclRhc2tEaXNwbGF5KCk7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tRG9tKGluZGV4KSB7XG4gIHByb2plY3Quc3BsaWNlUHJvamVjdExpc3QoaW5kZXgpO1xuICBjaGFuZ2VDdXJyZW50UHJvamVjdEluZGV4KDApO1xuICByZW5kZXJQcm9qZWN0cygpO1xufVxuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idG5cIik7XG5jb25zdCBkaXNwbGF5QWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1hZGQtdGFza1wiKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dUYXNrRm9ybSk7XG5mdW5jdGlvbiBzaG93VGFza0Zvcm0oKSB7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImhpZGUtYnRuLWFjdGl2ZVwiKTtcbiAgZGlzcGxheUFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtaW5wdXRcIik7XG5cbiAgaGlkZVByb2plY3RGb3JtKCk7XG59XG5cbmNvbnN0IHRhc2tDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2FuY2VsLWJ0blwiKTtcbnRhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVUYXNrRm9ybSk7XG5mdW5jdGlvbiBoaWRlVGFza0Zvcm0oKSB7XG4gIGRpc3BsYXlBZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWlucHV0XCIpO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWJ0bi1hY3RpdmVcIik7XG59XG5cbmNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLWJ0blwiKTtcbnRhc2tBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tGb3JtKTtcbmZ1bmN0aW9uIGFkZFRhc2tGb3JtKCkge1xuICBoaWRlVGFza0Zvcm0oKTtcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1pbnB1dFwiKTtcbiAgY29uc3QgcHJpb3JpdHlTY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWUtZGF0ZVwiKTtcbiAgaWYgKCF0YXNrSW5wdXQudmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGFzay5nZXRUYXNrRnJvbVByb2plY3QoY3VycmVudFByb2plY3RJbmRleCk7XG4gIHRhc2suYWRkVGFzayhcbiAgICB0YXNrSW5wdXQudmFsdWUsXG4gICAgZGF0ZUlucHV0LnZhbHVlLFxuICAgIHByaW9yaXR5U2NhbGUudmFsdWUsXG4gICAgY3VycmVudFByb2plY3RJbmRleFxuICApO1xuICB0YXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICBkYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICBwcmlvcml0eVNjYWxlLnZhbHVlID0gXCJsb3dcIjtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRGlzcGxheSgpIHtcbiAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgdG9kb0xpc3RDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvTGlzdChsaXN0KSB7XG4gIGNsZWFyVGFza0Rpc3BsYXkoKTtcblxuICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICBsaXN0LmZvckVhY2goKHRvZG8sIHRvZG9JbmRleCkgPT4ge1xuICAgIHRvZG9MaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInRvZG8taXRlbVwiIGRhdGEtcHJvamVjdC1pbmRleD1cIiR7dG9kby5wcm9qZWN0SW5kZXh9XCIgZGF0YS10YXNrLWluZGV4PVwiJHt0b2RvSW5kZXh9XCI+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stbGVmdFwiPlxuICAgIDxwIGNsYXNzPVwidG9kby10aXRsZVwiPuKAoiAke3RvZG8udGl0bGV9PC9wPlxuICAgIDxwIGNsYXNzPVwidC1wcmlvcml0eVwiPiR7dG9kby5wcmlvcml0eX08L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stcmlnaHRcIj5cbiAgICA8cCBjbGFzcz1cInRvZG8tZHVlLWRhdGVcIj4ke3RvZG8uZHVlRGF0ZX08L3A+XG4gICAgPGltZyAgY2xhc3M9XCJjcm9zcy1iaW4gaGlkZS1jcm9zc1wiIGRhdGEtdGFzay1pbmRleD1cIiR7dG9kb0luZGV4fVwiIHNyYz1cIi4vaW1hZ2VzL2Nyb3NzLnBuZ1wiIGFsdD1cImNyb3NzXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgfSk7XG5cbiAgaGFuZGxlVG9kb0J0bkNsaWNrcygpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2RvQnRuQ2xpY2tzKCkge1xuICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcm9zcy1iaW5cIik7XG4gIHRhc2tEZWxldGUuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2tGcm9tRG9tKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tRG9tKGUpIHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICBjb25zdCB0YXNrSW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC50YXNrSW5kZXg7XG5cbiAgc3RvcmFnZS5kZWxldGVUb2RvKHByb2plY3RJbmRleCwgdGFza0luZGV4KTtcbiAgbGV0IHN0b3JhZ2VQcm9qZWN0TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIik7XG4gIGxldCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JhZ2VQcm9qZWN0TGlzdCk7XG4gIHJlbmRlclRvZG9MaXN0KHN0b3JhZ2VQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2spO1xufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza0J0bigpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpO1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWJ0bi1hY3RpdmVcIik7XG59XG5cbmV4cG9ydCB7IGNsZWFyUHJvamVjdERpc3BsYXksIHJlbmRlclByb2plY3RzLCByZW5kZXJUb2RvTGlzdCB9O1xuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgKiBhcyB0YXNrIGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbi8vU3RlcDFcbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gIGxldCBsb2NhbFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKTtcbiAgaWYgKCFsb2NhbFByb2plY3RzKSB7XG4gICAgYWRkUHJvamVjdChcIlN0dWR5XCIpO1xuICAgIHRhc2suYWRkVGFzayhcIlByYWN0aWNlIENvZGluZ1wiKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxQcm9qZWN0cyk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG4vL1N0ZXAyXG5mdW5jdGlvbiBDcmVhdGVQcm9qZWN0KHRpdGxlKSB7XG4gIGNvbnN0IHRhc2sgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICB0YXNrLFxuICB9O1xufVxuXG4vL1N0ZXAzXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3QgPSBDcmVhdGVQcm9qZWN0KHRpdGxlKTtcbiAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG4gIGRvbS5yZW5kZXJQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBzcGxpY2VQcm9qZWN0TGlzdChpbmRleCkge1xuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KGluZGV4LCBsaXN0KSB7XG4gIHByb2plY3RMaXN0W2luZGV4XS50YXNrID0gbGlzdDtcbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tBcnJheShcbiAgcHJvamVjdEluZGV4LFxuICB0YXNrSW5kZXgsXG4gIG5ld05hbWUsXG4gIG5ld1ByaW9yaXR5LFxuICBuZXdEYXRlXG4pIHtcbiAgcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrW3Rhc2tJbmRleF0udGl0bGUgPSBuZXdOYW1lO1xuICBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tbdGFza0luZGV4XS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tbdGFza0luZGV4XS5kdWVEYXRlID0gbmV3RGF0ZTtcbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmV4cG9ydCB7XG4gIHByb2plY3RMaXN0LFxuICBDcmVhdGVQcm9qZWN0LFxuICBhZGRQcm9qZWN0LFxuICBzcGxpY2VQcm9qZWN0TGlzdCxcbiAgdXBkYXRlUHJvamVjdExpc3QsXG4gIGdldExvY2FsU3RvcmFnZSxcbiAgdXBkYXRlVGFza0FycmF5LFxufTtcbiIsImltcG9ydCAqIGFzIHByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0ICogYXMgdGFzayBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbS5qc1wiO1xuXG4vL1N0ZXA0XG5mdW5jdGlvbiBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3QucHJvamVjdExpc3Q7XG4gIGNvbnN0IHByb2plY3RMaXN0SW5KU09OID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIHByb2plY3RMaXN0SW5KU09OKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkge1xuICBsZXQgc3RvcmFnZVByb2plY3RMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKTtcbiAgbGV0IHN0b3JhZ2VQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmFnZVByb2plY3RMaXN0KTtcblxuICBzdG9yYWdlUHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuXG4gIGNvbnN0IGpzb25Qcm9qZWN0TGlzdCA9IHN0b3JhZ2VQcm9qZWN0cztcbiAgY29uc3QganNvblByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkoanNvblByb2plY3RMaXN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBqc29uUHJvamVjdHMpO1xuXG4gIHRhc2sudGFza0xpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgLy8gcmV0cmVpZXZlIGRhdGFcbiAgbGV0IHN0b3JhZ2VQcm9qZWN0TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIik7XG4gIGxldCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JhZ2VQcm9qZWN0TGlzdCk7XG4gIHJldHVybiBzdG9yYWdlUHJvamVjdHM7XG59XG5cbmV4cG9ydCB7IHNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UsIGRlbGV0ZVRvZG8sIGdldExvY2FsU3RvcmFnZSB9O1xuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmxldCB0YXNrTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBnZXRUYXNrRnJvbVByb2plY3QocHJvamVjdEluZGV4KSB7XG4gIGlmIChwcm9qZWN0LnByb2plY3RMaXN0W3Byb2plY3RJbmRleF0pIHtcbiAgICB0YXNrTGlzdCA9IHByb2plY3QucHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBDcmVhdGVUYXNrKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eVNjYWxlLCBwcm9qZWN0SW5kZXgpIHtcbiAgbGV0IHByaW9yaXR5O1xuICBpZiAocHJpb3JpdHlTY2FsZSA9PT0gXCJoaWdoXCIpIHtcbiAgICBwcmlvcml0eSA9IFwi4p2X77iP4p2X77iPXCI7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JpdHkgPSBcIlwiO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0SW5kZXgsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHlTY2FsZSwgcHJvamVjdEluZGV4KSB7XG4gIGNvbnN0IHRhc2sgPSBDcmVhdGVUYXNrKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5U2NhbGUsIHByb2plY3RJbmRleCk7XG4gIHRhc2tMaXN0LnB1c2godGFzayk7XG4gIHByb2plY3QudXBkYXRlUHJvamVjdExpc3QocHJvamVjdEluZGV4LCB0YXNrTGlzdCk7XG4gIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgZG9tLnJlbmRlclRvZG9MaXN0KHRhc2tMaXN0KTtcbn1cblxuZXhwb3J0IHsgdGFza0xpc3QsIGdldFRhc2tGcm9tUHJvamVjdCwgQ3JlYXRlVGFzaywgYWRkVGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyB0YXNrIGZyb20gXCIuL21vZHVsZXMvdGFza3MuanNcIjtcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSBcIi4vbW9kdWxlcy9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vbW9kdWxlcy9kb20uanNcIjtcbmltcG9ydCAqIGFzIHByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0LmpzXCI7XG5cbnByb2plY3QuZ2V0TG9jYWxTdG9yYWdlKCk7XG5kb20ucmVuZGVyUHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==