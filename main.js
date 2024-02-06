/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom.js */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project.js */ \"./src/modules/project.js\");\n\n\n\n_modules_project_js__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage();\n_modules_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearProjectDisplay: () => (/* binding */ clearProjectDisplay),\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTodoList: () => (/* binding */ renderTodoList)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\n\n\nlet currentProjectIndex = 0;\n\nfunction changeCurrentProjectIndex(index) {\n  currentProjectIndex = index;\n}\n\n//step5\nconst addProjectBtn = document.querySelector(\".addProjectBtn\");\nconst displayAddProject = document.querySelector(\"#display-add-project\");\n\naddProjectBtn.addEventListener(\"click\", () => showProjectForm());\n\nfunction showProjectForm() {\n  addProjectBtn.classList.add(\"hide-btn-active\");\n  displayAddProject.classList.remove(\"hide-input\");\n  hideTaskForm();\n}\n\n//step6\nconst projectCancelBtn = document.querySelector(\".project-cancel-btn\");\nprojectCancelBtn.addEventListener(\"click\", () => hideProjectForm());\nfunction hideProjectForm() {\n  projectInput.value = \"\";\n  displayAddProject.classList.add(\"hide-input\");\n  addProjectBtn.classList.remove(\"hide-btn-active\");\n}\n\n//Step7\nconst projectAddBtn = document.querySelector(\".project-add-btn\");\nconst projectInput = document.querySelector(\".add-project-input\");\nprojectAddBtn.addEventListener(\"click\", () => addProjectForm());\nfunction addProjectForm() {\n  if (!projectInput.value) {\n    return false;\n  }\n  _project_js__WEBPACK_IMPORTED_MODULE_0__.addProject(projectInput.value);\n  projectInput.value = \"\";\n}\n\n//step8\nfunction clearProjectDisplay() {\n  const projectListContainer = document.querySelector(\"#project-list\");\n  projectListContainer.textContent = \"\";\n}\n\n//Step9\nfunction renderProjects() {\n  clearProjectDisplay();\n  const projectListContainer = document.querySelector(\"#project-list\");\n\n  _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project, index) => {\n    projectListContainer.innerHTML += `<div class=\"project-select flex-div\" data-project-index=\"${index}\">\n        <p class=\"project-select data-project-index=\"${index}\">${project.title}<p><img src=./images/delete.png alt=\"delete-bin\" class=\"delete-bin hide-bin\">`;\n  });\n\n  listenForProjectClick();\n}\n\n//Step10\nfunction listenForProjectClick() {\n  const projectButtons = document.querySelectorAll(\".project-select\");\n  projectButtons.forEach((button) => {\n    button.addEventListener(\"click\", handleProjectClick);\n  });\n}\n\n//Step11\nfunction handleProjectClick(e) {\n  const listTitle = document.querySelector(\".list-title\");\n  listTitle.textContent = e.target.innerText;\n  hideProjectForm();\n  hideTaskForm();\n  showAddTaskBtn();\n\n  const projectIndex = this.getAttribute(\"data-project-index\");\n\n  changeCurrentProjectIndex(projectIndex);\n  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.getTaskFromProject(currentProjectIndex);\n\n  renderTodoList(_tasks_js__WEBPACK_IMPORTED_MODULE_2__.taskList);\n\n  if (e.target.classList.contains(\"delete-bin\")) {\n    deleteProjectFromDom(projectIndex);\n    clearTaskDisplay();\n    return;\n  }\n}\n\nfunction deleteProjectFromDom(index) {\n  _project_js__WEBPACK_IMPORTED_MODULE_0__.spliceProjectList(index);\n  changeCurrentProjectIndex(0);\n  renderProjects();\n}\n\nconst addTaskBtn = document.querySelector(\".add-task-btn\");\nconst displayAddTask = document.querySelector(\"#display-add-task\");\naddTaskBtn.addEventListener(\"click\", showTaskForm);\nfunction showTaskForm() {\n  addTaskBtn.classList.add(\"hide-btn-active\");\n  displayAddTask.classList.remove(\"hide-input\");\n\n  hideProjectForm();\n}\n\nconst taskCancelBtn = document.querySelector(\".task-cancel-btn\");\ntaskCancelBtn.addEventListener(\"click\", hideTaskForm);\nfunction hideTaskForm() {\n  displayAddTask.classList.add(\"hide-input\");\n  addTaskBtn.classList.remove(\"hide-btn-active\");\n}\n\nconst taskAddBtn = document.querySelector(\".task-add-btn\");\ntaskAddBtn.addEventListener(\"click\", addTaskForm);\nfunction addTaskForm() {\n  hideTaskForm();\n  const taskInput = document.querySelector(\".add-task-input\");\n  const priorityScale = document.querySelector(\".priority\");\n  const dateInput = document.querySelector(\".task-due-date\");\n  if (!taskInput.value) {\n    return;\n  }\n  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.getTaskFromProject(currentProjectIndex);\n  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.addTask(\n    taskInput.value,\n    dateInput.value,\n    priorityScale.value,\n    currentProjectIndex\n  );\n  taskInput.value = \"\";\n  dateInput.value = \"\";\n  priorityScale.value = \"low\";\n}\n\nfunction clearTaskDisplay() {\n  const todoListContainer = document.querySelector(\".todo-list\");\n  todoListContainer.textContent = \"\";\n}\n\nfunction renderTodoList(list) {\n  clearTaskDisplay();\n\n  const todoListContainer = document.querySelector(\".todo-list\");\n  list.forEach((todo, todoIndex) => {\n    todoListContainer.innerHTML += `<div class=\"todo-item\" data-project-index=\"${todo.projectIndex}\" data-task-index=\"${todoIndex}\">\n    <div class=\"task-left\">\n    <p class=\"todo-title\">• ${todo.title}</p>\n    <p class=\"t-priority\">${todo.priority}</p>\n    </div>\n    <div class=\"task-right\">\n    <p class=\"todo-due-date\">${todo.dueDate}</p>\n    <img  class=\"cross-bin hide-cross\" data-task-index=\"${todoIndex}\" src=\"./images/cross.png\" alt=\"cross\" />\n    </div>\n  </div>`;\n  });\n\n  handleTodoBtnClicks();\n}\n\nfunction handleTodoBtnClicks() {\n  const taskDelete = document.querySelectorAll(\".cross-bin\");\n  taskDelete.forEach((btn) => btn.addEventListener(\"click\", deleteTaskFromDom));\n}\n\nfunction deleteTaskFromDom(e) {\n  const projectIndex = e.target.parentNode.parentNode.dataset.projectIndex;\n  const taskIndex = e.target.parentNode.parentNode.dataset.taskIndex;\n\n  _storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo(projectIndex, taskIndex);\n  let storageProjectList = localStorage.getItem(\"projectList\");\n  let storageProjects = JSON.parse(storageProjectList);\n  renderTodoList(storageProjects[projectIndex].task);\n}\n\nfunction showAddTaskBtn() {\n  const addProjectBtn = document.querySelector(\".add-task-btn\");\n  addProjectBtn.classList.remove(\"hide-btn-active\");\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateProject: () => (/* binding */ CreateProject),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),\n/* harmony export */   projectList: () => (/* binding */ projectList),\n/* harmony export */   spliceProjectList: () => (/* binding */ spliceProjectList),\n/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList),\n/* harmony export */   updateTaskArray: () => (/* binding */ updateTaskArray)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/modules/dom.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\n\n\n//Step1\nlet projectList = [];\n\nfunction getLocalStorage() {\n  let localProjects = localStorage.getItem(\"projectList\");\n  if (!localProjects) {\n    addProject(\"Study\");\n    _tasks_js__WEBPACK_IMPORTED_MODULE_2__.addTask(\"Practice Coding\");\n  } else {\n    projectList = JSON.parse(localProjects);\n  }\n  return projectList;\n}\n\n//Step2\nfunction CreateProject(title) {\n  const task = [];\n  return {\n    title,\n    task,\n  };\n}\n\n//Step3\nfunction addProject(title) {\n  const project = CreateProject(title);\n  projectList.push(project);\n  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();\n  _dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects();\n}\n\nfunction spliceProjectList(index) {\n  if (index > -1) {\n    projectList.splice(index, 1);\n  }\n  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();\n}\n\nfunction updateProjectList(index, list) {\n  projectList[index].task = list;\n  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();\n}\n\nfunction updateTaskArray(\n  projectIndex,\n  taskIndex,\n  newName,\n  newPriority,\n  newDate\n) {\n  projectList[projectIndex].task[taskIndex].title = newName;\n  projectList[projectIndex].task[taskIndex].priority = newPriority;\n  projectList[projectIndex].task[taskIndex].dueDate = newDate;\n  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),\n/* harmony export */   saveProjectToLocalStorage: () => (/* binding */ saveProjectToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\n\n//Step4\nfunction saveProjectToLocalStorage() {\n  const projects = _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList;\n  const projectListInJSON = JSON.stringify(projects);\n  localStorage.setItem(\"projectList\", projectListInJSON);\n}\n\nfunction deleteTodo(projectIndex, taskIndex) {\n  let storageProjectList = localStorage.getItem(\"projectList\");\n  let storageProjects = JSON.parse(storageProjectList);\n\n  storageProjects[projectIndex].task.splice(taskIndex, 1);\n\n  const jsonProjectList = storageProjects;\n  const jsonProjects = JSON.stringify(jsonProjectList);\n  localStorage.setItem(\"projectList\", jsonProjects);\n\n  _tasks_js__WEBPACK_IMPORTED_MODULE_1__.taskList.splice(taskIndex, 1);\n}\n\nfunction getLocalStorage() {\n  // retreieve data\n  let storageProjectList = localStorage.getItem(\"projectList\");\n  let storageProjects = JSON.parse(storageProjectList);\n  return storageProjects;\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateTask: () => (/* binding */ CreateTask),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   getTaskFromProject: () => (/* binding */ getTaskFromProject),\n/* harmony export */   taskList: () => (/* binding */ taskList)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/modules/dom.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/modules/project.js\");\n\n\n\nlet taskList = [];\n\nfunction getTaskFromProject(projectIndex) {\n  if (_project_js__WEBPACK_IMPORTED_MODULE_1__.projectList[projectIndex]) {\n    taskList = _project_js__WEBPACK_IMPORTED_MODULE_1__.projectList[projectIndex].task;\n  } else {\n    return;\n  }\n}\n\nfunction CreateTask(title, dueDate, priorityScale, projectIndex) {\n  let priority;\n  if (priorityScale === \"high\") {\n    priority = \"❗️❗️\";\n  } else {\n    priority = \"\";\n  }\n  return {\n    title,\n    dueDate,\n    priority,\n    projectIndex,\n  };\n}\n\nfunction addTask(name, dueDate, priorityScale, projectIndex) {\n  const task = CreateTask(name, dueDate, priorityScale, projectIndex);\n  taskList.push(task);\n  _project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectList(projectIndex, taskList);\n  console.log(taskList);\n  _dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTodoList(taskList);\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/tasks.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;