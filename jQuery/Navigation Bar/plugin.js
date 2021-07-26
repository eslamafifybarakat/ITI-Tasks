$(function() {
        var complainText;
        $("#current").on('click',function(){
             $('.divAbout').css('display', 'block');
             $('.divGallery').css('display', 'none');
             $('.dot').css('display', 'none');
             $('.divServices').css('display', 'none');
             $('.divForm').css('display', 'none');
             $('.view').css('display', 'none');
    });

    $("#gallery").on('click',function(){
        $('.divGallery').css('display', 'block');
        $('.dot').css('display', 'inline-block');
             $('.divAbout').css('display', 'none');
             $('.divServices').css('display', 'none');
             $('.divForm').css('display', 'none');
             $('.view').css('display', 'none');
    });


    $("#services").on('click',function(){
        $('.divServices').css('display', 'block');
             $('.divAbout').css('display', 'none');
             $('.divGallery').css('display', 'none');
             $('.dot').css('display', 'none');
             $('.divForm').css('display', 'none');
             $('.view').css('display', 'none');
    });

     $("#complain").on('click',function(){
         $('.divForm').css('display', 'block'); 
             $('.divAbout').css('display', 'none');
             $('.divGallery').css('display', 'none');
             $('.dot').css('display', 'none');
             $('.divServices').css('display', 'none');
             $('.view').css('display', 'none');
             $('.button').on('click',function(){
                 $('.view').css('display', 'block');
                 $('.divAbout').css('display', 'none');
                 $('.divGallery').css('display', 'none');
                 $('.dot').css('display', 'none');
                 $('.divServices').css('display', 'none');
                 $('.divForm').css('display', 'none');
                 var name = $('#name').val();
                 var email = $('#mail').val();
                 var phone = $('#phone').val();
                 var complain = $('#complain').val();
                 $('.view').html('<p>Your Name: '+name+ '</p>'+'<br>'+
                                '<p>Your E-mail: '+email+'</p>'+'<br>' +
                                '<p>Your Phone: '+phone+ '</p>'+'<br>'+
                                '<p>Your Complain: '+complain+ '</p>'+'<br>'+
                                '<button class=" back">Back</button>');
                 $('.back').on('click', function(){
                        $('.view').css('display', 'none');
                        $('.divGallery').css('display', 'none');
                        $('.dot').css('display', 'none');
                        $('.divServices').css('display', 'none');
                        $('.divForm').css('display', 'block');  
                        $('.divAbout').css('display', 'none');
                                });
            });         
    });
});
























// slidShow Gallery
var slideIndex = 1;
    slideShow(slideIndex);

function nextSlide(n){
    slideShow(slideIndex += n);
}

function currentSlide(n){
    slideShow(slideIndex = n);
}


function slideShow(n){
    
    var i ; // starting point for the slidshow
    var slides = document.getElementsByClassName("slides"); //select all elements with class "slides"
    var dot = document.getElementsByClassName("dot"); //select all elements with class "dot"
    
    
    if ( n > slides.length) {
        slideIndex = 1;
    } 
    
    if (n < 1) {
        slideIndex = slides.length;
    }   
    
    for (i = 0; i <dot.length; i++){
        slides[i].style.display = "none";
    }
    
    for ( i = 0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dot[slideIndex-1].className += " active";
    
}
