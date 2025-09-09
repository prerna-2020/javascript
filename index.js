// counter

let valFromBox = Number(document.getElementById('valBox').textContent) ;

console.log(valFromBox);
document.getElementById("increase").onclick = function(){
    valFromBox = valFromBox+1;
    document.getElementById('valBox').textContent = valFromBox;
}

document.getElementById("decrease").addEventListener('click', ()=>{
    if(valFromBox > 0){
        valFromBox = valFromBox-1;
        document.getElementById('valBox').textContent = valFromBox;
    }
    else return;
})

document.getElementById("reset").addEventListener('click', ()=>{
    valFromBox =0;
    document.getElementById('valBox').textContent = 0;
})


