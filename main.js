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
        const dataToggle = document.createElement('td');
        const btnToggle = document.createElement('button');
        const dataRemove = document.createElement('td');
        const btnRemove = document.createElement('button');

        dataAuthor.textContent = book.author;
        dataTitle.textContent = book.title;
        dataPages.textContent = book.pages;
        dataRead.textContent = book.read;
        dataRead.textContent = book.read;
        btnToggle.textContent = 'x';
        btnRemove.textContent = 'Delete';

         
        row.dataset.id = book.id;
        btnRemove.dataset.btnId = book.id;
        btnRemove.classList.add('btnRemove');

        row.appendChild(dataAuthor);
        row.appendChild(dataTitle);
        row.appendChild(dataPages);
        row.appendChild(dataRead);

        dataToggle.appendChild(btnToggle);
        row.appendChild(dataToggle);

        dataRemove.appendChild(btnRemove);
        row.appendChild(dataRemove);

        myTable.appendChild(row);

        // console.log("ff");
}

function displayLibrary() {
    library.forEach(book => displayBook(book));
}


form.addEventListener('submit', function(event) {
  event.preventDefault();

  const newAuthor = document.getElementById('author').value;
  const newTitle = document.getElementById('title').value;
  const newNumOfPages = document.getElementById('numOfPages').value;
  const newIsRead = document.getElementById('isRead').checked;

  const myBook = new Book(newAuthor, newTitle, newNumOfPages, newIsRead);
  displayBook(myBook);
  library.push(myBook);
});

 

addBooktoLibrary("Vadim Zeland", "Reality Transurfing", 844, true);
addBooktoLibrary("Vadim Zeland", "Tufty the Preastest", 144, true);
addBooktoLibrary("Bentino Massaro", "Me", 1244, false);

// test
console.log(library);
// console.log(getBook('Tufty the Preastest'));
// displayBook(getBook('Tufty the Preastest'));
displayLibrary();


const buttonsRemoveBook = document.querySelectorAll('.btnRemove');
 console.log(buttonsRemoveBook);

buttonsRemoveBook.forEach(button => {
  button.addEventListener('click', (e) => {
    // console.log("clickedBtnId");
    const clickedBtn = e.currentTarget;

    const dataset = clickedBtn.dataset; 
    const clickedBtnId = dataset.btnId;


    console.log(clickedBtnId);
    console.log(typeof clickedBtnId);
    console.log(e.currentTarget);

    const bookRemoved = document.querySelector(`[data-id="${clickedBtnId}"]`);

     
    myTable.removeChild(bookRemoved);
     
    library = library.filter(book => book.id !== clickedBtnId);

     
  });
});