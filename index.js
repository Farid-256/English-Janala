const loadLesson = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(info => displayLesson(info.data))
}

const displayLesson = (lessons) => {
    const levelContainer = document.getElementById('level-container')
    levelContainer.innerHTML = ''

    for(let lesson of lessons) {
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
        <button class="flex gap-1 items-center border border-gray-400 px-5 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
        <img src="./assets/fa-book-open.png" alt=""> Lesson ${lesson.level_no} 
        </button>
        `
        levelContainer.appendChild(btnDiv)
    }
}
loadLesson()