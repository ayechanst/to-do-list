import { Build } from './skeleton';

class Load {
  home() {
    const home = new Build();
    const project = new Build();
    const item = new Build();
    home.homePage();
    project.projectCard();
    item.toDoItemCard();
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
