let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

var TSAR = new Book("The Sun Also Rises", "Ernest Hemingway", "500", "Read");

var Gatsby = new Book("The Great Gatsby", "Fitzgerald", "300", "Not Read");

var Junot = new Book("The Brief Wondrous Life of Oscar Wao", "Junot Díaz", "400", "Read");

var Watchmen = new Book("Watchmen", "Alan Moore", "540", "Read");


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

addBookToLibrary(TSAR);
addBookToLibrary(Gatsby);
addBookToLibrary(Junot);
addBookToLibrary(Watchmen);

let index = 0;

const bookTitle = document.querySelector('#bookTitle');
bookTitle.textContent = myLibrary[0].title;

const bookAuthor = document.querySelector('#bookAuthor');
bookAuthor.textContent = myLibrary[0].author;

const bookPages = document.querySelector('#bookPages');
bookPages.textContent = myLibrary[0].pages;

const bookRead = document.querySelector('#bookRead');
bookRead.textContent = myLibrary[0].read;


function nextBook() {
    if(index >= (myLibrary.length - 1)) {
        index = 0;
    } else {
        index++;
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
    if(index === 0) {
        index = (myLibrary.length - 1);
    } else {
        index--;
    }

    const bookTitle = document.querySelector('#bookTitle');
    bookTitle.textContent = myLibrary[index].title;

    const bookAuthor = document.querySelector('#bookAuthor');
    bookAuthor.textContent = myLibrary[index].author;

    const bookPages = document.querySelector('#bookPages');
    bookPages.textContent = myLibrary[index].pages;

    const bookRead = document.querySelector('#bookRead');
    bookRead.textContent = myLibrary[index].read;

    alert ("The array is super mega empty");
}


Book.prototype.toggleRead = function() {
    if(this.read === 'Read') {
        this.read = 'Not Read';
    } else {
        this.read = 'Read';
    }

    const bookRead = document.querySelector('#bookRead');
    bookRead.textContent = myLibrary[index].read;
};

/*
function toggleRead() {

    if(myLibrary[index].read === 'Read') {
        myLibrary[index].read = 'Not Read';
    } else {
        myLibrary[index].read = 'Read';
    }

    const bookRead = document.querySelector('#bookRead');
    bookRead.textContent = myLibrary[index].read;

}
*/

function removeBook() {
    myLibrary.splice(index, 1);

    index--; //this is done so when we run nextBook() in the next line, we fall on the same position of the object we erased

    nextBook();

    isArrayEmpty();
}

function isArrayEmpty() {

    var chula = myLibrary.length;

    alert ("It gets to THIS POINT: " + chula.toString());

    if (myLibrary.length === 0 ) {

        alert ("WOWOWOWOWOOWOWOWOWOOWOWOWOWOWOWO");

        const bookTitle = document.querySelector('#bookTitle');
        bookTitle.textContent = "";

        const bookAuthor = document.querySelector('#bookAuthor');
        bookAuthor.textContent = "";

        const bookPages = document.querySelector('#bookPages');
        bookPages.textContent = "";

        const bookRead = document.querySelector('#bookRead');
        bookRead.textContent = "";
    }
}

//do logic for empty myLibrary array