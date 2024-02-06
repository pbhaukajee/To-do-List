import * as project from "./project.js";
import * as task from "./tasks.js";

function saveProjectToLocalStorage() {
  const projects = project.projectList;
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

  task.taskList.splice(taskIndex, 1);
}

function getLocalStorage() {
  let storageProjectList = localStorage.getItem("projectList");
  let storageProjects = JSON.parse(storageProjectList);
  return storageProjects;
}

export { saveProjectToLocalStorage, deleteTodo, getLocalStorage };
