import { BookList } from './BookList.js'
import { Book } from './Book.js'

export class Library {
    constructor() {
        this.bookList = new BookList();
        this.enableAppOptions();
    }

    filterBooksHandler(category) {
        const allBooksBtn = document.getElementById('all-btn');
        const readBooksBtn = document.getElementById('read-btn');
        const notReadBooksBtn = document.getElementById('not-read-btn');

        if (category === "read") {
            this.bookList.filterBookCategory("read");
            readBooksBtn.classList.add("active");
            notReadBooksBtn.classList.remove("active");
            allBooksBtn.classList.remove("active");
        } else if (category === "not read") {
            this.bookList.filterBookCategory("not read");
            readBooksBtn.classList.remove("active");
            notReadBooksBtn.classList.add("active");
            allBooksBtn.classList.remove("active");
        } else {
            this.bookList.filterBookCategory();
            readBooksBtn.classList.remove("active");
            notReadBooksBtn.classList.remove("active");
            allBooksBtn.classList.add("active");
        }
        this.render();
    }

    searchBooksHandler() {
        const searchTerm = document.getElementById("book-filter").value.toLowerCase();
        this.render(searchTerm);
    }

    changeReadStatusHandler(element) {
        if (element.hasAttribute("checked")) {
            element.removeAttribute("checked");
            // Do something in the UI when not read
            element.previousElementSibling.textContent = "Not yet read";
        } else {
            element.setAttribute("checked", "");
            // Do something in the UI when read
            element.previousElementSibling.textContent = "Read";
        }
    } 

    returnHandler() {
        this.showAddBookModalHandler();
        this.clearUserInputs();
    }

    deleteBookHandler(element) {
        element.parentElement.parentElement.remove();
    }   

    addBookHandler() {
        event.preventDefault();
        const inputTitle = document.getElementById("book-title").value;
        const inputAuthor = document.getElementById("book-author").value;
        const inputYear = document.getElementById("year").value;
        const inputReadStatus = document.getElementById("read-status").checked; // True or False

        const book = new Book(inputTitle, inputAuthor, inputYear, inputReadStatus);
        
        this.bookList.addBook(book);
        
        this.showAddBookModalHandler();
        this.clearUserInputs();
        this.render();
    }

    showAddBookModalHandler() {
        const addBookModal = document.getElementById("add-edit-book");
        const backdrop = document.getElementById("backdrop");
        addBookModal.classList.toggle("visible");
        backdrop.classList.toggle("visible");
    }

    clearUserInputs() {
        const userInputFields = document.querySelectorAll("input[type=text], input[type=number]");
        userInputFields.forEach( e => e.value = '');

        const inputReadStatus = document.getElementById("read-status");
        inputReadStatus.removeAttribute("checked"); // Doesn't seem to do anything
    }

    enableAppOptions() {
        const searchBtn = document.getElementById('search-btn');
        const allBooksBtn = document.getElementById('all-btn');
        const readBooksBtn = document.getElementById('read-btn');
        const notReadBooksBtn = document.getElementById('not-read-btn');
        const addBookBtn = document.getElementById("add-btn");
        const returnBtn = document.getElementById('return');
        const confirmAddBookBtn = document.getElementById('add-book');

        searchBtn.addEventListener("click", this.searchBooksHandler.bind(this));
        allBooksBtn.addEventListener("click", this.filterBooksHandler.bind(this));
        readBooksBtn.addEventListener("click", this.filterBooksHandler.bind(this, "read"));
        notReadBooksBtn.addEventListener("click", this.filterBooksHandler.bind(this, "not read"));
        addBookBtn.addEventListener("click", this.showAddBookModalHandler);
        returnBtn.addEventListener("click", this.returnHandler.bind(this));
        confirmAddBookBtn.addEventListener("click", this.addBookHandler.bind(this));
    }

    enableBookCardOptions() {
        const bookListElement = document.querySelector("ul");
        const booksArray = Array.prototype.slice.call(bookListElement.children); // converts HTML collection to array
        bookListElement.addEventListener("click", (e) => {
            const bookIndex = booksArray.indexOf(e.target.closest("li")); // gets the index of the parent list item

            // Edit read status
            if (e.target.classList.contains('read-status')) {
                this.changeReadStatusHandler(e.target);
                this.bookList.updateReadStatus(bookIndex);

            // Delete book
                    } else if (e.target.classList.contains('delete-book')) {
                        this.deleteBookHandler(e.target);
                        this.bookList.deleteBook(bookIndex);
                    }
        })
    }
  
    render(userInput) {
        const renderHook = document.getElementById('library-app');
        
        // Clear existing books
        while (renderHook.firstChild) {
            renderHook.removeChild(renderHook.lastChild);
        }

        const bookListElements = this.bookList.render(userInput);
        renderHook.appendChild(bookListElements);

        // Set the click event listener for each newly added book
        this.enableBookCardOptions(); 
    }
}