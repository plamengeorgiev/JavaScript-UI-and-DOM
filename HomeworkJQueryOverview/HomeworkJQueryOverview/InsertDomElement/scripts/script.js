var counter = 1;
$("#beforeBtn").on("click", insertBefore);
$("#afterBtn").on("click", insertAfter);

function insertBefore() {
    $('#container').parent().prepend("<div>Insertion-" + counter + "</div>");
    counter++;
}

function insertAfter() {
    $('#container').parent().append("<div>Insertion-" + counter + "</div>");
    counter++;
}
