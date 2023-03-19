export class Book {
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
                <img src="assets/icons/delete.svg" class="icon delete-book" alt="Delete book">
            </div>
        `;
    return bookCard;
    }
}