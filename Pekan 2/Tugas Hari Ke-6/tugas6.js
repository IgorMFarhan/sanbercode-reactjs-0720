// soal 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta = {}

objDaftarPeserta['nama'] = arrayDaftarPeserta[0]
objDaftarPeserta['jenis kelamin'] = arrayDaftarPeserta[1]
objDaftarPeserta['hobi'] = arrayDaftarPeserta[2]
objDaftarPeserta['tahun lahir'] = arrayDaftarPeserta[3]

// soal 2
var buah = [
    {
        nama: 'strawberry',
        warna: 'merah',
        'ada bijinya': 'tidak',
        harga: 9000,
    },
    {
        nama: 'jeruk',
        warna: 'oranye',
        'ada bijinya': 'ada',
        harga: 8000,
    },
    {
        nama: 'Semangka',
        warna: 'Hijau & Merah',
        'ada bijinya': 'ada',
        harga: 10000,
    },
    {
        nama: 'Pisang',
        warna: 'Kuning',
        'ada bijinya': 'tidak',
        harga: 5000,
    }
]

console.log(buah[0])

// soal 3
var dataFilm = []

function tambahFilm(nama, durasi , genre, tahun){
    var film = {}

    film.nama = nama
    film.durasi = durasi
    film.genre = genre
    film.tahun = tahun

    dataFilm.push(film)
}

tambahFilm('Hello',30,'Comedy',2020)
tambahFilm('Beautiful',90,'Romance',2019)

console.log(dataFilm)

// soal 4
// release 0
class Animal {
    // Code class di sini
    constructor(name) {
        this.animal_name = name
        this.animal_legs = 4
        this.animal_cold_blooded = false
    }

    get name() {
        return this.animal_name;
    }
    get legs() {
        return this.animal_legs;
    }
    get cold_blooded() {
        return this.animal_cold_blooded;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// release 1
// Code class Ape dan class Frog di sini
class Ape extends Animal {
    constructor(name){
        super(name)
        this.animal_legs = 2
    }

    yell(){
        return 'Auooo'
    }
}

class Frog extends Animal {
    constructor(name){
        super(name)
        this.animal_legs = 2
    }

    jump(){
        return 'hop hop'
    }
}
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

// soal 5
class Clock{
    constructor({template}){
        
        var timer

        function render(){
    
            var date = new Date();
    
            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
    
            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
    
            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
    
            var output = template.replace('h', hours)
                                    .replace('m', mins)
                                    .replace('s', secs)
            
            console.log(output);
        }
    
        this.stop = function(){
            clearInterval(timer);
        }
    
        this.start = function(){
            render();
            timer = setInterval(render, 1000);
        }
    }
    
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 