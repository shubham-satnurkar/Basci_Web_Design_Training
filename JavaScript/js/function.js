var arr1 = [1,2,3,4,5,6,7,8];
var arr2 = [0,9,8,7,6,5,4,3];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

function addition(...values){
    var sum=0;
    for(var val of values){
        sum=sum+val;
    }
    return sum
}
var res1 = addition(12);
var res2 = addition(12, 15);
var res3 = addition(12, 15, 19);
console.log(`${res1}  ${res2} ${res3} `)

// function text(){
//     for(var i= 1; i<=5; i++);
//     console.log("i="+i);

// }


// Arrow function

function fun1(num){
    console.log(num);
    return num*num*num;
}

let arrowfun1=num=>{
    console.log(num);
    return num*num*num;
}

let cube =arrowfun1(3);
console.log(cube);
function fun2(num){
    return num*num*num;
}

let arrowfun2 = num=>num*num*num;
let cube2=arrowfun2(4);
function func3(){
    return "test message";
}
let arrowfun3 = () => "test message";



const pay = [12500, 2500, 45000, 23444, 3422]
pay.forEach(function(ele, index, array){
    console.log(ele+" "+index+" "+array);
    array[3]=74300;
});
pay.forEach((ele,index) => console.log(ele+" "+index));
pay.forEach(ele=>console.log(ele));//increment every pay by 5000

const sum1 = pay.reduce((acc, el)=>acc+el);
console.log(sum1);

// pay=[5600, 9000, 75000, 8000, 34000];
// const graterpay=pay.filter(ele=>ele)
