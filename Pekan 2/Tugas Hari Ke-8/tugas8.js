// Soal 1
console.log('(------SOAL NO.1------)')
var circleArea = (r) => {
    let pi = Math.PI
    return pi * Math.pow(r,2)
} 

var circleCircumference = (r) => {
    let pi = Math.PI
    return pi * 2 * r
} 

const r = 7
console.log('Luas lingkaran : ' + circleArea(r))
console.log('Keliling lingkaran : ' + circleCircumference(r))

// soal 2
console.log('(------SOAL NO.2------)')
let kalimat = ""

var addKalimat = (a,b,c,d,e) => {
    return kalimat = `${a} ${b} ${c} ${d} ${e}`
} 

const a = 'Saya'
const b = 'adalah'
const c = 'seorang'
const d = 'frontend'
const e = 'developer'
console.log(addKalimat(a,b,c,d,e))

// soal 3
console.log('(------SOAL NO.3------)')

class Book {
    constructor(name, totalPage, price){
        this.name = name
        this.totalPage = totalPage
        this.price = price
    }

    callBook(){
        var book = {
            name : this.name,
            totalPage : this.totalPage,
            price : this.price
        }
        return book
    }
}

class Komik extends Book {
    constructor(name, totalPage, price,isColorful ){
        super(name, totalPage, price)
        this.isColorful = isColorful
    }

    callKomik(){
        var book = {
            name : this.name,
            totalPage : this.totalPage,
            price : this.price,
            isColorful : this.isColorful,
        }
        return book
    }
}

var book1 = new Book('Memories',100,2000).callBook()
var komik1 = new Komik('Memories',100,2000,true).callKomik()

console.log(book1)
console.log(komik1)