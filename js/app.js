var personalList = new ShoppingList();

window.onload = function() {

  document.getElementById('content').innerHTML = personalList.render();
};


function add_to_shopping_list_button() {
  var newItem = new ShoppingListItem(
    document.forms[0].title.value,
    document.forms[0].description.value
    );

  personalList.addItem(newItem);
  document.getElementById('content').innerHTML = personalList.render();
}