// Hide Content
$(document).ready(function(){
    let btnNode=  $("#btn");
    btnNode.click(function(){
        let divNode = $('div');
        
        if(btnNode.text()== 'Hide'){
            divNode.hide(1000, function(){
                btnNode.text("Show");
                alert("Hide Completed..");
            });
        }
        else{
            divNode.show(1000, function(){
                btnNode.text("Hide");
                 alert("Show the conent....")
            });
        }   
    });

 });

 // Toggle Content

 let btnNode1 =$("#btn1");
 btnNode1.click(function(){
     $("#myImage").toggle(3000, function(){
         btnNode1.val("Hide/Show");
         alert("Show and Hide Image....")
     })
 })