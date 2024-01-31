//is this necessary??
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

//Step8: function to display project array in the page
export function displayProject() {
  const projectDiv = document.querySelector("#projects");
  projectDiv.innerHTML = "";
  projectLists.forEach((project, index) => {
    let newDiv = `<div class="project-list">
      <p class="p-title">${project.title}</p>
      <img  class="delete-bin hide-bin" data-index="${index}" src="./images/delete.png" alt="delete" />
    </div>`;
    projectDiv.insertAdjacentHTML("beforeend", newDiv);
  });

  const deleteProject = document.querySelectorAll(".delete-bin");
  deleteProject.forEach((button) => {
    button.addEventListener("click", function () {
      const projectIndex = button.dataset.index;
      remove(projectIndex);
    });
  });
}

//Step9: function to delete the project

export function remove(index) {
  projectLists.splice(index, 1);
  displayProject();
}
