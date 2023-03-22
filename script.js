class BooksList {
  constructor() {
    this.booksList = [];
    if (localStorage.getItem('data')) {
      this.booksList = JSON.parse(localStorage.getItem('data'));
    }
  }

  createContainer() {
    const bookContainer = document.getElementById('books-container');
    bookContainer.innerHTML = `
    <ul id='cards'>
    `;
    const cardsList = document.getElementById('cards');
    for (let i = 0; i < this.booksList.length; i += 1) {
      const workCard = document.createElement('li');
      workCard.setAttribute('id', `${this.booksList[i].title}`);
      workCard.innerHTML += `
        <p class="book-name">"${this.booksList[i].title}" by ${this.booksList[i].author}</p>        
        <button type="button" class="removeBtn">Remove</button>
        `;
      workCard.querySelector('.removeBtn').addEventListener('click', () => {
        const childr = document.getElementById(`${this.booksList[i].title}`);
        childr.parentNode.removeChild(childr);
        this.booksList.splice(i, 1);
        localStorage.setItem('data', JSON.stringify(this.booksList));
        this.createContainer();
      });

      cardsList.appendChild(workCard);
    }
  }

  addNewBook() {
    const title = document.getElementById('add-book-name').value;
    const author = document.getElementById('add-author-name').value;
    const book = {
      title,
      author,
    };
    if (title && author) {
      this.booksList.push(book);
      document.getElementById('add-book-name').value = '';
      document.getElementById('add-book-name').placeholder = 'Title';
      document.getElementById('add-author-name').value = '';
      document.getElementById('add-author-name').placeholder = 'Author';
      document.getElementById('validation').innerHTML = '';
    } else {
      document.getElementById('validation').innerHTML = 'Please fill author and book title';
    }
  }
}

const booksList = new BooksList();
const addButton = document.getElementById('add-book');
addButton.addEventListener('click', () => {
  booksList.addNewBook();
  booksList.createContainer();
  localStorage.setItem('data', JSON.stringify(booksList.booksList));
});

window.onload = () => {
  booksList.createContainer();
};

const currentDate = new Date();
const options = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

document.getElementById('date').innerHTML = currentDate.toLocaleDateString('en-US', options);

const listBook = document.getElementById('listBooks');
const addNewSection = document.getElementById('addNewBook');
const contactSection = document.getElementById('contactSection');
const sectionUno = document.getElementById('list');
const sectionDos = document.getElementById('add-new');
const sectionTres = document.getElementById('contact');

listBook.addEventListener('click', () => {
  sectionUno.style.display = 'block';
  sectionDos.style.display = 'none';
  sectionTres.style.display = 'none';
  listBook.style.color = 'blue';
  addNewSection.style.color = 'black';
  contactSection.style.color = 'black';
});

addNewSection.addEventListener('click', () => {
  sectionUno.style.display = 'none';
  sectionDos.style.display = 'block';
  sectionTres.style.display = 'none';
  listBook.style.color = 'black';
  addNewSection.style.color = 'blue';
  contactSection.style.color = 'black';
});

contactSection.addEventListener('click', () => {
  sectionUno.style.display = 'none';
  sectionDos.style.display = 'none';
  sectionTres.style.display = 'flex';
  listBook.style.color = 'black';
  addNewSection.style.color = 'black';
  contactSection.style.color = 'blue';
});
