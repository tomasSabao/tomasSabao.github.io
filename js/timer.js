


function timer_reduce(){
    var remaining_time = document.getElementById("timer").innerHTML;
    var time_number = parseInt(remaining_time);
    time_number--;
    document.getElementById("timer").innerHTML = time_number;
}

function activate_timer(){
    for (let i =0; i < 5; i++){
        setTimeout(function() {
            var remaining_time = document.getElementById("timer").innerHTML;
            var time_number = parseInt(remaining_time);
            time_number--;
            document.getElementById("timer").innerHTML = time_number;
        }, 1000);
    }
}
