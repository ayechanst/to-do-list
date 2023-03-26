const content = document.getElementById ('content')

let skeleton = {
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
        const dailyBody = document.createElement('div')
        const projectBody = document.createElement('div')
        //
        dailyBody.className = 'daily body'
        projectBody.className  = 'project body'
        //
        content.appendChild(dailyBody)
        content.appendChild(projectBody)
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

let generateHTML = {
    create(page) {
        if (content.innerHTML == false || page === 'home') {
            skeleton.head()
            skeleton.body()
            skeleton.foot()

        }
    }
}

generateHTML.create()