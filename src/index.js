import { ToDoListContainer } from '../projects';

class Load {
  home() {
    const skeletonHead = new Build();
    const skeletonBody = new Build();
    const skeletonFoot = new Build();
    skeletonHead.head();
    skeletonBody.body();
    skeletonFoot.foot();
  }
  project() {
    // load the projects
  }
  tasks() {
    // load the tasks
  }
}

const toDoList = new Load();
toDoList.home();
