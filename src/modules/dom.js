import {
  projectLists,
  Project,
  addProjectToList,
  displayProject,
} from "./project";

export default function Dom() {
  const addBtn = document.querySelector("#add");
  const cancelBtn = document.querySelector("#cancel");
  const addProject = document.querySelector("#add-project");
  const addInput = document.querySelector("#btn-input");
  const projectTitle = document.querySelector("#project-name");

  //Step4: Add projects
  addProject.addEventListener("click", function () {
    addProject.classList.add("hide-add-project");
    addInput.classList.remove("hide-btn-input");

    //clear input value if any
    projectTitle.value = "";
  });

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

//Step10: delete default projects
const deleteDefaultProject = document.querySelectorAll(".delete-default-bin");
const defaultProjectList = document.querySelectorAll(".project-list");
deleteDefaultProject.forEach((button, index) => {
  button.addEventListener("click", function () {
    const defaultProject = defaultProjectList[index];
    defaultProject.remove();
  });
});
