let fnameNode = $("#fname");
let lnameNode = $("#lname");
let emailNode = $("#email");
let passNode = $("#pass");
let cpassNode = $("#cpass");
let mobileNode = $("#mobile");
let ageNode = $("#age");


let border1="2px solid #f00";
let border2="2px solid #0f0";

let tdNode1 = $("#error1");
let tdNode2 = $("#error2");
let tdNode3 = $("#error3");
let tdNode4 = $("#error4");
let tdNode5 = $("#error5");
let tdNode6 = $("#error6");
let tdNode7 = $("#error7");
let formNode = $("#regsub");



$(document).ready(function(){
     fnameNode.blur(()=>validate1());
     lnameNode.blur(()=>validate2());
     emailNode.blur(()=>validate3());
     passNode.blur(()=>validate4());
     cpassNode.blur(()=>validate5());
     mobileNode.blur(()=>validate6());
     ageNode.blur(()=>validate7());
     formNode.submit(()=>validateForm()); 
});


function validate1(){
    tdNode1.text(" ");
    let fname = fnameNode.val();
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(fname));
    if(fname==""){
        tdNode1.text("this field required");
        fnameNode.css('border', border1);
        return false;
    }
    else if(regExp.test(fname)==false){
        tdNode1.text("name sholud only have alphabate.");
    }
    else{
        fnameNode.css('border', border2);
        return true;
    }
}



function validate2(){
    tdNode2.text(" ");
    let lname = lnameNode.val();
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(lname));
    if(lname==""){
        tdNode2.text("this field required");
        lnameNode.css('border', border1);
        return false;
    }
    else if(regExp.test(lname)==false){
        tdNode2.text("name sholud only have alphabate.");
    }
    else{
        lnameNode.css('border', border2);
        return true;
    }
}

function validate3(){
    tdNode3.text(" ");
    let email = emailNode.val();
    let substr=email.substring(email.indexOf('@')+1);
    if(email == ''){
        tdNode3.text("this field required");
        emailNode.css('border', border1);
        return false;
    }
    else if(!email.includes('@') || substr== ''){
        tdNode3.text("please put valid email id");
        emailNode.css('border', border1);
        return false;
    }
    else{
        emailNode.css('border', border2);
        return true;
    }
}


function validate4(){
    tdNode4.text(" ");
    let password = passNode.val();
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A_Z])(?=.*[0-9])(?=.*[!@#$%^&*])");
    console.log(regExp.test(password));
    if(password == ''){
        tdNode4.text("This field required");
        passNode.css('border', border1);
        return false;
    }
    else if(regExp.test(password)==false){
        let spanNode=$('<span>');
        console.log(spanNode)
        spanNode.text("The Password should contain atleast one");
        let ulNode= $('<ul>');

        let liNode1 =$('<li>');
        liNode1.text("Capital Letter");

        let liNode2 =$('<li>');
        liNode2.text("Small Letter");

        let liNode3 =$('<li>');
        liNode3.text("Digit");

        let liNode4 =$('<li>');
        liNode4.text("Symbol");

        ulNode.append(liNode1,liNode2,liNode3,liNode4);
        tdNode4.append(spanNode,ulNode);
        // passNode.style.border= border1;

        return false
    }
    else if(password.length<5 || password.length>12){
        tdNode4.text("Password sholud be atleast 5 and atmost 12 characters long");
        passNode.css('border', border1);
        
        return false;
    }
    else{
        passNode.css('border', border2);
        return true;
    }
}


function validate5(){
    tdNode5.text(" ");
    let confirmPass=cpassNode.val();
    let password=passNode.val();
    if(confirmPass==''){
        tdNode5.text("this field is required");
        cpassNode.css('border', border1);
        return false;
    }
    else if(confirmPass!==password){
        tdNode5.text("Password not matching");
        cpassNode.css('border', border1);
        return false;
    }
    else{
        cpassNode.css('border', border2);
        return true;
    }
}


function validate6(){
    tdNode6.text(" ");
    let mobile = mobileNode.val();
    let regExp = new RegExp("^[0-9]*$");
    if(mobile== ''){
        tdNode6.text("this field required");
        mobileNode.css('border', border1);
        return false;
    }
    else if(regExp.test(mobile)==false){
        tdNode6.text("mobile number should contain only digit");
        mobileNode.css('border', border1);
        return false;
    }
    else if(mobile.length > 10){

    }
    else{
        mobileNode.css('border', border2);

        return true;
    }
}


function validate7(){
    tdNode7.text(" ");
    let age=ageNode.val();
    if(age==''){
        tdNode8.text("this field is required");
        ageNode.css('border', border1);
        return false;
    }
    else if(age<1 || age>110){
        tdNode8.text("please put valid age (1 to 110)");
        ageNode.css('border', border1);
        return false;
    }
    else{
        ageNode.css('border', border2);
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
    return  st1 && st2 && st3 && st4 && st5 && st6 && st7;
}