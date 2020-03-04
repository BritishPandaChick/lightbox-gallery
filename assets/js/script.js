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

        //Adding additional HTML
        if($(".lb_backdrop").length <1){
            var lb_backdrop = "<div class="lb_backdrop"></div>";
            var lb_canvas = "<div class="lb_canvas"></div>";
            var lb_previous = "<span class="lb_previous">&#59229</span>";
            var lb_title = "<span class="lb-title">Sample</span>";
            var lb_next = "<span class="lb_next">&#59230</span>";
            var lb_controls = "<div class="lb_controls">" + lb_previous + lb_title + lb_next + "</div>";
            var total_html = lb_backdrop + lb_canvas + lb_controls;

            $(total_html).appendTo("body");
        }

        //Centering .lb_canvas 
        var CW = $(".lb_canvas").outerWidth();
        var CH = $(".lb_canvas").outerHeight();
        //top and left coordinates 
        var CL = ($(window).width() - CW)/2;
        var CT = ($(window).height() - CH)/2;
        $(".lb_canvas").css((top: CT, left: CL));

        //Inserting the large image into .lb_canvas once it's loaded 
        $(large_img).load(function(){
            //Recentering .lb_canvas with new dimensions 
            CW = large_img.width;
            CH = large_img.height;
            //.lb_canvas padding to b added to image width/height to get the total dimensions 
            var hpadding = parseInt($(".lb_canvas").css("paddingLeft")) + parseInt($(".lb_canvas").css("paddingRight"));
            var vpadding = parseInt($(".lb_canvas").css("paddingTop")) + parseInt($(".lb_canvas").css("paddingBottom"));
            CL = ($(window).width() - CW - hpadding)/2 
            CT = ($(window).height() - CW - vpadding)/2
            
            //Animating .lb_canvas to new dimensions and position
            $(".lb_canvas").html("").animate({width: CW, height: CH, top: CT, left: CL}, 500, function(){
                //Inserting the image but keeping it hidden 
                var imgtag = '<img src="' + large_img.src + '" style="opacity: 0;" />';
                $(".lb_canvas").html(imgtag);
                $()
            });     
        });
    });
});