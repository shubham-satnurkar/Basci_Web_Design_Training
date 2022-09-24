// Fade In Face Out 
            
$(document).ready(function(){
    let btnNode=  $("#btn");
    btnNode.click(function(){
        let headNode = $('h1');
        
        if(btnNode.text()== 'Slide Up'){
            headNode.slideUp(1000, function(){
                btnNode.text("Slide Down");
                
            });
        }
        else{
         headNode.slideDown(1000, function(){
                btnNode.text("Slide UP");
                
            });
        }   
    });

 });


// Toggle Content

let btnNode =$("#slidebtn");
btnNode.click(function(){
    $("#head").slideToggle(3000, function(){
        btnNode.val("Up/Down");
        
    })
})