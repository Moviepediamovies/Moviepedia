$(document).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll >= 150) {
      $("#popUp").css("margin-left", "-425px");
      $("#plus").css("margin-left", "0px");
    }
  });
  
  $("#plus").click(function() {
    $("#popUp").css("margin-left", "0px");
    $("#plus").css("margin-left", "-425px");
  });
  
  $("#close").click(function() {
    $("#popUp").css("margin-left", "-425px");
    $("#plus").css("margin-left", "0px");
  });
  
  $(document).ready(function(){
      $(window).scroll(function(){
         
          if(this.scrollY > 20){
              $('.navbar').addClass("sticky");
          }else{
              $('.navbar').removeClass("sticky");
          }
          
         
          if(this.scrollY > 500){
              $('.scroll-up-btn').addClass("show");
          }else{
              $('.scroll-up-btn').removeClass("show");
          }
      });
  
     
      $('.scroll-up-btn').click(function(){
          $('html').animate({scrollTop: 0});
       
          $('html').css("scrollBehavior", "auto");
      });
  
      $('.navbar .menu li a').click(function(){
         
          $('html').css("scrollBehavior", "smooth");
      });
  
     
      $('.menu-btn').click(function(){
          $('.navbar .menu').toggleClass("active");
          $('.menu-btn i').toggleClass("active");
      });
  
     
      var typed = new Typed(".typing", {
          strings: [" a Student", " a Web Developer", " a Student", " a Web Developer", "a Student"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true
      });
  
      var typed = new Typed(".typing-2", {
          strings: ["SOON", " SOON", " SOON", " SOON", " SOON"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true
      });
  
     
      $('.carousel').owlCarousel({
          margin: 20,
          loop: true,
          autoplayTimeOut: 2000,
          autoplayHoverPause: true,
          responsive: {
              0:{
                  items: 1,
                  nav: false
              },
              600:{
                  items: 2,
                  nav: false
              },
              1000:{
                  items: 3,
                  nav: false
              }
          }
      });
  });