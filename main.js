const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

const TSAR = new Book('The Sun Also Rises', 'Ernest Hemingway', '500', 'Read');

const Gatsby = new Book('The Great Gatsby', 'Fitzgerald', '300', 'Not Read');

const Junot = new Book('The Brief Wondrous Life of Oscar Wao', 'Junot Díaz', '400', 'Read');

const Watchmen = new Book('Watchmen', 'Alan Moore', '540', 'Read');


addBookToLibrary(TSAR);
addBookToLibrary(Gatsby);
addBookToLibrary(Junot);
addBookToLibrary(Watchmen);

let index = 0;

if (myLibrary.length > 0) {
  const bookTitle = document.querySelector('#bookTitle');
  bookTitle.textContent = myLibrary[0].title;

  const bookAuthor = document.querySelector('#bookAuthor');
  bookAuthor.textContent = myLibrary[0].author;

  const bookPages = document.querySelector('#bookPages');
  bookPages.textContent = myLibrary[0].pages;

  const bookRead = document.querySelector('#bookRead');
  bookRead.textContent = myLibrary[0].read;
}


function nextBook() {
  if (index >= (myLibrary.length - 1)) {
    index = 0;
  } else {
    index += 1;
  }

  const bookTitle = document.querySelector('#bookTitle');
  bookTitle.textContent = myLibrary[index].title;

  const bookAuthor = document.querySelector('#bookAuthor');
  bookAuthor.textContent = myLibrary[index].author;

  const bookPages = document.querySelector('#bookPages');
  bookPages.textContent = myLibrary[index].pages;

  const bookRead = document.querySelector('#bookRead');
  bookRead.textContent = myLibrary[index].read;
}

function previousBook() {
  if (index === 0) {
    index = (myLibrary.length - 1);
  } else {
    index -= 1;
  }

  const bookTitle = document.querySelector('#bookTitle');
  bookTitle.textContent = myLibrary[index].title;

  const bookAuthor = document.querySelector('#bookAuthor');
  bookAuthor.textContent = myLibrary[index].author;

  const bookPages = document.querySelector('#bookPages');
  bookPages.textContent = myLibrary[index].pages;

  const bookRead = document.querySelector('#bookRead');
  bookRead.textContent = myLibrary[index].read;
}

function toggleRead() {
  if (myLibrary[index].read === 'Read') {
    myLibrary[index].read = 'Not Read';
  } else {
    myLibrary[index].read = 'Read';
  }

  const bookRead = document.querySelector('#bookRead');
  bookRead.textContent = myLibrary[index].read;
}

function arrayIsEmpty() {
  const bookTitle = document.querySelector('#bookTitle');
  bookTitle.textContent = '';

  const bookAuthor = document.querySelector('#bookAuthor');
  bookAuthor.textContent = '';

  const bookPages = document.querySelector('#bookPages');
  bookPages.textContent = '';

  const bookRead = document.querySelector('#bookRead');
  bookRead.textContent = '';
}

function removeBook() {
  myLibrary.splice(index, 1);

  if (myLibrary.length === 0) {
    arrayIsEmpty();
  } else if (index >= myLibrary.length) {
    index = myLibrary.length - 1;

    const bookTitle = document.querySelector('#bookTitle');
    bookTitle.textContent = myLibrary[index].title;

    const bookAuthor = document.querySelector('#bookAuthor');
    bookAuthor.textContent = myLibrary[index].author;

    const bookPages = document.querySelector('#bookPages');
    bookPages.textContent = myLibrary[index].pages;

    const bookRead = document.querySelector('#bookRead');
    bookRead.textContent = myLibrary[index].read;
  } else {
    const bookTitle = document.querySelector('#bookTitle');
    bookTitle.textContent = myLibrary[index].title;

    const bookAuthor = document.querySelector('#bookAuthor');
    bookAuthor.textContent = myLibrary[index].author;

    const bookPages = document.querySelector('#bookPages');
    bookPages.textContent = myLibrary[index].pages;

    const bookRead = document.querySelector('#bookRead');
    bookRead.textContent = myLibrary[index].read;
  }
}

const card = document.querySelector('.card');
const addingForm = document.querySelector('.addingForm');

function toggleForm() {
  card.classList.toggle('hidden-form');
  addingForm.classList.toggle('hidden-form');
}

const alertMsg = document.querySelector('.alertMsg');

function bookWarning() {
  alertMsg.classList.remove('hidden-form');
}

function hideWarning() {
  alertMsg.classList.add('hidden-form');
}

const addBookForm = document.querySelector('#addBookForm');

const fvariable = addBookForm.elements;
const {
  ftitle, fauthor, fpages, fread,
} = fvariable;

let varNum = 1; // used for assigning dynamic variables

function addBook() {
  if (ftitle.value === '') {
    bookWarning();
  } else if (fauthor.value === '') {
    bookWarning();
  } else if (fpages.value === '') {
    bookWarning();
  } else if (fread.value === '') {
    bookWarning();
  } else {
    window[`book_${varNum}`] = new Book(ftitle.value, fauthor.value, fpages.value, fread.value);
    addBookToLibrary(window[`book_${varNum}`]);

    varNum += 1;

    if (myLibrary.length === 1) {
      const bookTitle = document.querySelector('#bookTitle');
      bookTitle.textContent = myLibrary[0].title;

      const bookAuthor = document.querySelector('#bookAuthor');
      bookAuthor.textContent = myLibrary[0].author;

      const bookPages = document.querySelector('#bookPages');
      bookPages.textContent = myLibrary[0].pages;

      const bookRead = document.querySelector('#bookRead');
      bookRead.textContent = myLibrary[0].read;
    }

    ftitle.value = '';
    fauthor.value = '';
    fpages.value = '';
    fread.value = '';

    toggleForm();
    hideWarning();
  }
}

document.getElementById('previousBookBtn').addEventListener('click', previousBook);
document.getElementById('nextBookBtn').addEventListener('click', nextBook);
document.getElementById('removeBookBtn').addEventListener('click', removeBook);
document.getElementById('newBookBtn').addEventListener('click', toggleForm);
document.getElementById('addBookBtn').addEventListener('click', addBook);
document.getElementById('cancelBtn').addEventListener('click', toggleForm);
document.getElementById('cancelBtn').addEventListener('click', hideWarning);
document.getElementById('toggleReadBtn').addEventListener('click', toggleRead);
