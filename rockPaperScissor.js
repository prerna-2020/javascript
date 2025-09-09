
let compBlock = document.querySelector('#player2Block p');
let result = document.getElementById('winnerBlock');
let iconsLi = document.querySelectorAll('.iconsBlock li');
let startBtn = document.getElementById('start');

let options = ['rock', 'paper', 'scissors'];
let compSelect;
let userSelect;

function startGame(){
    //computer selected value
    compSelect = options[Math.floor(Math.random() * 3)];
    compBlock.innerHTML='&#10003;';
    compBlock.style.display="inline-block";

    //display message for user turn
    result.classList='normal';
    result.textContent='Computer Selected, your turn';
    result.style.display='block';

    //disable options for for user Select
    iconsLi.forEach((item)=>{
        item.classList='';
    })

    startBtn.classList = 'disabled';
}

function selected(event,val){

    userSelect = val;    
    iconsLi.forEach((item)=>{
        if(item!=event.target)
        item.classList='disabled';
    })

    if(userSelect === compSelect){
        result.textContent = "Its a Tie !!"
    }
    else if((userSelect == 'rock' && compSelect == 'scissors') || (userSelect == 'paper' && compSelect == 'rock') 
        || (userSelect =='scissors' && compSelect == 'paper')){
        result.textContent = "You Win !!";

    }else{
        result.textContent = "Computer Win !!";
    }
    result.classList='';
    compBlock.innerHTML=(compSelect =='scissors'?'&#9996;':(compSelect=='paper'?'&#9995;':'&#9994;'));

    //Reload game
    setTimeout(reload,3000);
}

function reload(){
    iconsLi.forEach((item)=>{
        item.classList='disabled';
    })
    compSelect=0;
    userSelect=0;
    result.style.display=compBlock.style.display='none';
    startBtn.classList = '';
}