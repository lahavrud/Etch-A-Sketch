function createBoard(n){
    const boardContainer = document.querySelector('.board-container');
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

createBoard(16);