//2.stunda
const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);


//3.stunda
//console.log(Array.isArray(titles))
//console.log(Array.isArray(Array.from(titles)))

var titles = document.getElementsByClassName('titles')
Array.from(titles).forEach(function(item){
    console.log(item);
})

//4.stunda
const wmf = document.querySelector('#book-list li:nth-child(2).name');
//console.log(wmf);

var books = document.querySelector('#book-list li .name')
//console.log(books)

books = document.querySelectorAll('#book-list li .name')
//console.log(books)

Array.from(books).forEach(function(book){
    console.log(book)
}

//5.stunda
.books = document.querySelectorAll('#book-list li .name'),

Array.from(books).forEach(function(book){
    console.log(book.textContent);
    book.textContent += ' (book title)';
})

const  bookList = document.querySelector('#book-list');



//bookList.innerHTML = '<h2>Books and more books....</h2>';
bookList.innerHTML += '<p>This is how you add HTML</P>'


//6.stunda
const banner = document.querySelector('#page-banner')

console.log('#page-banner node type is',banner.nodeType)