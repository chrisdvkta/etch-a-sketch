//new table with no add-ons when new number is passed 
//new table needs to be created inside fixed sized-container;
//number slider with limit 100;
//random rgb fills at each hover, 10% Black;
//UI look 




const container = document.querySelector('#container');
let rows = document.getElementsByClassName('grid-row');
let cells = document.getElementsByClassName('grid-column');
const reset = document.getElementById("reset")
const rt= document.documentElement;
const rgbBtn = document.getElementById("rgb");
const submit = document.getElementById('submit');

function clearGrid(){
    window.location.reload();
}

submit.addEventListener('click', ()=>{
    const text = document.getElementById('inp').value;
    let tt = parseInt(text);

    defaultGrid(tt);
})


function defaultGrid(num){
    createRow(num);
    createColumn(num);
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


rgbBtn.addEventListener('click',()=>{
    let colors = ['red','blue','green'];
    let rgbSelect = colors[Math.floor(Math.random()*3)];
     rt.style.setProperty('--color',`${rgbSelect}`);
})



