
const daily = document.querySelector('daily')

export class ToDoListContainer {
    constructor(type) {
        this.type = type
    }
    daily() {
        const title = document.createElement('h3')
        //
        title.className = 'section-title'
        // 
        title.innerHTML = 'Today'
        //
        daily.appendChild(title)        
    }
}

export let project = new ToDoListContainer('daily')
