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

const displayLevelWords = (words) => {
    const wordContainer = document.getElementById('word-container')
    wordContainer.innerHTML = ''

    if (words.length === 0) {
        wordContainer.innerHTML = `<div class="text-center col-span-full">
        <img class="mx-auto" src="./assets/alert-error.png" alt="">
                <p class="text-gray-400 text-2xl font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।  </p>
                <h2 class="text-gray-800 text-3xl font-bangla">নেক্সট Lesson এ যান</h2>
            </div>`

        return
    }

    words.forEach(word => {
        const card = document.createElement('div')
        card.innerHTML = `
         <div class="bg-white p-5 text-center rounded-md shadow-2xl space-y-5">
                <h2 class="font-bold text-2xl"> ${word.word ? word.word : "শব্দ পাওয়া যায়নি"} </h2>

                <p class=" font-semibold text-xl"> Meaning / pronunciation </p>

                <p class="font-semibold text-xl font-bangla"> ${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি"}</p>

                <div class="flex justify-between items-center">
                    <button onclick="my_modal_5.showModal()" class="btn"> <i class="fa-solid fa-circle-info"></i>  </button>
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