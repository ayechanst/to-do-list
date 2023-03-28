import { ToDoListContainer } from '../model/projects';

class Birth {
  giveBirth() {
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
  }
}

const toDoListMother = new Birth();
toDoListMother.giveBirth();
