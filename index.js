function rot(){
    const date = new Date()
    console.log(date)
    let rad = (date.getSeconds() + 15) * 6 + 1;
    let rad1 = (date.getMinutes() + 15) * 6;
    const trans = setInterval(() => {
        if(rad === 360) rad = 0;
        document.getElementById('line').style.transform = `rotate(${rad}deg)`;
        document.getElementById('line2').style.transform = `rotate(${rad1}deg)`;
        rad += 6;
        rad1 += 0.000277777778;
    }, 1000);
}