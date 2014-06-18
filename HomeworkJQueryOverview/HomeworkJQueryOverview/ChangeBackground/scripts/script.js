$("input").on("change", function () {
    var color = $("input").val();
    $("body").css('background-color', color);
});