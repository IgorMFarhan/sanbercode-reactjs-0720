// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// memanggil function readBooks

function callReadBooks(time,index){
    readBooks(time,books[index],function(check){
        if(check>0){
            index++
            callReadBooks(check,index)
        }
    })
}

callReadBooks(10000,0)

