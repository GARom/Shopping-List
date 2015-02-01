//Class 
function ShoppingList () {
  //class constructor

  //instance properties below
  this.items = [];
}

// Instance Method
ShoppingList.prototype.addItem = function(item) {
  if (item instanceof ShoppingListItem) {
    this.items.push(item);
  } else {
    return false;
  }
}

ShoppingList.prototype.removeItem = function(item) {
  if (item instanceof ShoppingListItem) {
    this.forEach(function(element, index) {
      if (item === element) {
        this.splice(index, 1);
      }
    })
  } else {
    return false
  }

  // if (subtractedItem === "") {
  //   this.items.pop(subtractedItem);
  // } else {
  //   return false;
  // }
}

ShoppingList.prototype.render = function () {
  var openingOfHTML = '<ul>';

  var closingOfHTML = '</ul>';
  for (i = 0; i >= this.item.length-1; i++) {
    // moreHTML.push(this.item)
  '<ul>' + someHTML + '</ul>'
  }
 var entireHTML = openingOfHTML + someHTML + closingOfHTML
}






var itemsChanged = new ShoppingList();