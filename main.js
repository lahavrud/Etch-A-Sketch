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
    element.addEventListener('mouseover', () =>{
        const mainPalette = ["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"];
        const rndColor = mainPalette[Math.floor(Math.random()*5)];
        element.style.backgroundColor= rndColor;
    });
}


const squareSize = document.querySelector("#size");

createBoard(16, boardContainer);

const reset = document.querySelector('button');

reset.addEventListener('click', () => {
    boardContainer.replaceChildren();
    createBoard(squareSize.value, boardContainer);
});

squareSize.addEventListener('change', (event) => {
    newSize = event.target.value;
    newSize = (newSize < 10) ? 10 : (newSize > 30) ? 30 : newSize; 
    squareSize.value = newSize;
    boardContainer.replaceChildren();
    createBoard(newSize, boardContainer);
});