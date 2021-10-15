let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("second");

let set_clock = setInterval(()=>{
    let current_date = new Date();
    let hr = current_date.getHours();
    let min = current_date.getMinutes();
    let sec = current_date.getSeconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = sec * 6  ;

    hour.style.transform = `rotate(${calc_hr}deg)`;
            minute.style.transform = `rotate(${calc_min}deg)`;
            seconds.style.transform = `rotate(${calc_sec}deg)`;
}, 1000);