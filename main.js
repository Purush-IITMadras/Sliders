
let min_time_slider = document.getElementById('time1');
let min_time_input = document.getElementById('min-time');

let max_time_slider = document.getElementById('time2');
let max_time_input = document.getElementById('max-time');

var slider1_value = 0;
var slide2_value = 0;


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

    // var c = parseInt(document.getElementById("start-time").value);
    var c = 1;

    var sliderVal = [];
    var totalVal = 0;
    function myClock() {
        var totalVal = document.getElementById("total-time").value;
        document.getElementById("start-time").value = c++;
        sliderVal.push(totalVal);
        // console.log(autoTime);
        // makechart(sliderVal, c);
    }
// }

function stopClock() {
    document.getElementById('start-time-btn').style.display = "inline-block";
    document.getElementById('stop-time-btn').style.display = "none";
    clearInterval(myTimer);
    clearInterval(clock);
}


function getData() {
    return document.getElementById('total-time').value;
}  

Plotly.plot('chart',[{
    y:[getData()],
    type:'line'
}]);

var cnt = 0;

var clock = setInterval(function(){

    Plotly.extendTraces('chart',{ y:[[getData()]]}, [0]);
    cnt++;
    if(cnt > 9) {
        Plotly.relayout('chart',{
            xaxis: {
                range: [cnt-9,cnt]
            }
        });
    }
},1000);
 



  

