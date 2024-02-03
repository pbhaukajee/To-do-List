export const projectContainer = document.querySelector("#projects");
export const TaskHeading = document.querySelector(".task-heading");

//Step2: create constructor
export function Project(title) {
  this.title = title;
}

//Step19 local storage
export const LOCAL_STORAGE_PROJECT_KEY = "project.lists";
export const LOCAL_STORAGE_PROJECT_ID_KEY = "project.selectedProjectId";
export let projectLists =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
export let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_PROJECT_ID_KEY
);

//step23
projectContainer.addEventListener("click", (e) => {
  if (e.target.className === "project-list") {
    selectedProjectId = e.target.id;
    saveAndDisplay();
  }
});

//Step21
export function saveAndDisplay() {
  save();
  displayProject();
}

//step20
export function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectLists));
  localStorage.setItem(LOCAL_STORAGE_PROJECT_ID_KEY, selectedProjectId);
}

//Step18
window.addEventListener("load", () => {
  // Display projects only if there are projects to display
  if (projectLists.length > 0) {
    saveAndDisplay();
  }
});

//Step3: add new project to the project lists
export function addProjectToList(title) {
  const newProject = new Project(title);
  projectLists.push(newProject);
}

//Step7: function to display project array in the page
export function displayProject() {
  //to avoid duplication of previously created div
  projectContainer.innerHTML = "";
  renderProject();
  deleteProject();
}

//Step8: function to remove an item
export function remove(index) {
  projectLists.splice(index, 1);
  saveAndDisplay();
}

//step8 function to remove an specific project
export function deleteProject() {
  const delProject = document.querySelectorAll(".delete-bin");
  delProject.forEach((button) => {
    button.addEventListener("click", function () {
      const projectIndex = button.dataset.index;
      remove(projectIndex);
    });
  });
}

//step8
export function renderProject() {
  //add new div to display
  projectLists.forEach((project, index) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("project-list");
    newDiv.id = index;

    newDiv.innerHTML = `
      <p class="p-title">${project.title}</p>
      <img class="delete-bin hide-bin" data-index="${index}" src="./images/delete.png" alt="delete" />
    `;
    if (newDiv.id === selectedProjectId) {
      newDiv.classList.add("active-list");
    }
    projectContainer.appendChild(newDiv);
  });
}
