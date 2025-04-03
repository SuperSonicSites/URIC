/* Homepage Header Fullheight 
$(document).ready(function(){
    $('.header').height($(window).height());})
*/
/* Preloader 
$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 200;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });*/
/* Animate on Scroll */
AOS.init();
/* Navigation Menu */
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

document.addEventListener('DOMContentLoaded', function() {
  // Select all <a> elements inside the .desktopmenu container
  const links = document.querySelectorAll('.desktopmenu a');
  
  // Check if any links are found
  if (links.length > 0) {
    // Select the last link
    const lastLink = links[links.length - 1];
    
    // Append the classes to the last link
    lastLink.classList.add('btn', 'btn-success', 'btn-lg');
  }
});
