const booksList = [];

function createContainer() {
    const bookContainer = document.getElementById('books-container');
    bookContainer.innerHTML = `
    <ul id='cards'>
    `;
    const cardsList = document.getElementById('cards');
    booksList.forEach((card) => {
      const workCard = document.createElement('li');
      workCard.innerHTML += `
          <p class="book-name">${card.title}</p>
          <p class="Author-name">${card.author}</p>
          <button type="button" class="${card.title}">Remove</button>
          <hr>
        `;
      cardsList.appendChild(workCard);
    });
};

const title = document.getElementById('add-book-name').value;
const author = document.getElementById('add-author-name').value;
function addNewBook (title, author){
 const book = {
    title: title,
    author: author
 };
 booksList.push(book);
}
const addButton = document.getElementById('add-book');
addButton.addEventListener('click', () => {
    addNewBook();
    createContainer();
  });