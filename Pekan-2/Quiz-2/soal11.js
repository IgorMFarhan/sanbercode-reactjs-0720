function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve,reject){
        var books = [
            {name: 'Shinchan', totalPage: 50, isColorful: true},
            {name: 'Kalkulus', totalPage: 250, isColorful: false},
            {name: 'Doreaemon', totalPage: 40, isColorful: true},
            {name: 'Algoritma', totalPage: 300, isColorful: false},
        ]
        if(amountOfPage > 0){
            resolve(books.filter(x=>x.totalPage >= amountOfPage && x.isColorful == colorful))
        } else {
            var reason = new Error('Maaf parameter salah')
            reject(reason)
        }
    })
}

function filterBooks(colorful,amountOfPage){
    filterBooksPromise(colorful,amountOfPage)
        .then(function(filteredbooks){
            filteredbooks.forEach(function(book){
                console.log('Nama Buku: ', book.name)
                console.log('Jumlah Halaman: ', book.totalPage)
                console.log('Berwarna: ', book.isColorful)
                console.log('-------------------------------')
             })
        })
        .catch(function(error){
            console.log(error.message)
        })
}

filterBooks(true,10)
filterBooks(false,251)