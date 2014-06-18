var students = [
{
    firstName: 'Peter',
    lastName: 'Ivanov',
    grade: '3',
},
{
    firstName: 'Milena',
    lastName: 'Grigorova',
    grade: '6',
},
{
    firstName: 'Gergana',
    lastName: 'Borisova',
    grade: '12',
},
{
    firstName: 'Boyko',
    lastName: 'Petrov',
    grade: '7',
},
];
function onGenerateTableBtnClick() {
    var $table = $('<table>').appendTo('body');
    var $thead = $('<thead>').appendTo($table);
    var $tr = $('<tr>').appendTo($thead);
    $tr.append($('<th>').text('First name'));
    $tr.append($('<th>').text('Last name'));
    $tr.append($('<th>').text('Grade'));
    var $tbody = $('<tbody>').appendTo($table);

    for (var i in students) {
        var $stInfo = $('<tr>');
        $stInfo.append($('<td>').text(students[i].firstName));
        $stInfo.append($('<td>').text(students[i].lastName));
        $stInfo.append($('<td>').text(students[i].grade));

        $stInfo.appendTo($tbody);
    }
}
