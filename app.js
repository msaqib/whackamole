// Create an img element for the mole image
const mole = document.createElement('img')
mole.setAttribute('src', 'animal.png')
// Pick a cell at random
let randCell = Math.floor(Math.random()*9) + 1 

// Display the mole in the randomly picked cell
const cell = document.getElementById(randCell)
cell.appendChild(mole)

let timeout = 800 + Math.floor(Math.random()*2000)
setTimeout(removeMole, timeout)

function removeMole() {
    cell.removeChild(cell.firstChild)
}