var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

//Add Item
function addItem(e) {
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add   class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // itemList.appendChild(li);

    //create del button element 
    var delbtn = document.createElement('button');

    //add class to del button 
    delbtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    delbtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(delbtn);

    //append li to list
    itemList.appendChild(li);


}

//remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {

        if (confirm('are you sure')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function filterItems() {
    //convert text  to lowercase
    var text = e.target.value.toLowerCase();
    //get lis
    var items = itemlist.getElementById('li');
    //convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (item.itemName.toLowerCase.indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}