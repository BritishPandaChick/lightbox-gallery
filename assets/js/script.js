$(document).ready(function(){
    $("#lightbox li").click(function(){
        var item = $(this);
        var img = item.find("img");
        var title = item.find(".title").html();

        //The large image 
        var large_img = new Image();
        //Use data-large or the src itself if large image url is not available 
        large_img.src = img.attr("data-large") ? img.attr("data-large") : img.attr("src");

        //Remove active class from previously clicked LI 
        $("#lightbox li.active").removeClass("active");
        //Marked the clicked LI as active for later use 
        item.addClass("active");
    });
});