const submitBtn = document.getElementById('submit');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookGenre = document.getElementById('genre');
const bookPages = document.getElementById('pages');
const bookForm = document.getElementsByClassName('book-form');
const resetBtn = document.getElementById('new-book');
const bookContainer = document.getElementsByClassName('book-container');

const myLibrary = [];

function Book(title, author, genre, pages) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    //this.id = crypto.randomUUID();
}

function addBookToLibrary() {
    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();
        // Takes the input values from the form and display the info via alert().
        const bTitle = new Book(bookTitle.value, bookAuthor.value, bookGenre.value, bookPages.value); // Adds form data to Object Constructor "Book" to variable bTitle.
        myLibrary.push(bTitle);
        console.log(myLibrary);
        
    });
};
addBookToLibrary();

const repeat = () =>{
    for(i=1; i<10; i++) // Looping array data (testing at the moment.)
        console.log(myLibrary);
}
repeat();

function newBook(){ // Clear form data, ready for a new book input.
    resetBtn.addEventListener('click', function(event){
        event.preventDefault();
        bookTitle.value = "";
        bookAuthor.value = "";
        bookGenre.value = "";
        bookPages.value = "";
    });
};

newBook();

// Next to create a pop up card of the book details using DOM manipulation via JS.