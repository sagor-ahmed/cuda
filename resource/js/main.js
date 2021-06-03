$(document).ready(function(){
	
    
    var mixer = mixitup('.container');
  
   
    ////////////////////////////////////////////////////

    // 01. Sticky Js

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        if (scroll < 245) {

            $("#main-menu").removeClass("sticky");

        } else {

            $("#main-menu").addClass("sticky");

        }
    });


    ////////////////////////////////////////////////////

    // 02. Scroll To Top Js

    function smoothSctollTop() {

        $('.smooth-scroll a').on('click', function (event) {

            var target = $(this.getAttribute('href'));

            if (target.length) {

                event.preventDefault();

                $('html, body').stop().animate({

                    scrollTop: target.offset().top - 0

                }, 1500);

            }

        });

    }

    smoothSctollTop();



    // Show or hide the sticky footer button

    $(window).on('scroll', function (event) {

        if ($(this).scrollTop() > 600) {

            $('#scroll').fadeIn(200)

        } else {

            $('#scroll').fadeOut(200)

        }

    });



    //Animate the scroll to yop

    $('#scroll').on('click', function (event) {

        event.preventDefault();



        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });


    ////////////////////////////////////////////////////

    // 03.  Data-Background Js

    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + " ) ")
    });


    
/*
$(".js--service-section").waypoint(function(direction){
	 if(direction == "down"){
		
	$("nav").addClass("sticky");
		
	}
		
	else{
		
	$("nav").removeClass("sticky");	

	}	
		
	
});*/


  /* one Page Nav */
/*    
  var top_offset= $('.header-area').height()-10;	
	$('#main-menu').onePageNav({
       currentClass : "active" ,
	   scrollOffset : top_offset,	   
	});

	*/
	

   	/* == Mean menu === */
	
    // meanmenu
  /* $('.mobi-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });
    */
    
    
    // Toggel Menu
	$('#menu-toggle').click(function (e) {
		e.preventDefault();
		
		$('.mean-menu').slideToggle();
		
	});
	
    
 

    ////////////////////////////////////////////////////

    //  Masonary Js

    var $grid = $('.grid').imagesLoaded(function () {

        // init Isotope

        var $grid = $('.grid').isotope({

            itemSelector: '.grid-item',

            percentPosition: true,

            masonry: {

                // use outer width of grid-sizer for columnWidth

                columnWidth: '.grid-item',

            }

        });

    });

    // filter items on button click

    $('.masonary-menu').on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');

        $grid.isotope({
            filter: filterValue
        });

    });



    //for menu active class

    $('.masonary-menu button').on('click', function (event) {

        $(this).siblings('.active').removeClass('active');

        $(this).addClass('active');

        event.preventDefault();

    });


    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


});




/*
function openNav(){
	
document.getElementById('myNav').style.width = "100%";	
}

function closeNav(){
document.getElementById("myNav").style.width= "0%";	
	
}
*/



/*
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  //setup back to top link  
  if (scrollHeight > 500) {
    //console.log("helo");
	
    topLink.classList.add("show-link");
  } 
  
  else {
    topLink.classList.remove("show-link");
  }
  
  
});


*/






/*

const navToggle = document.querySelector("#menu-toggle");
const links = document.querySelector(".mean-menu");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
    
});
*/





