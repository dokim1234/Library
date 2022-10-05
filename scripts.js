let myLibrary = [];
let newBook;

let book = (title, author, pages, read) => {
  
  return {title, author, pages, read}
}

function addBook(title, author, pages, read) {
  
  myLibrary.push({})
}

function popUp(){
  prompt("Title of Book:")
}

var addBookBtn = document.querySelector('#addBook-btn');

// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}