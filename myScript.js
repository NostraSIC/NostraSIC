// SMOOTH SCROLL -----------------------------------------------------------------------------

$("#nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

// STICKY BACK TO TOP ------------------------------------------------------------------------

// $(document).ready(function(){
  
//   //Check to see if the window is top if not then display button
//   $(window).scroll(function(){
//     if ($(this).scrollTop() > 100) {
//       $('.back-to-top').fadeIn();
//     } else {
//       $('.back-to-top').fadeOut();
//     }
//   });
  
//   //Click event to scroll to top
//   $('.back-to-top').click(function(){
//     $('html, body').animate({scrollTop : 0},800);
//     return false;
//   });
  
// });