//Recupero gli elementi dal file html
const form = document.querySelector('form')
const grid = document.querySelector('.grid')
const select = document.querySelector('select')
const button = document.querySelector('button')
//Dati iniziali 

let rows = 10
let cols = 10
const numberOfCells = rows * cols

let score = 0

//FUNZIONI
const createCell = (content) => {
    const cellGenerator = document.createElement('div')
    cellGenerator.className = 'cell'
    cellGenerator.innerText = content;
    return cellGenerator;
}


//Svolgimento programma
for (let i = 1; i <= numberOfCells; i++) {
    const cell = createCell(i)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        grid.appendChild(cell)

    })
    //CLICK DELLA CELLA
    cell.addEventListener('click', function () {
        if (cell.classList.contains('clicked')) return
        score++;
        cell.classList.add('clicked')
        console.log(cell.innerText)
        console.log(score)
    })
}







