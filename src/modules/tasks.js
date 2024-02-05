import * as dom from "./dom.js";
import * as project from "./project.js";

let taskList = [];

function getTaskFromProject(projectIndex) {
  if (project.projectList[projectIndex]) {
    taskList = project.projectList[projectIndex].task;
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
  project.updateProjectList(projectIndex, taskList);
  console.log(taskList);
  dom.renderTodoList(taskList);
}

export { taskList, getTaskFromProject, CreateTask, addTask };
