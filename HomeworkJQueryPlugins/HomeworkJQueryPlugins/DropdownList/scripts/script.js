$.fn.dropdown = function () {
    var $dropdownSelect = $(this);
    $dropdownSelect.hide();

    var $container = $('<div />');
    $container.addClass('dropdown-list-container');
    $container.css('width', '100px');
    $container.css('border', '1px solid black');
    $container.css('cursor', 'context-menu');

    var $selectedItem = $('<div />');
    $selectedItem.css('padding-left', '5px');
    $selectedItem.text($dropdownSelect.children('option').first().text());
    $container.append($selectedItem);

    var $ul = $('<ul />');
    $ul.css('list-style-type', 'none');
    $ul.css('padding', 0);
    $ul.css('margin', 0);
    $ul.hide();

    var $li = $('<li />');
    $li.addClass('drop-down-list-option');
    $li.css('padding-left', '5px');

    var $options = $('option', $dropdownSelect);
    $options.each(function (index, value) {
        $li.text($(value).text());
        $li.on('click', function () {
            $dropdownSelect.find('option:selected').removeAttr('selected');
            $dropdownSelect.find('option[value="' + (index+1) + '"]').attr("selected", "true");
        })
        ;
        $ul.append($li);
        $li = $li.clone();
    });

    $container.append($ul);
    $(document.body).append($container);

    $selectedItem.on('click', function () {
        $selectedItem.css('border-bottom', '1px solid black');
        $ul.show();

    });

    $ul.on('click', 'li.drop-down-list-option', function () {
        $selectedItem.text($(this).text());
        $ul.hide();
        $selectedItem.css('border-bottom', 'none');
    })
}

$('#dropdown').dropdown();