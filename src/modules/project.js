import * as dom from "./dom.js";
import * as storage from "./storage.js";
import * as task from "./tasks.js";

//Step1
let projectList = [];

function getLocalStorage() {
  let localProjects = localStorage.getItem("projectList");
  if (!localProjects) {
    addProject("Study");
    task.addTask("Practice Coding");
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
  storage.saveProjectToLocalStorage();
  dom.renderProjects();
}

function spliceProjectList(index) {
  if (index > -1) {
    projectList.splice(index, 1);
  }
  storage.saveProjectToLocalStorage();
}

function updateProjectList(index, list) {
  projectList[index].task = list;
  storage.saveProjectToLocalStorage();
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
  storage.saveProjectToLocalStorage();
}

export {
  projectList,
  CreateProject,
  addProject,
  spliceProjectList,
  updateProjectList,
  getLocalStorage,
  updateTaskArray,
};
