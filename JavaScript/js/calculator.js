let history = document.getElementById("history");
var result =document.getElementById("result")
var input = document.getElementsByName('txt').value;
// Code For Calculations
function calculation(v){
    
    let para = document.createElement("p")
    let data = v + "=" + eval(v);
    para.innerText = data;
    history.appendChild(para);
    return eval(v);

}

// Code For backspace
function backSpace(del){
    return del.slice(0, del.length-1)
}

