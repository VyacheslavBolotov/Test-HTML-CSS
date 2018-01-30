$(document).ready(function() {

    $(".color").click(function() {
        $(".reserved").fadeOut(0);
        $(this).children(".reserved").fadeIn(0);
    })
})