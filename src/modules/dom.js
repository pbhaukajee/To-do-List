import { projectLists, Project, addProjectToList } from "./project";

export default function Dom() {
  const addBtn = document.querySelector("#add");
  const cancelBtn = document.querySelector("#cancel");
  const addProject = document.querySelector("#add-project");
  const addInput = document.querySelector("#btn-input");
  const projectDiv = document.querySelector("#projects");
  const projectTitle = document.querySelector("#project-name");

  //Step4: Add projects
  addProject.addEventListener("click", function () {
    addProject.classList.add("hide-add-project");
    addInput.classList.remove("hide-btn-input");

    //clear input value if any
    projectTitle.value = "";
  });

  //Step8: function to display project array in the page
  function displayProject() {
    projectDiv.innerHTML = "";
    projectLists.forEach((project) => {
      let newDiv = `<div class="project-list">
      <p class="p-title">${project.title}</p>
      <img class="hide-bin" src="./images/delete.png" alt="delete" />
    </div>`;
      projectDiv.insertAdjacentHTML("beforeend", newDiv);
    });
  }

  //Step6: extract input info when "Add" button is clicked
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //Extract values from input
    let title = projectTitle.value;
    if (title === "") {
      return false;
    } else {
      addProjectToList(title);
      console.log("Project Lists:", projectLists);
      displayProject();
      addInput.reset();
      addProject.classList.remove("hide-add-project");
      addInput.classList.add("hide-btn-input");
    }
  });

  //Step7: cancel
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProject.classList.remove("hide-add-project");
    addInput.classList.add("hide-btn-input");
  });
}
