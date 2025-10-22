let boardContainer = document.querySelector('.board-container');
function createBoard(n, boardContainer){
    for (let i = 0; i < n; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        for (let z = 0; z < n; z++) {
            const cell = document.createElement('div');
            colorOnHover(cell);
            cell.classList.add('cell');
            rowContainer.appendChild(cell);
        }
        boardContainer.appendChild(rowContainer);
    }
}

function colorOnHover (element){
    element.addEventListener('mouseover', () => element.style.backgroundColor='green');
}
createBoard(16, boardContainer);
const reset = document.querySelector('button');
reset.addEventListener('click', () => {
    boardContainer.replaceChildren();
    createBoard(16, boardContainer);
});
