let randCell
let cell
let timeoutID
let score = 0
// Create an img element for the mole image
const mole = document.createElement('img')
mole.setAttribute('src', 'animal.png')
const scoreSpan = document.getElementById('score')

setTimeout(gameOver, 60000)
// Display the first mole after a random amount of time
let timeout = 800 + Math.floor(Math.random()*2000)
setTimeout(addMole, timeout)

function removeMole() {
    cell.removeEventListener('click', hitit)
    cell.removeChild(cell.firstChild)
    timeout = 800 + Math.floor(Math.random()*2000)
    timeoutID = setTimeout(addMole, timeout)
}

function addMole() {
    randCell = Math.floor(Math.random()*9) + 1 
    cell = document.getElementById(randCell)
    cell.appendChild(mole)
    cell.addEventListener('click', hitit)
    timeout = 800 + Math.floor(Math.random()*2000)
    timeoutID = setTimeout(removeMole, timeout)
}

function hitit() {
    this.removeEventListener('click', hitit)
    clearTimeout(timeoutID)
    removeMole()
    score = score + 1
    scoreSpan.innerHTML = score
    
}

function gameOver() {
    clearTimeout(timeoutID)
    scoreSpan.innerHTML = scoreSpan.innerHTML + ' Game over'
}