import Dom from "./dom";

//Step1:
export const projectLists = [];

//Step2: constructor
export function Project(title) {
  this.title = title;
}

//Step3: add new project to the project lists
export function addProjectToList(title) {
  const newProject = new Project(title);
  projectLists.push(newProject);
}
