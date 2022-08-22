document.addEventListener('keypress', logKey)



function logKey(e){
    if(e.code === 'KeyQ'){
        document.getElementById('MyQ').style.backgroundColor = 'red';
        document.getElementById('Qsound').play();
    }

    if(e.code === 'KeyW'){
        document.getElementById('MyW').style.backgroundColor = 'green';
    }

    if(e.code === 'KeyE'){
        document.getElementById('MyE').style.backgroundColor = 'blue';
    }

    if(e.code === 'KeyR'){
        document.getElementById('MyR').style.backgroundColor = 'purple';
    }

    if(e.code === 'KeyT'){
        document.getElementById('MyT').style.backgroundColor = 'orange';
    }

    if(e.code === 'KeyY'){
        document.getElementById('MyY').style.backgroundColor = 'gray';
    }

    document.addEventListener('keyup', (j) => {
        if(j.key === 'q') {
            document.getElementById('MyQ').style.backgroundColor = 'white';
            document.getElementById('Qsound').pause();
        }
        if(j.key === 'w') {
            document.getElementById('MyW').style.backgroundColor = 'white';
        }
        if(j.key === 'e') {
            document.getElementById('MyE').style.backgroundColor = 'white';
        }
        if(j.key === 'r') {
            document.getElementById('MyR').style.backgroundColor = 'white';
        }
        if(j.key === 't') {
            document.getElementById('MyT').style.backgroundColor = 'white';
        }
        if(j.key === 'y') {
            document.getElementById('MyY').style.backgroundColor = 'white';
        }
    })
}