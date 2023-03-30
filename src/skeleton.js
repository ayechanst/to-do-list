export class Build {
  projectCard(name) {
    const projectTitle = document.createElement('div');
    let createProjectBtn = document.createElement('button');
    const projectContainer = document.createElement('section');
    //
    projectTitle.className = 'project-title';
    createProjectBtn.id = 'createProjectBtn';
    projectContainer.className = 'project-container';
    //
    project.innerHTML = `${name}`;
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
