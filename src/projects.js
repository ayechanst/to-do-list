export class ToDoListContainer {
  constructor(type) {
    this.type = type;
  }
  makeContainers() {
    const daily = document.querySelector('.daily');
    const project = document.querySelector('.project');
    const title = document.createElement('h3');
    if (this.type === 'daily') {
      title.innerHTML = 'To Do Today';
      daily.appendChild(title);
    } else if (this.type === 'project') {
      title.innerHTML = 'project_name';
      project.appendChild(title);
    }
    //
    title.className = 'section-title';
    //
    //
  }
}
