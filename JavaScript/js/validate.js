let fnameNode = document.getElementById("fname");
let lnameNode = document.getElementById("lname");
let unameNode = document.getElementById("uname");
let emailNode = document.getElementById("email");
let passNode = document.getElementById("pass");
let cpassNode = document.getElementById("cpass");
let mobileNode = document.getElementById("mobile");
let ageNode = document.getElementById("age");

let border1="2px solid #f00";
let border2="2px solid #0f0";

let tdNode1 = document.getElementById("error1");
let tdNode2 = document.getElementById("error2");
let tdNode3 = document.getElementById("error3");
let tdNode4 = document.getElementById("error4");
let tdNode5 = document.getElementById("error5");
let tdNode6 = document.getElementById("error6");
let tdNode7 = document.getElementById("error7");
let tdNode8 = document.getElementById("error8");


function validate1(){
    tdNode1.textContent="";
    let fname = fnameNode.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(fname));
    if(fname==""){
        tdNode1.textContent="this field required";
        fnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(fname)==false){
        tdNode1.textContent="name sholud only have alphabate.";
        fnameNode.style.border=border1;
        return false;
    }
    else{
        fnameNode.style.border=border2;
        return true;
    }
}

function validate2(){
    tdNode2.textContent=" ";
    let lname = lnameNode.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(lname));
    if(lname==""){
        tdNode2.textContent="this field required";
        lnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(lname)==false){
        tdNode2.textContent="last name sholud only have alphabate.";
        lnameNode.style.border=border1;
        return false;
    }
    else{
        lnameNode.style.border=border2;
        return true;
    }
}

function validate3(){
    tdNode3.textContent=" ";
    let uname = unameNode.value;
    if(uname==""){
        tdNode3.textContent="this field required";
        unameNode.style.border=border1;
        return false;
    }
    else if(uname.length<5 || uname.length>20){
        tdNode3.textContent="username must have atleast 5 and atmost 20 characters.";
        unameNode.style.border=border1;
        return false;
    }
    else{
        unameNode.style.border=border2;
        return true;
    }
}


function validate4(){
    tdNode4.textContent=" ";
    let email = emailNode.value;
    let substr =email.substring(email.indexOf('@')+1);
    console.log(substr);
    if(email == ''){
        tdNode4.textContent="this field required";
        emailNode.style.border=border1;
        return false;
    }
    else if(!email.includes('@') || substr== ''){
        tdNode4.textContent="please put valid email id";
        emailNode.style.border=border1;
        return false;
    }
    else{
        emailNode.style.border=border2;
        return true;
    }
}


function validate5(){
    tdNode5.textContent= " ";
    let password = passNode.value;
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");
    console.log(regExp.test(password));
    if(password == ''){
        tdNode5.textContent="This field required";
        passNode.style.border=border1;
        return false;
    }
    else if(regExp.test(password)==false){
        let spanNode=document.createElement("span");
        spanNode.textContent="The Password should contain atleast one";
        let ulNode= document.createElement("ul");
        let liNode1 =document.createElement("li");
        liNode1.textContent="Capital Letter";
        let liNode2 =document.createElement("li");
        liNode2.textContent="Small Letter";
        let liNode3 =document.createElement("li");
        liNode3.textContent="Digit";
        let liNode4 =document.createElement("li");
        liNode4.textContent="Symbol";
        ulNode.append(liNode1,liNode2,liNode3,liNode4);
        tdNode5.append(spanNode,ulNode);
        passNode.style.border= border1;
        
        return false
    }
    else if(password.length<5 || password.length>12){
        tdNode5.textContent="Password sholud be atleast 5 and atmost 12 characters long";
        passNode.style.border=border1;
        
        return false;
    }
    else{
        passNode.style.border=border2;
        return true;
    }
}

function validate6(){
    tdNode6.textContent="";
    let confirmPass=cpassNode.value;
    let password=passNode.value;
    if(confirmPass==''){
        tdNode6.textContent="this field is required";
        cpassNode.style.border=border1;
        return false;
    }
    else if(confirmPass!==password){
        tdNode6.textContent="Password not matching";
        cpassNode.style.border=border1;
        return false;
    }
    else{
        cpassNode.style.border=border2;
        return true;
    }
}


function validate7(){
    tdNode7.textContent="";
    let mobile = mobileNode.value;
    let regExp = new RegExp("^[0-9]*$");
    if(mobile== ''){
        tdNode7.textContent="this field required";
        mobileNode.style.border=border1;
        return false;
    }
    else if(regExp.test(mobile)==false){
        tdNode7.textContent="mobile number should contain only digit";
        mobileNode.style.border=border1;
        return false;
    }
    else if(mobile.length != 10){
        tdNode7.textContent="Mobile No. is not valid";
        mobileNode.style.border=border1;
        return false;
    }
    else{
        mobileNode.style.border=border2;

        return true;
    }
}


function validate8(){
    tdNode8.textContent="";
    let age = ageNode.value;
    if(age==''){
        tdNode8.textContent="this field required";
        ageNode.style.border=border1;
        return false
    }
    else if(age < 1 || age>100){
        tdNode8.textContent="Put Valid age(1 to 100)";
        ageNode.style.border=border1;
        return false;
    }
    else{
        ageNode.style.border=border2;
        return true;
    }
}



let checkNode = document.getElementById("showpass");
function show(){
    if(checkNode.checked){
        passNode.type="text";
        cpassNode.type="text";
    }
    else{
        passNode.type="password";
        cpassNode.type="password";
    }
}


function validateForm(){
    let st1 =validate1();
    let st2 =validate2();
    let st3 =validate3();
    let st4 =validate4();
    let st5 =validate5();
    let st6 =validate6();
    let st7 =validate7();
    let st8 =validate8();
    return  st1 && st2 && st3 && st4 && st5 && st6 && st7 && st8;
}