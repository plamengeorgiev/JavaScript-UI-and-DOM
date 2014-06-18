var newItem = document.getElementById('newItem'),
	addButton = document.getElementById('addBtn'),
	toggleButton = document.getElementById('toggleButton')
	taskList = document.getElementById('tasks');

addButton.addEventListener('click', addItem);
toggleButton.addEventListener('click', toggleListView);

function addItem() {
    if (newItem.value) {
        var li = document.createElement('li');
        var p = document.createElement('p');
        var remove = document.createElement('button');
        remove.innerHTML = 'remove item';
        remove.id = 'remove';
        remove.type = 'button';
        remove.addEventListener('click', removeItem);

        var content = document.createTextNode(newItem.value);

        p.appendChild(content);
        li.appendChild(p);
        li.appendChild(remove);
        taskList.appendChild(li);
    }
}

function removeItem(ev) {
    taskList.removeChild(this.parentNode);
}

function toggleListView() {
    if (taskList.style.display == 'none') {
        toggleButton.innerHTML = 'Hide list';
        taskList.style.display = 'block';
    } else {
        toggleButton.innerHTML = 'Show list';
        taskList.style.display = 'none';
    }
}