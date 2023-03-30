export class Build {
  head() {
    const content = document.getElementById('content');
    const titleContainer = document.createElement('div');
    const title = document.createElement('h1');
    //
    titleContainer.className = 'title-container';
    //
    title.innerHTML = 'Two-Do List';
    //
    titleContainer.appendChild(title);
    content.appendChild(titleContainer);
  }
  body() {
    const content = document.getElementById('content');
    const body = document.createElement('div');
    const dailyBody = document.createElement('div');
    const projectBody = document.createElement('div');
    //
    body.className = 'body';
    dailyBody.className = 'daily daily-and-project';
    projectBody.className = 'project daily-and-project';
    //
    body.appendChild(dailyBody);
    body.appendChild(projectBody);
    content.appendChild(body);
  }
  foot() {
    const content = document.getElementById('content');
    const foot = document.createElement('div');
    const byLine = document.createElement('div');
    //
    foot.className = 'foot';
    //
    byLine.innerHTML = 'Created by Aye Chan';
    //
    foot.appendChild(byLine);
    content.appendChild(foot);
  }
  project() {
    const project = document.createElement('div');
    let createProjectBtn = document.createElement('button');
    const projectBody = document.createElement('div');
    //
    project.className = 'project';
    createProjectBtn.id = 'createProjectBtn';
    projectBody.className = 'project-body';
    //
    project.innerHTML = 'Complete Icewind Dale';
    createProjectBtn.innerHTML = 'Create New Project';
    //
    createProjectBtn.addEventListener('click', () => {
      let projectName = prompt('project name: ');
      console.log(projectName);
    });
    project.appendChild(createProjectBtn);
    project.appendChild(projectBody);
    content.appendChild(project);
  }
}
