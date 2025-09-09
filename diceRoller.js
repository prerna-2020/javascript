// Dice Roller

let button = document.getElementById('submit');
let diceValDisp = document.querySelector('#resultBlock span');
let diceImgCont = document.getElementsByClassName('diceImages')[0];
let diceRoll = [];
let diceRollLimit = 4;
let diceImage = [];

console.log(diceValDisp)
let count = 0;

button.addEventListener('click', ()=>{

    let maxLim = 6;
    let minLim = 1;
    let creatImgTag = '';
    let randomNum = Math.floor(Math.random() * (maxLim-minLim+1) + minLim );

    if(count < 4){
        diceRoll.push(randomNum);
        diceValDisp.textContent = diceRoll;

        creatImgTag = `<img src='images/${randomNum}.png' alt='${randomNum}' />`;
        
        diceImage.push(creatImgTag);
        diceImgCont.innerHTML=diceImage;
        
        count++;
    }

})