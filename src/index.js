import { ToDoListContainer } from './projects';

export class skeleton {
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
    const navBar = document.createElement('div');
    const projectBody = document.createElement('div');
    //
    body.className = 'body';
    dailyBody.className = 'daily daily-and-project';
    navBar.className = 'nav-bar';
    projectBody.className = 'project daily-and-project';
    //
    body.appendChild(dailyBody);
    body.appendChild(navBar);
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
}

const skeletonHead = new skeleton();
const skeletonBody = new skeleton();
const skeletonFoot = new skeleton();
const daily = new ToDoListContainer('daily');
const project = new ToDoListContainer('project');

skeletonHead.head();
skeletonBody.body();
daily.makeContainers();
project.makeContainers();
skeletonFoot.foot();
