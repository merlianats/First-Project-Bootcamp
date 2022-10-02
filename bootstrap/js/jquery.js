$(document).ready(function(){
    $(".row2").hide(function(){
        $("button.button-more").click(function(){
            $(".row2").toggle("slow");
        });
    });
});