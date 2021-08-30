const container = document.querySelector('#container');
let rows = document.getElementsByClassName('grid-row');
let cells = document.getElementsByClassName('grid-column');

defaultGrid();


function defaultGrid(){
    createRow(18);
    createColumn(18);
}

function createRow(rowNum){
    for (let i = 0; i<rowNum;i++){
        let row = document.createElement('div');
        container.appendChild(row).className= 'grid-row';
    }
}

function createColumn(cellNum){
    for (let i = 0; i<rows.length; i++){
        for (let j =0;j<cellNum;j++){
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className= 'grid-column';
        }
    }

}


