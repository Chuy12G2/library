const bookContainer = document.querySelector(".books-container");
const addBookButton = document.querySelector(".button-form");
const closeCross = document.querySelector(".close-cross");
const form = document.querySelector(".book-form");
const titleInputForm = document.querySelector("#title-form");
const authorInputForm = document.querySelector("#author-form");
const pagesInputForm = document.querySelector("#pages-form");
const readInpuitForm = document.querySelector("#read-form");
const newBookButton = document.querySelector(".new-book");


let myLibrary = [];

addBookButton.addEventListener("click", () => {
    form.classList.toggle("hidden"); 
    addBookToArray(titleInputForm.value, authorInputForm.value, pagesInputForm.value, readInpuitForm.validity.valid);
    appendBookToLibrary();
    clearForm();
});

newBookButton.addEventListener("click", () => {
    form.classList.toggle("hidden");
})

closeCross.addEventListener("click", () => {
    form.classList.toggle("hidden");
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return read ? `${title} by ${author}, ${pages} pages, already read` : `${title} by ${author}, ${pages} pages, not read yet`;
    }
}

function addBookToArray(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    /* console.log(myLibrary);
    console.log(read); */
    /* iterateTroughArray(); */
}

function appendBookToLibrary(){
    const newBook = document.createElement("div");
    newBook.classList.add("book");

    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    let index = myLibrary.length - 1; 

    title.classList.add("book-title");
    author.classList.add("book-author");
    pages.classList.add("book-pages");
    read.classList.add("state-button");
    read.classList.add("book-read-button");
    remove.classList.add("remove-book");

    function alreadyRead(){
        if(myLibrary[index].read === true){
            read.innerHTML = "read";
        }else{
            read.classList.add("book-not-read");
            read.innerHTML = "not read";
    
        }
    }
 
    alreadyRead();

    read.addEventListener("click", () => {
        newBook.classList.toggle("already-read-book");
        read.classList.toggle("book-not-read");
        
        if(read.innerHTML == "read"){
            read.innerHTML = "not read";
        }else{
            read.innerHTML = "read"
        }

    });

   

    title.innerHTML = myLibrary[index].title;
    author.innerHTML = myLibrary[index].author;
    pages.innerHTML = `${myLibrary[index].pages} pages`
    remove.innerHTML = "remove";
    /* read.innerHTML = myLibrary[index].read; */

    
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    newBook.appendChild(read);
    newBook.appendChild(remove);

    bookContainer.appendChild(newBook);

    remove.addEventListener("click", (e) => {
        bookContainer.removeChild(newBook);
    })

}

function clearForm(){
    titleInputForm.value = "";
    authorInputForm.value = "";
    pagesInputForm.value = "";
}


/* function iterateTroughArray() {

    myLibrary.forEach(e => {
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");

        title.classList.add("book-title");
        author.classList.add("book-author");

        title.innerHTML = e.title;
        author.innerHTML = e.author;
        pages.innerHTML = `${e.pages} pages`;
        const newBook = document.createElement("div");
        newBook.classList.add("book");

        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pages);

        bookContainer.appendChild(newBook);

    })
} */
