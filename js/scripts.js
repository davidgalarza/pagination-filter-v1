// Global Variables
var itemsPerPage = 10;
var list = document.getElementsByClassName('student-list');



// Count the numbrer of items in the list
var getNumberOfItems = function () {
  var numbrerOfItems = document.getElementsByClassName('student-item').length;
  return (numbrerOfItems);
}
// Generating rhe number of pages
var getNumberOfPages = function () {
  var numberOfPages = parseInt(getNumberOfItems() / itemsPerPage);
  if ( getNumberOfItems() % itemsPerPage > 0 ){
    numberOfPages += 1;
  }
  return numberOfPages;
}
// adding the buttons of pagination
var generateButtons = function(){
  var ul = document.createElement("ul");
  for (var i = 1; i <= getNumberOfPages(); i++){
    var eli = document.createElement("li");
    ul.appendChild(eli);
  }


}

// adding the items to the page

var addItems = function () {

}
generateButtons();
console.log(getNumberOfItems());
console.log(getNumberOfPages());
