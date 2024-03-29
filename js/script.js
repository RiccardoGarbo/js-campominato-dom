//Recupero gli elementi dal file html
const form = document.querySelector('form')
const grid = document.querySelector('.grid')
const select = document.querySelector('select')
const button = document.querySelector('button')
const scoreDisplay = document.getElementById('score')
const startGame = event => {
    event.preventDefault();
    //FUNZIONI
    //Funzione per generare una cella
    const createCell = (cellNumber) => {
        const cellGenerator = document.createElement('div')
        cellGenerator.className = 'cell'
        cellGenerator.innerText = cellNumber;
        return cellGenerator;
    }

    //Funzione per generare le bombe ,casuali, diverse tra loro, nelle celle a disposizione
    const generatorBombs = (maxBombNumber, totalBombs) => {
        const bombs = []
        while (bombs.length < totalBombs) {
            const randomNumber = Math.floor(Math.random() * maxBombNumber) + 1
            if (!bombs.includes(randomNumber))
                bombs.push(randomNumber)
            console.log(bombs)

        }
        return bombs
    }
    // Funzione per stabilire l'ENDGAME

    const endGame = (score, hasWon = false) => {
        const message = hasWon ? 'Hai vinto! Complimenti' : `Hai perso! Il punteggio è di ${score} punti`
        alert(message)

    }

    //Impedire che si formino più griglie
    grid.innerText = ''

    //Recupero il valore della select
    let level = select.value


    //Assegno la classe alla griglia
    grid.classList.add(level)

    //Valori colonne e righe
    let rows;
    let cols;
    switch (level) {
        case 'easy':
            rows = 10
            cols = 10
            break;
        case 'medium':
            rows = 9
            cols = 9
            break;
        case 'hard':
            rows = 7
            cols = 7
            break;
    }



    //Totale delle celle
    const numberOfCells = rows * cols
    // Contegio dello score
    let score = 0
    scoreDisplay.innerText = score

    // Informazioni delle bombe
    const totalBombs = 16;

    //Punteggio massimo dell'utente
    const maxScore = numberOfCells - totalBombs;

    //Generazione delle bombe
    const bombs = generatorBombs(numberOfCells, totalBombs)

    //-----------------------------------------
    //-----------------------------------------
    //-----------------------------------------
    //-----------------------------------------

    //Svolgimento programma

    for (let i = 1; i <= numberOfCells; i++) {
        const cell = createCell(i)
        //CLICK DELLA CELLA
        cell.addEventListener('click', () => {
            if (cell.classList.contains('clicked')) return
            cell.classList.add('clicked')
            const hitBomb = bombs.includes(parseInt(cell.innerText))
            console.log(cell.innerText)
            //Controllo se ha colpito una bomba quindi ha perso
            if (hitBomb) {
                cell.classList.add('explosion')
                endGame(score, false)

            }
            //Aumento del punteggio
            score++
            scoreDisplay.innerText = score
            //Controllo se l'utente ha raggiunto il punteggio massimo e quindi se ha VINTO
            if (score === maxScore) {
                endGame(score, true)


            }

        })
        grid.appendChild(cell)
    }
}
form.addEventListener('submit', startGame)







