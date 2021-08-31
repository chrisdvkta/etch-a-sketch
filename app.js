const container = document.querySelector('#container');
let rows = document.getElementsByClassName('grid-row');
let cells = document.getElementsByClassName('grid-column');
const reset = document.getElementById("reset")

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
            // newCell.addEventListener('mouseover',function(){newCell.classList.add('fill');});
            reset.addEventListener('click',()=>{newCell.classList.remove('fill');})
        }
    }

}

container.addEventListener("mouseover",function(e) {        //event listener delegattion from container and test the target.
    const tgt = e.target;
    console.log(tgt);
    if (tgt.classList.contains("grid-column")) tgt.classList.add("fill");
});





