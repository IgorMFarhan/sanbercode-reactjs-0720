var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 7000}
]

// menjalankan function readBooksPromise 
function readBooks(time,index){
    readBooksPromise (time, books[index])
        .then(function (check) {
            index++
            if(books[index] != undefined){
                readBooks(check,index)
            } else {
                console.log('buku sudah dibaca semua')
            }
        })
        .catch(function (error) {
            console.log('waktu kurang '+ error);
        });
}

readBooks(10000,0)

    