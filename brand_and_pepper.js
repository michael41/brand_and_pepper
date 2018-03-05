$(document).ready(function(){


//Showing images depending on what was scroled
function showImage1(){
	$('.header_image_1').fadeIn(1000);
	$('.header_image_2').hide();
	$('.header_image_3').hide();
	$('.below_top3sections').hide();
    $('.h_i_n_btn_1').find('p').addClass('slide_u_r_on');
    $('.h_i_n_btn_2').find('p').removeClass('slide_u_r_on');
    $('.h_i_n_btn_3').find('p').removeClass('slide_u_r_on');
}

function showImage2(){
	$('.header_image_1').hide();
	$('.header_image_2').fadeIn(1000);
	$('.header_image_3').hide();
	$('.below_top3sections').hide();
    $('.h_i_n_btn_1').find('p').removeClass('slide_u_r_on');
    $('.h_i_n_btn_2').find('p').addClass('slide_u_r_on');
    $('.h_i_n_btn_3').find('p').removeClass('slide_u_r_on');
}


function showImage3(){
	$('.header_image_1').hide();
	$('.header_image_2').hide();
	$('.header_image_3').fadeIn(1000);
	$('.below_top3sections').hide(1000);
    $('body').css('background-color', '#5e355c');
    $('.h_i_n_btn_1').find('p').removeClass('slide_u_r_on');
    $('.h_i_n_btn_2').find('p').removeClass('slide_u_r_on');
    $('.h_i_n_btn_3').find('p').addClass('slide_u_r_on');
    $('.arrow_down_div').show();
}

function showImage4(){
	$('.header_image_1').hide();
	$('.header_image_2').hide();
	$('.header_image_3').hide();
	$('.below_top3sections').fadeIn();
    $('body').css('background-color', '#fff');
    $('.arrow_down_div').hide();
}

//variables to determine when to scroll and the fact the header functionality should only work on large screens
var pic_showing = 1; 
var scrollThingLargeScreens;


//If it's a smaller screen, the the dynamic scrolling functionality is set to false, otherwise it's true
if ($(".below_top3sections").css("display") == "block" ){
					       				        
    $('.below_top3sections').show();
    scrollThingLargeScreens = false;
    console.log(scrollThingLargeScreens);
}	
else
{
    scrollThingLargeScreens = true;
    console.log(scrollThingLargeScreens);
}		

//Mouse wheel goes down or up and the header images display dynamically accordingly
$(window).bind('mousewheel', function(e){

        //First Scroll Down
        if ((e.originalEvent.wheelDelta /120 < 0) && (pic_showing == 1) && (scrollThingLargeScreens == true)) 
        {
            // console.log(pic_showing);
            // console.log('1st scroll down');
            pic_showing = 2;
            showImage2();	


        }

        //Second Scroll Down
        else if ((e.originalEvent.wheelDelta /120 < 0) && (pic_showing == 2) && (scrollThingLargeScreens == true)) 
        {
            // console.log(pic_showing);
            // console.log('2nd scroll down');
            pic_showing = 3;
            showImage3();
        }

        //Third Scroll Down
        else if ((e.originalEvent.wheelDelta /120 < 0) && (pic_showing == 3) && (scrollThingLargeScreens == true)) 
        {
            // console.log(pic_showing);
            // console.log('3rd scroll down');
            pic_showing = 4;
            showImage4();
            $('.top_menu').hide(); //hide the top menu
        }

        //Beneath the 3rd scroll down
        else if ((e.originalEvent.wheelDelta /120 < 0) && (pic_showing == 4) && (scrollThingLargeScreens == true)) 
        {
            // console.log(pic_showing);
            // console.log('4th scroll down');
            pic_showing = 5;
        }


		//First Scroll Up
        if ((e.originalEvent.wheelDelta /120 > 0) && (pic_showing == 2) && (scrollThingLargeScreens == true)) 
        {
        	// console.log(pic_showing);
         //    console.log('1st scroll up');
            pic_showing = 1;
            showImage1();
        }

        //Second Scroll Up
        else if ((e.originalEvent.wheelDelta /120 > 0) && (pic_showing == 3) && (scrollThingLargeScreens == true)) 
        {
            // console.log(pic_showing);
            // console.log('2nd scroll up');
            pic_showing = 2;
            showImage2();
        }

        //Third Scroll Up
        else if ((e.originalEvent.wheelDelta /120 > 0) && (pic_showing == 4) && (scrollThingLargeScreens == true)) 
        {
            // console.log(pic_showing);
            // console.log('3rd scroll up');
            pic_showing = 3;
            showImage3();
            $('.top_menu').show(); //show the top menu

        }

    });


// When you reach the top of the screen again, then go back to showing the headers again : 
$(window).scroll(function()
    {
        var div = $(this);
        if (div[0].scrollHeight - div.scrollTop() == div.height())
        {
            // alert("Reached the bottom!");
        }
        else if((div.scrollTop() == 0) && (scrollThingLargeScreens == true))
        {
            // alert("Reached the top!");
            pic_showing = 4;
        }
    });

//Navigation divs on banner

$('.h_i_n_btn_1').click(function(){

    showImage1();
    pic_showing = 1;

});

$('.h_i_n_btn_2').click(function(){

    showImage2();
    pic_showing = 2;

});

$('.h_i_n_btn_3').click(function(){

    showImage3();
    pic_showing = 3;

});


// Top Menu
$(".top_menu_btn").hover(function(){


        $(this).find('p').first().css({"color": "#5e355c", "font-weight": "bold"});
        

        },
        function(){
        $(this).find('p').first().css("color", "#fff");


    });


  	$(".top_menu_btn").on("mouseenter", function(){
    	$(this).find(".services_dropdown").show();
	});

	$(".top_menu_btn").on("mouseleave", function(){
    	$(this).find(".services_dropdown").hide();
	});


$(".sub_menu_btn").hover(function(){


        $(this).find('p').first().css("color", "#fff");

        },
        function(){
        $(this).find('p').first().css("color", "#5e355c");

    });


});