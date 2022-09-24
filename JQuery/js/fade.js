// Fade In Face Out 
            
$(document).ready(function(){
    let btnNode=  $("#btn");
    btnNode.click(function(){
        let headNode = $('#head');
        
        if(btnNode.text()== 'Fade In'){
            headNode.fadeIn(1000, function(){
                btnNode.text("Fade Out");
                
            });
        }
        else{
         headNode.fadeOut(1000, function(){
                btnNode.text("Fade In");
                
            });
        }   
    });

 });

 let btnNode = $("#click");
 btnNode.click(function(){
     $('.box').fadeToggle(1000, function(){
         btnNode.val("Fade In");
         $('.box').fadeTo(1000, .5);
     });
 })

 