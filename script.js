//Variables
let board = [
  [0, -1, 0, -1, 0, -1, 0, -1],
  [-1, 0, -1, 0, -1, 0, -1, 0],
  [0, -1, 0, -1, 0, -1, 0, -1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0]
]

let turn = true
let darkPoints = 12
let lightPoints = 12
let selectedTiles
let currentChecker = {
  checker: -1,
  idxOfChecker: -1,
  isKing: false,
  //board needs all possible starting winning combos declared in variable, set to false.
  // need at least 8, four for each side
  tileSeven: false,
  tileNine: false,
  tileFourteen: false,
  tileEighteen: false,
  tileMinuseSeven: false,
  tileMinusNine: false,
  tileMinusFourteen: false,
  tileMinusEighteen: false
}

const tiles = document.querySelectorAll('div')
const darkChecker = document.querySelectorAll('.dark-piece')
const lightChecker = document.querySelectorAll('.light-piece')
const darkTile = document.querySelectorAll('.dark-tile')
const replayBtn = document.getElementById('replay-button')

function handleTileClick() {
  //grab turn and iterate over length of both lights and dark checker
  //attach event listener of click to each
  if (turn) {
    for (let i = 0; i < darkChecker.length; i++)
      darkChecker[i].addEventListener('click', handleLightDarkCheckers)
  } else {
    for (let i = 0; i < lightChecker.length; i++)
      lightChecker[i].addEventListener('click', handleLightDarkCheckers)
  }
  
  console.log(handleTileClick)
}

function handleLightDarkCheckers() {
  if (turn) {
    selectedTiles = darkChecker
  } else {
    selectedTiles = lightChecker
  }
  removeHandleChecker()
  resetPiece()
}
function removeHandleChecker() {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].removeAttribute('onclick')
  }
  
}
function resetPiece() {
  for(let i = 0; i < selectedTiles.length; i++) {
    selectedTiles[i].style.border = '2px solid black'
  }
  console.log(resetPiece)
}

handleTileClick()
