//Step1:
export const projectLists = [];

//Step2: create constructor
export function Project(title) {
  this.title = title;
}

//Step3: add new project to the project lists
export function addProjectToList(title) {
  const newProject = new Project(title);
  projectLists.push(newProject);
}

//Step7: function to display project array in the page
export function displayProject() {
  const projectDiv = document.querySelector("#projects");
  //to avoid duplication of previously created div
  projectDiv.innerHTML = "";

  //add new div to display
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

//Step8: function to delete the project

export function remove(index) {
  projectLists.splice(index, 1);
  displayProject();
}
