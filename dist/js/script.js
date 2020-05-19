const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const X_SHADOW_CLASS = 'x'
const CIRCLE_SHADOW_CLASS = 'circle'
const board = document.getElementById('board')
const cellElements = document.querySelectorAll('[data-cell]')
const userInfo = document.querySelector('.infos')

const userMarkChoice = prompt("Hi Dear Hero, You Want To Play By `X` or `O`", "X or O")


let circleMarkTurn

startGame()

function startGame() {
    if (userMarkChoice.toUpperCase() === 'O') {
        circleMarkTurn = true
    }

    if (userMarkChoice.toUpperCase() === 'X') {
        userInfo.innerHTML = '<b>Xs</b> For <b>You</b><b><br>vs<br></b><b>Os</b> For The <b>AI</b><-( Soon )'
    } else if (userMarkChoice.toUpperCase() === 'O') {
        userInfo.innerHTML = '<b>Os</b> For <b>You</b><b><br>vs<br></b><b>Xs</b> For The <b>AI</b><-( Soon )'
    } else {
        userInfo.innerHTML = '<b>Xs</b> For <b>You</b><b><br>vs<br></b><b>Os</b> For The <b>AI</b><-( Soon )'
    }

    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    })
    placeShadowMark()
}

function handleClick(event) {
    let cell = event.target
    let currentMark = circleMarkTurn ? CIRCLE_CLASS : X_CLASS

    // 1 - PlaceMark
    placeMark(cell, currentMark)

    // 2 - Check For Wins?
    // 3 - Check For Drow?
    // 4 - Else Switch Turns
    swapMark()
    // 0 - Place Shadow of Mark
    placeShadowMark()

}

function placeMark(cell, currentMark) {
    cell.classList.add(currentMark)
}

function placeShadowMark() {
    board.classList.remove(CIRCLE_SHADOW_CLASS)
    board.classList.remove(X_SHADOW_CLASS)
    if (circleMarkTurn) {
        board.classList.add(CIRCLE_SHADOW_CLASS)
    } else {
        board.classList.add(X_SHADOW_CLASS)
    }
}

function swapMark() {
    circleMarkTurn = !circleMarkTurn
}