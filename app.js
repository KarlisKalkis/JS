//console.log(Array.isArray(titles))
//console.log(Array.isArray(Array.from(titles)))

var titles = document.getElementsByClassName('titles')
Array.from(titles).forEach(function(item){
    console.log(item);
})
    


const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);