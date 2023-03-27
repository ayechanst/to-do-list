import { project } from 'projects.js'
const content = document.getElementById ('content')

export let skeleton = {
    head: function makeHead() {
        const titleContainer = document.createElement('div')
        const title = document.createElement('h1')
        //
        titleContainer.className = 'title-container'
        //
        title.innerHTML = 'Two-Do List'
        //
        titleContainer.appendChild(title)
        content.appendChild(titleContainer)
    },
    body: function makeBody() {
        const body = document.createElement('div')
        const dailyBody = document.createElement('div')
        const navBar = document.createElement('div')
        const projectBody = document.createElement('div')
        //
        body.className = 'body'
        dailyBody.className = 'daily daily-and-project'
        navBar.className = 'nav-bar'
        projectBody.className = 'project daily-and-project'
        //
        body.appendChild(dailyBody)
        body.appendChild(navBar)
        body.appendChild(projectBody)
        content.appendChild(body)
    },
    foot: function makeFoot() {
        const foot = document.createElement('div')
        const byLine = document.createElement('div')
        // 
        foot.className = 'foot'
        //
        byLine.innerHTML = 'Created by Aye Chan'
        //
        foot.appendChild(byLine)
        content.appendChild(foot)
    }

}

skeleton.head()
skeleton.body()
project.daily()
skeleton.foot()
