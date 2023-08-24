window.onload = function() {
    var listItems = document.querySelectorAll('#shoppingList li');
    for (let i = 0; i < listItems.length; i++) {
      setTimeout(function() {
        listItems[i].style.opacity = 1;
      }, 200 * i);
    }
  };