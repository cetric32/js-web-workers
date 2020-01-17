import $ from 'jquery';

if(!!window.Worker){
    let worker = new Worker('worker.js');
    worker.onmessage = function(event){
        $('#result').html(event.data);
    };    
}
else{
    alert('Web workers not supported');
}