let myLibrary = [];

function Book(title,author,pages,read ){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return read ? `${title} by ${author}, ${pages} pages, already read` : `${title} by ${author}, ${pages} pages, not read yet`;
    }
}
 
const harry = new Book("Harry", "JK", 200, false);
const harry2 = new Book("Harry2", "JK2", 201, false);

myLibrary[0] = harry;
myLibrary[1] = harry2;


function addBookToLibrary(title,author,pages,read){
        const book = new Book(title,author,pages,read);
        myLibrary.push(book);
        console.log(myLibrary);
}

/* 
addBookToLibrary("a", "b", 122, true);
addBookToLibrary("d", "e", 122, false);
 */
