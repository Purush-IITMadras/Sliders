
let min_time_slider = document.getElementById('time1');
let min_time_input = document.getElementById('min-time');

let max_time_slider = document.getElementById('time2');
let max_time_input = document.getElementById('max-time');

var slider1_value = 0;
var slide2_value = 0;

const red = 'rgb(255, 99, 132)'; // red
const blue = 'rgb(54, 162, 235)'; // blue

const chart1 = document.getElementById('box-2').getContext('2d');
// var slider3_value = 0;

min_time_input.oninput = function(){
    min_time_slider.value = this.value;
    var slider1_value = this.value;
    var slider2_value = document.getElementById('max-time').value;
    var slider3_value = parseInt(slider1_value) + parseInt(slider2_value);
    document.getElementById('total-time').value = slider3_value;
    // document.getElementById('total-time').value = parseInt(slider1_value) + parseFloat(Math.exp(slider2_value));
    // makechart(slider3_value, autoTimer);

}

max_time_input.oninput = function(){
    max_time_slider.value = this.value;
    var slider2_value = this.value;
    var slider1_value = document.getElementById('min-time').value;
    var slider3_value = parseInt(slider1_value) + parseInt(slider2_value);
    document.getElementById('total-time').value = slider3_value;
    // document.getElementById('total-time').value = parseInt(slider1_value) + parseFloat(Math.exp(slider2_value));
    // makechart(slider3_value, autoTimer);
   
}

min_time_slider.oninput = function(){
    min_time_input.value = this.value;
    var slider1_value = this.value;
    var slider2_value = document.getElementById('max-time').value;
    var slider3_value = parseInt(slider1_value) + parseInt(slider2_value);
    document.getElementById('total-time').value = slider3_value;
    // document.getElementById('total-time').value = parseInt(slider1_value) + parseFloat(Math.exp(slider2_value));
    // makechart(slider3_value, autoTimer);
   
}

max_time_slider.oninput = function(){
    max_time_input.value = this.value;
    var slider2_value = this.value;
    var slider1_value = document.getElementById('min-time').value;
    var slider3_value = parseInt(slider1_value) + parseInt(slider2_value);
    document.getElementById('total-time').value = slider3_value;
    // document.getElementById('total-time').value = parseInt(slider1_value) + parseFloat(Math.exp(slider2_value));
    // makechart(slider3_value, autoTimer);
    
}



var myTimer;
// function clock() {
    document.getElementById('start-time-btn').style.display = "none";
    document.getElementById('stop-time-btn').style.display = "inline-block";
    myTimer = setInterval(myClock, 1000);

    var c = parseInt(document.getElementById("start-time").value);

    var sliderVal = [];
    var totalVal = 0;
    function myClock() {
        var totalVal = document.getElementById("total-time").value;
        document.getElementById("start-time").value = c++;
        sliderVal.push(totalVal);
        // console.log(autoTime);
        makechart(sliderVal, c);
    }
// }

function stopClock() {
    document.getElementById('start-time-btn').style.display = "inline-block";
    document.getElementById('stop-time-btn').style.display = "none";
    clearInterval(myTimer);
}

// var autoStartTimer;
// autoStartTimer = setInterval(autoClock, 1000);
//     var c = parseInt(document.getElementById("auto-start-time").value);

// function autoClock() {
//     document.getElementById("auto-start-time").value = c++;   
// }


function makechart(slider3_value, autoTimer) { 

    let entry = {
        slider3_value: slider3_value,
        autoTimer: autoTimer
    }
    console.log(entry);
    fetch(`${window.origin}/process-entry`, {
        method: "POST",
        body: JSON.stringify(entry),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json",
        })
    })
    .then(function (res) {
        if (res.status !== 200) {
            console.log(`Response is not 200: ${res.status}`);
            return;
        }
        
        res.json().then(function (val) {
            chart = new Chart(chart1, {
                type: 'line',
                data: {
                    labels: val.autoTimer,
                    datasets: [{
                        backgroundColor: red,
                        borderColor: red,
                        data: val.slider3_value,
                        fill: false,
                        label: 'Slider level'
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        ticks: {
                            stepSize: 15
                        },
                        yAxes: [{
                            display: true,
                            labelString: "Slider Value",
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: "Time(Mins)"
                            }
                        }]
                    }
                }
            });
        });   
    });
}   



  

