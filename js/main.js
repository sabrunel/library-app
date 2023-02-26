class Book {
    constructor(title, author, year, read) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.read = read;
        }

    render() {
        const bookCard = document.createElement('li');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-card__content">
                <h2>${this.title}</h2>
                <h3>${this.author}</h3>
                <p>Year: ${this.year}</p>
            </div>
            <div class="book-card__options">
                <div class="status-checkbox">
                <label for="read-status">${
                    this.read ? "Read" : "Not yet read"
                }</label>
                    <input type="checkbox" name="read-status" class="read-status" ${
                        this.read ? "checked" : ""
                    }>
                </div>
                <button class="delete-book">Delete</button>
            </div>
        `;
    return bookCard;
    }
}

class BookList {

    books = [
        new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", "1979", true),
        new Book("The Hobbit", "J.R.R. Tolkien", "1937", false)
    ];

    constructor() {}

    addBook(book) {
        this.books.push(book);

    }

    deleteBook(bookIndex) {
        this.books.splice(bookIndex, 1);
    }

    updateReadStatus(bookIndex) {
        let currentIndex = 0;
        for (const book of this.books) {
            if (this.books.indexOf(book) === bookIndex) {
                book.read = !book.read;
                // console.log(book.read);
                break;
            }
            currentIndex++;
        } 
    }

    render() {
        const bookList = document.createElement('ul');
        bookList.className = 'book-list';
        for (const book of this.books) {
            const bookCard = book.render();
            bookList.appendChild(bookCard);
        }
        return bookList;
      }
}


class Library {
    bookList = new BookList();

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

    clearUserInputs() {
        const inputTitle = document.getElementById("book-title");
        const inputAuthor = document.getElementById("book-author");
        const inputYear = document.getElementById("year");
        const inputReadStatus = document.getElementById("read-status");

        inputTitle.value = '';
        inputAuthor.value = '';
        inputYear.value = '';
        inputReadStatus.removeAttribute("checked"); // Doesn't seem to do anything
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

    enableEditBook() {
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

    enableReturnBtn() {
        const ReturnBtn = document.getElementById('return');
        ReturnBtn.addEventListener("click", this.returnHandler.bind(this)); 
    }

    enableConfirmAddBookbtn() {
        const confirmAddBookBtn = document.getElementById('add-book');
        confirmAddBookBtn.addEventListener("click", this.addBookHandler.bind(this)); 
    }

    enableAddBookBtn() {
        const addBookBtn = document.querySelector('button:first-of-type');
        addBookBtn.addEventListener("click", this.showAddBookModalHandler);
    }
  
    render() {
        const renderHook = document.getElementById('library-app');
        
        // Clear existing books
        while (renderHook.firstChild) {
            renderHook.removeChild(renderHook.lastChild);
        }

        const bookListElements = this.bookList.render();
        renderHook.appendChild(bookListElements);

        // Set the click event listener for each newly added book
        this.enableEditBook(); 
    }
}

class App {

    static init() {
        const libraryApp = new Library();
        libraryApp.render();
        libraryApp.enableAddBookBtn();
        libraryApp.enableConfirmAddBookbtn();
        libraryApp.enableReturnBtn();
        libraryApp.clearUserInputs();
    }
}
  
App.init();