import { Book } from './Book.js'

export class BookList {
    constructor() {
        this.books = [
            new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", "1979", true),
            new Book("The Hobbit", "J.R.R. Tolkien", "1937", false),
            new Book("1984", "George Orwell", "1949", true)
        ];
        this.filteredBooks = this.books;
    }

    addBook(book) {
        this.books.push(book);

    }

    deleteBook(bookIndex) {
        this.books.splice(bookIndex, 1);
    }

    updateReadStatus(bookIndex) {
        for (const book of this.books) {
            if (this.books.indexOf(book) === bookIndex) {
                book.read = !book.read;
                // console.log(book.read);
                break;
            }
        } 
    }

    filterBookCategory(category="") {
        this.filteredBooks = this.books;

        if (category === "read") {
            this.filteredBooks = this.books.filter(book => book.read);
        } else if (category === "not read") {
            this.filteredBooks = this.books.filter(book => !book.read);
        }
    }
        
    render(userInput="") {
        const bookList = document.createElement('ul');
        bookList.className = 'book-list';

        // Sample the book list based on the search term
        const searchedBooks = !userInput
        ? this.filteredBooks
        : this.filteredBooks.filter(book => book.title.toLowerCase().includes(userInput) || book.author.toLowerCase().includes(userInput));

        // Render the filtered list
        searchedBooks.forEach(book => {
            const bookCard = book.render();
            bookList.appendChild(bookCard);
        })
        return bookList;
      }
}