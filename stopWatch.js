 let stopWatch = document.getElementById('stopWatch');
 let startBtn = document.getElementById('start');
 let resetBtn = document.getElementById('reset');
 let stopBtn = document.getElementById('stop');

 let timer = 0;
 let timerStopped = false;
    let getMS = 0;
    let getSec = 0;
    let getMin = 0;   

  startBtn.addEventListener('click', ()=>{

    if(timerStopped === true){
        getMS = Number(document.getElementById('milliSec').textContent);
        getSec = Number(document.getElementById('seconds').textContent);
        getMin = Number(document.getElementById('minutes').textContent);
    }else{
        getMS=getMin=getSec = 0;
    }

     timer = setInterval(()=>{

        getMS++;

        if(getMS>99){
            getSec = getSec + 1;
            getMS = 0;
        }
        else if(getSec>59){
            getMin = getMin + 1;
            getSec = 0;
        }
       document.getElementById('milliSec').textContent=getMS<10?('0'+getMS):getMS;
       document.getElementById('seconds').textContent = getSec<10?('0'+getSec):getSec;
       document.getElementById('minutes').textContent = getMin<10?('0'+getMin):getMin;

    },10)
   
  });

  resetBtn.addEventListener('click', ()=>{

    clearInterval(timer);
    getMS = getSec = getMin = 0;
    timerStopped = false;
    document.getElementById('milliSec').textContent='00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('minutes').textContent = '00';
  });

  stopBtn.addEventListener('click', ()=>{
    timerStopped = true;
    clearInterval(timer);
    
  });

  