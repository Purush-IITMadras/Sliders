
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
    document.getElementById('total-time').value = parseInt(slider1_value) + parseInt(slider2_value);
    // document.getElementById('total-time').value = parseInt(slider1_value) + parseFloat(Math.exp(slider2_value));

}

max_time_input.oninput = function(){
    max_time_slider.value = this.value;
    var slider2_value = this.value;
    var slider1_value = document.getElementById('min-time').value;
    document.getElementById('total-time').value = parseInt(slider1_value) + parseInt(slider2_value);
    // document.getElementById('total-time').value = parseInt(slider1_value) + parseFloat(Math.exp(slider2_value));
   
}

min_time_slider.oninput = function(){
    min_time_input.value = this.value;
    var slider1_value = this.value;
    var slider2_value = document.getElementById('max-time').value;
    document.getElementById('total-time').value = parseInt(slider1_value) + parseInt(slider2_value);
    // document.getElementById('total-time').value = parseInt(slider1_value) + parseFloat(Math.exp(slider2_value));
   
}

max_time_slider.oninput = function(){
    max_time_input.value = this.value;
    var slider2_value = this.value;
    var slider1_value = document.getElementById('min-time').value;
    document.getElementById('total-time').value = parseInt(slider1_value) + parseInt(slider2_value);
    // document.getElementById('total-time').value = parseInt(slider1_value) + parseFloat(Math.exp(slider2_value));
    
    
}


  

