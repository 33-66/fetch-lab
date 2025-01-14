function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => books.forEach(book => renderBooks(book)))
}

function renderBooks(book) {
  const main = document.querySelector('main');
  const h2 = document.createElement('h2');
  h2.innerHTML = book.name;
  main.appendChild(h2);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
