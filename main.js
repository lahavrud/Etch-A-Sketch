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
    element.addEventListener('mouseover', () => element.style.backgroundColor= `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`);
}

const squareSize = document.querySelector("#size");

createBoard(16, boardContainer);

const reset = document.querySelector('button');

reset.addEventListener('click', () => {
    boardContainer.replaceChildren();
    createBoard(squareSize.value, boardContainer);
});

squareSize.addEventListener('change', (event) => {
    boardContainer.replaceChildren();
    createBoard(squareSize.value, boardContainer);
});