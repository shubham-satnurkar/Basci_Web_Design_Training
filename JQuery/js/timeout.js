$(document).ready(function(){
    setTimeout(function(){
        setStyle();

    }, 1000);
});
function setStyle(){
    $('.box').css({
        'height':'300px', 'width' : '300px',
        'border':'3ps double #f00'
    });
}


let array = ['Nagpur', 'Mumbai', 'Pune', 'Amravati', 'Wardha'];
let interval;
let i =0;
$(function(){
    interval=setInterval(() => {
        if(i==array.length-1)
        clearInterval(interval);
        showArrayValue(i);
        i++
    }, 500);
});
function showArrayValue(index){
    document.write(`<b> ${array[i] } </b> <br>`)
}