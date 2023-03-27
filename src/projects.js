export class ToDoListContainer {
  constructor(type) {
    this.type = type;
  }
  daily() {
    const daily = document.querySelector('.daily');
    const title = document.createElement('h3');
    //
    title.className = 'section-title';
    //
    title.innerHTML = 'Today';
    //
    daily.appendChild(title);
  }
}
// export let ToDoListContainer = {
//     //
//     title.className = 'section-title';
//     //
//     title.innerHTML = 'Today';
//     //
//     if (typeof title === 'undefined') {
//       console.log('fucked up');
//     } else {
//       console.log('not fucked up');
//     }
//     console.log(title);
//     console.log(daily);
//     daily.appendChild(title);
//   },
