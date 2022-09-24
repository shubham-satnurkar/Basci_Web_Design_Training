var nodearray1=document.getElementsByTagName("section");
console.log(nodearray1);

for(let node of nodearray1){
    console.log(node.children);

}

var para=document.getElementById("mypara1");
console.log(para);
console.log(para.children);
console.log(para.innerHTML);

document.getElementById("mypara3").innerHTML=para.innerHTML;    
document.getElementById("mypara3").innerHTML=para.innerText;    

var nodearray2=document.getElementsByClassName("heading");
console.log(nodearray2);

var nodearray3=document.getElementsByName("gender");
console.log(nodearray3);

for(let ele of nodearray3){
    console.log(ele.value);
}

var myimg=document.getElementById("bluerose");
console.log(myimg.src);

console.log(myimg.alt);

console.log(myimg.height);

console.log(myimg.width);

function zoom(){
    myimg.height=myimg.height+10;
}

function showState(){
    for(let ele of nodearray3){
        if(ele.checked){
            console.log(ele.value);
        }
    }
}


//create an array of breakfast  items, should be displayed in ordered list
let flag =false;
 let breakfastarray = ['sandwich', 'poha', 'upma', 'dosa'];
 let btnnode = document.getElementById("breakfast");
 btnnode.addEventListener("click", function(){
     if (flag==false) showItems();
     else removeOL();
 });
 let olnode;
 function showItems(){
      olnode=document.createElement("ol");
      olnode.type="A";
      olnode.setAttribute("id", "myol")
     for(let items of breakfastarray){
     let linode=document.createElement("li");

        //  linode.innerHTML=items;
        linode.textContent=items;
        linode.style.color = "red";
        olnode.append(linode); //append child
     }
        // document.getElementById("bd").append(olnode);
        btnnode.after(olnode); //olnode added after btnnode

        flag= true;
     }
     
     
     function removeOL(){
         olnode.remove(); //remoechild use to remove child of the parent p.node.removeChild(cnode)
         flag = false;
     }

     function change(){
         let txt = "Hide Items";
         document.getElementById("breakfast").value = txt;
     }





     $(document).ready(function(){
         rbNode1 =$('#r1');
         rbNode2 =$('#r2');
         console.log(rbNode1.val());
         console.log(rbNode2.val());

         rbNode1.change(()=>showState());
         rbNode2.change(()=>showState());
         

         function showState(){
             if(rbNode1.prop("checked"))
             console.log(rbNode1.val());
         }
         if(rbNode2.prop("checked"))
         console.log(rbNode2.val());



         myimgNode = $('#bluerose');
         let srcval=myimgNode.attr('src');
         console.log(srcval);
         console.log(myimgNode.attr('alt'));
         let h1 = myimgNode.attr('height');
         console.log(h1+ ' '+ typeof h1)//string
         let h2 = myimgNode.height();
         console.log(h2+ ' '+ typeof h2)//string


         $('#zoombtn').click(()=>zoom());
         console.log('_____________________');


         $('#focusMe').focus(function(){
             $(this).css('border','1px solid red');
         })

         boxNode = $('#box');
         let boxval = boxNode.css('width');
         console.log(boxval);
         let divh = boxNode.css('height');
         let divw = boxNode.width();
         console.log(divh+ ' '+typeof divh);
         console.log(divw+ ' '+typeof divw);


         $('#btnanime').click(function(){
             $('#box').animate({
                 'height' :'300px', 'width' : '500px', 'background-color' : 'yellow'
                }, 1000, 'linear', function(){
                    alert("Animation completed.")
                });
         });

     });



     let textNodes = $('[type="text"]');
     textNodes.mouseover(function(){
         if($(this).prop("readonly"))
        console.log("this is readonly");
        else
        console.log("this text is editable");
      

            $(this).css({"color" : "red","font-size": "18px", "margin":"10px"});
    
        
    })