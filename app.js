let randCell = Math.floor(Math.random()*9) + 1 
const mole = document.createElement('img')
mole.setAttribute('src', 'animal.png')
const cell = document.getElementById(randCell)
cell.appendChild(mole)