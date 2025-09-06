const loadLesson = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(info => displayLesson(info.data))
}

const loadLevelWord = (id) => {
    const api = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(api)
        .then(res => res.json())
        .then(data => displayLevelWords(data.data))
}

// id
// :
// 82
// level
// :
// 1
// meaning
// :
// "গাড়ি"
// pronunciation
// :
// "কার"
// word
// :
// "Car"

const displayLevelWords = (words) => {
    const wordContainer = document.getElementById('word-container')
    wordContainer.innerHTML = ''

    words.forEach(word => {
        console.log(word)
        const card = document.createElement('div')
        card.innerHTML = `
         <div class="bg-white p-5 text-center rounded-md shadow-2xl space-y-5">
                <h2 class="font-bold text-2xl"> ${word.word} </h2>
                <p class=" font-semibold text-xl"> Meaning / pronunciation </p>
                <p class="font-semibold text-xl font-bangla"> ${word.meaning} / ${word.pronunciation}</p>

                <div class="flex justify-between items-center">
                    <button class="btn"> <i class="fa-solid fa-circle-info"></i>  </button>
                    <button class="btn"> <i class="fa-solid fa-volume-high"></i>  </button>
                    
                </div>

            </div>
        `
        wordContainer.appendChild(card)
    })
}

const displayLesson = (lessons) => {
    const levelContainer = document.getElementById('level-container')
    levelContainer.innerHTML = ''

    for (let lesson of lessons) {
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="flex gap-1 items-center border border-gray-400 px-5 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
        <img src="./assets/fa-book-open.png" alt=""> Lesson ${lesson.level_no} 
        </button>
        `
        levelContainer.appendChild(btnDiv)
    }
}
loadLesson()