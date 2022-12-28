var timer = document.getElementById('timer');
timer.style.lineHeight = `${timer.offsetHeight}px`;

window.addEventListener('resize', (e) => {
	var timer = document.getElementById('timer');
    timer.style.lineHeight = `${timer.offsetHeight}px`;
});

var f_controls = document.getElementById('f_controls');
var s_controls = document.getElementById('s_controls');

var ml_sec = 0;
var sec = 0;
var min = 0;

var time;

function count_time(){
    ml_sec += 1;
    if (ml_sec % 100 == 0){
        sec += 1;
        ml_sec = 0;
    }
    if (sec >= 60){
        min += 1;
        sec = 0; 
    }
    let mll_sec = ml_sec, secc = sec, minn = min;
    if (ml_sec < 10){
        mll_sec = '0' + ml_sec;
    }
    if (sec < 10){
        secc = '0' + sec;
    }
    if (min < 10){
        minn = '0' + min;
    }
    document.getElementById('timer').innerHTML = `${minn}:${secc}:${mll_sec}s`;
}

function start(){
    f_controls.style.display = 'none';
    s_controls.style.display = 'flex';
    time = setInterval(count_time, 10);
}
function pause(){
    s_controls.style.display = 'none';
    f_controls.style.display = 'flex';
    clearInterval(time);
}
var count = 1;
function flag(){
    let t = document.getElementById('timer').textContent;
    document.getElementById('circles').insertAdjacentHTML('beforeend', `<div class="circle">${count++}. круг:   ${t}</div>`);
}
function reset_timer(){
    window.location.reload();
}