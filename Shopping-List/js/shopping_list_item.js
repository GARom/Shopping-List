//Class 
function ShoppingListItem (name, description) {
  //class constructor

  //instance properties below
  this.name = name;
  this.description = description;
  this.is_done = false;
}

// Instance Method
ShoppingListItem.prototype.check = function() {
  this.is_done = true;

}
ShoppingListItem.prototype.uncheck = function() {
  this.is_done = false;

}
ShoppingListItem.prototype.render = function () {
  var listHTML = '<li class=' + this.is_done + ' > \
                      <span>' + this.name + '</span> \
                      <span>' this.description '.</span> \
                  </li>';
  return listHTML;
}
 

