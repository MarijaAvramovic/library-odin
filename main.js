// console.log("test");

let library = [];
const myTable = document.querySelector('#myTable');
// console.log(myTable);

function Book(author, title, pages, read) {
    if(!new.target) {
        throw Error("You must use the new");
    }
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(author, title, pages, read) {
    const book = new Book(author, title, pages, read);
    library.push(book);
}

function getBook(id) {
   const mybook = library.filter(book => book.id === id);
    return mybook[0];
}

function displayBook(book) {
    const row = document.createElement('tr');
        const dataAuthor = document.createElement('td');
        const dataTitle = document.createElement('td');
        const dataPages = document.createElement('td');
        const dataRead = document.createElement('td');

        dataAuthor.textContent = book.author;
        dataTitle.textContent = book.title;
        dataPages.textContent = book.pages;
        dataRead.textContent = book.read;

        row.appendChild(dataAuthor);
        row.appendChild(dataTitle);
        row.appendChild(dataPages);
        row.appendChild(dataRead);

        myTable.appendChild(row);

        // console.log("ff");
}

function displayLibrary() {
    library.forEach(book => displayBook(book));
}


addBooktoLibrary("Vadim Zeland", "Reality Transurfing", 844, true);
addBooktoLibrary("Vadim Zeland", "Tufty the Preastest", 144, true);
addBooktoLibrary("Bentino Massaro", "Me", 1244, false);

// test
console.log(library);
// console.log(getBook('Tufty the Preastest'));
// displayBook(getBook('Tufty the Preastest'));
displayLibrary();
