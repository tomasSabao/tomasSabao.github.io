


function timer_reduce(){
    var remaining_time = document.getElementById("timer").innerHTML;
    var time_number = parseInt(remaining_time);
    time_number--;
    document.getElementById("timer").innerHTML = time_number;
}

function activate_timer(){
    var timer = 60;
    for (let i =0; i < 60; i++){
        setTimeout(timer_reduce(),1000);
    }
}
