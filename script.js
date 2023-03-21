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
      workCard.innerHTML += `
          <p class="book-name">${booksList[i].title}</p>
          <p class="Author-name">${booksList[i].author}</p>
          <button type="button" id="${i}">Remove</button>
          <hr>
        `;
      cardsList.appendChild(workCard);
    };
    removeBook();
};

function addNewBook (){
 const title = document.getElementById('add-book-name').value;
 const author = document.getElementById('add-author-name').value;
 const book = {
    title: title,
    author: author
 };
 booksList.push(book);
}

function removeBook (){
for (let i=0; i<1000;i++){
    let remove = document.getElementById(i);
  if (document.getElementById(i)!=null){
    remove.addEventListener('click', () => {
      booksList.splice([i,1]);
      localStorage.setItem('data', JSON.splice([i,1]));
    });
    console.log('test removeBook fun',i)
  }
}
}
const addButton = document.getElementById('add-book');
addButton.addEventListener('click', () => {
    addNewBook();
    createContainer();
    localStorage.setItem('data', JSON.stringify(booksList));
    console.log(booksList);
  });

window.onload = () => {
    createContainer();
};
  