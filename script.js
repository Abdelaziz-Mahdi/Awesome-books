let booksList = [];

if (localStorage.getItem('data')) {
  booksList = JSON.parse(localStorage.getItem('data'));
}

function createContainer() {
  const bookContainer = document.getElementById('books-container');
  bookContainer.innerHTML = `
  <ul id='cards'>
  `;
  const cardsList = document.getElementById('cards');
  for (let i = 0; i < booksList.length; i += 1) {
    const workCard = document.createElement('li');
    workCard.setAttribute('id', `${booksList[i].title}`);
    workCard.innerHTML += `
      <p class="book-name">${booksList[i].title}</p>
      <p class="Author-name">${booksList[i].author}</p>
      <button type="button" class="removeBtn">Remove</button>
      <hr>
      `;
    workCard.querySelector('.removeBtn').addEventListener('click', () => {
      const childr = document.getElementById(`${booksList[i].title}`);
      childr.parentNode.removeChild(childr);
      booksList.splice(i, 1);
      localStorage.setItem('data', JSON.stringify(booksList));
      createContainer();
    });

    cardsList.appendChild(workCard);
  }
}

function addNewBook() {
  const title = document.getElementById('add-book-name').value;
  const author = document.getElementById('add-author-name').value;
  const book = {
    title,
    author,
  };
  booksList.push(book);
}

const addButton = document.getElementById('add-book');
addButton.addEventListener('click', () => {
  addNewBook();
  createContainer();
  localStorage.setItem('data', JSON.stringify(booksList));
});

window.onload = () => {
  createContainer();
};