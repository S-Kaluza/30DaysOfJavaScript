let number = 0;
let op = 0;
let times;
window.onload = () => {
    number += 1;
    document.getElementById(`lang-${number}`).style.display = 'inline-block';
    fadeUp();
    
}

function fadeUp() {
    times = setInterval(() => {
        document.getElementById(`lang-${number}`).style.display = 'inline-block';
        if(document.getElementById(`lang-${number}`).style.opacity >= 1){
            clearInterval(times);
        }
        document.getElementById(`lang-${number}`).style.opacity = op;
        op += 0.005;
        console.log(op);
    }, 10);
}

function fadeDown() {
    times = setInterval(() => {
        if(document.getElementById(`lang-${number}`).style.opacity === 0){
            clearInterval(times);
        }
        document.getElementById(`lang-${number}`).style.opacity = op;
        op -= 0.005;
    }, 10);
}

function nextLang(){
    clearInterval(times);
    op = 1;
    times = setInterval(() => {
        if(document.getElementById(`lang-${number}`).style.opacity <= 0){
            document.getElementById(`lang-${number}`).style.display = 'none';
            if(number < 4) number += 1;
            else number = 1;
            document.getElementById(`lang-${number}`).style.display = 'inline-block';
            op = 0;
            clearInterval(times);
            times = setInterval(() => {
                if(document.getElementById(`lang-${number}`).style.opacity >= 1){
                    clearInterval(times);
                }
                document.getElementById(`lang-${number}`).style.opacity = op;
                op += 0.005;
                console.log(number);
            }, 10)
        }
        document.getElementById(`lang-${number}`).style.opacity = op;
        op -= 0.005;
        console.log(op);
    }, 10)
}

function prevLang(){
    clearInterval(times);
    op = 1;
    times = setInterval(() => {
        if(document.getElementById(`lang-${number}`).style.opacity <= 0){
            document.getElementById(`lang-${number}`).style.display = 'none';
            if(number > 1) number -= 1;
            else number = 4;
            document.getElementById(`lang-${number}`).style.display = 'inline-block';
            op = 0;
            clearInterval(times);
            times = setInterval(() => {
                if(document.getElementById(`lang-${number}`).style.opacity >= 1){
                    clearInterval(times);
                }
                document.getElementById(`lang-${number}`).style.opacity = op;
                op += 0.005;
                console.log(number);
            }, 10)
        }
        document.getElementById(`lang-${number}`).style.opacity = op;
        op -= 0.005;
        console.log(op);
    }, 10)
}