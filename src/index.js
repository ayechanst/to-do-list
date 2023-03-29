import { Build } from './skeleton';

class Load {
  home() {
    const head = new Build();
    const body = new Build();
    const foot = new Build();
    // const project = new Build();
    head.head();
    // project.project();
    body.body();
    foot.foot();
  }
  project() {
    // for each project in project data base, load project name
  }
  tasks() {
    // load the tasks
  }
}

const toDoList = new Load();
toDoList.home();
