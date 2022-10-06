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
  //board need`s` all possible starting winning combos declared in variable, set to false.
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
let findChecker = function(checker) {
  let parse = parseInt(checker)
  return board.indexOf(parse)
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
  
  //console.log(handleTileClick)
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


function resetCurrentChecker(){
  currentChecker.checker = -1
  currentChecker.idxOfChecker = -1
  currentChecker.isKing = false
  currentChecker.tileSeven = false,
  currentChecker.tileNine = false,
  currentChecker.tileFourteen = false,
  currentChecker.tileEighteen = false,
  currentChecker.tileMinuseSeven = false,
  currentChecker.tileMinusNine = false,
  currentChecker.tileMinusFourteen = false,
  currentChecker.tileMinusEighteen = false
}

function getCurrentChecker() {
  currentChecker.checker = parseInt(event.target.id)
  currentChecker.idxOfChecker = findChecker(currentChecker.checker)
  kingCheckers()
  console.log(getCurrentChecker)
}
function resetPiece() {
  for(let i = 0; i < selectedTiles.length; i++) {
    selectedTiles[i].style.border = '2px solid yellow'
  }
  //console.log(resetPiece)
  resetCurrentChecker()
  getCurrentChecker()
}



function kingCheckers(){
  if(document.getElementById(currentChecker.checker).classList.contains('king')) {
    currentChecker.isKing = true
  } else {
    currentChecker.isKing = false
  }
  availSpaces()
}

function availSpaces() {
  if (board[currentChecker.idxOfChecker + 7] === null &&
  tiles[currentChecker.idxOfChecker + 7].classList.contains('blank') !== true) {
    currentChecker.tileSeven = true
  }
  if (board[currentChecker.idxOfChecker + 9] === null &&
    tiles[currentChecker.idxOfChecker + 9].classList.contains('blank') !== true) {
      currentChecker.tileNine = true
  }
  if (board[currentChecker.idxOfChecker - 7] === null &&
    tiles[currentChecker.idxOfChecker - 7].classList.contains('blank') !== true) {
      currentChecker.tileMinuseSeven = true
    }
    if (board[currentChecker.idxOfChecker - 9] === null &&
      tiles[currentChecker.idxOfChecker - 9].classList.contains('blank') !== true) {
        currentChecker.tileMinusNine = true
      }
}
console.log(tiles)
handleTileClick()
