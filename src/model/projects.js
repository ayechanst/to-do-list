export class ToDoListContainer {
  constructor(type) {
    this.type = type;
  }
  makeContainers() {
    const daily = document.querySelector('.daily');
    const project = document.querySelector('.project');

    const title = document.createElement('h3');
    const button = document.createElement('button');

    if (this.type === 'daily') {
      title.innerHTML = 'To Do Today';
      button.innerHTML = 'Add Task';
      button.className = 'add-task';
      daily.appendChild(title);
      daily.appendChild(button);
    } else if (this.type === 'project') {
      title.innerHTML = 'Project';
      button.innerHTML = 'Add Project';
      button.className = 'add-project';
      project.appendChild(title);
      project.appendChild(button);
    }
    //
    title.className = 'section-title';
    //
    //
  }
}
