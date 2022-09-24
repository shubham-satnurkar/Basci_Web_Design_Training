// let btn = document.getElementById("scroll-btn");
// document.getElementById
// btn.addEventListener('click', function(){
//     window.onscroll = () =>{scrollFunction()};
//     function scrollFunction(){
//         if(document.body.scrollTop> 30 || document.documentElement.scrollTop > 30){
//             btn.style.display ="block";

//         }
//         else{
//             btn.style.display = "none"
//         }
//     }
    
    
// });
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }

var btn = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}