export class Build {
  projectCard() {
    const createProjectBtn = document.querySelectorAll('.create-project-btn');
    const projectTitle = document.createElement('div');
    const projectContainer = document.createElement('section');
    // the card is going to have buttons delete or mark complete
    projectTitle.className = 'project-title';
    projectContainer.className = 'project-container';
    //
    project.innerHTML = `example project`;
    createProjectBtn.innerHTML = 'Create New Project';
    //
    createProjectBtn.addEventListener('click', () => {
      let projectName = prompt('project name: ');
      console.log(projectName);
    });
    project.appendChild(createProjectBtn);
    project.appendChild(projectBody);
    dailyBody.appendChild(project);
  }

  toDoItemCard() {
    const toDoItem = document.createElement('div');
    let createToDoItemBtn = document.createElement('button');
    const toDoItemBody = document.createElement('div');
    //
    toDoItem.className = 'to-do-item';
    createToDoItemBtn.id = 'createToDoItemBtn';
    toDoItemBody.className = 'to-do-item-body';
    //
    toDoItem.innerHTML = 'Prepare next session';
    createToDoItemBtn.innerHTML = 'Create New To-Do';
    //
    createToDoItemBtn.addEventListener('click', () => {
      console.log('make to do!');
    });
    toDoItemBody.appendChild(createToDoItemBtn);
    content.appendChild(toDoItemBody);
  }
}
