$(function(){
    //section2
    $(".slideshow-slides").find("div:last").prependTo(".slideshow-slides");
    $(".slideshow-slides").css("marginLeft","-=920px");
    $("#next").click(function(){
        $(".slideshow-slides").animate({marginLeft:"-=920px"},300,"linear",function(){
            $(".slideshow-slides").find("div:first").appendTo(".slideshow-slides");
            $(".slideshow-slides").css("marginLeft","-920px");
        });
    });

    $("#pre").click(function(){
        $(".slideshow-slides").animate({marginLeft:"+=920px"},300,"linear",function(){
            $(".slideshow-slides").find("div:last").prependTo(".slideshow-slides");
            $(".slideshow-slides").css("marginLeft","-=920px");
        });
    });






//section5
current=0;
setInterval(function(){
   var next= (current+1)%3;
    $(".advantage").find("div").eq(current).fadeOut();
    $(".advantage").find("div").eq(next).fadeIn();
current=next;
},3000);





});