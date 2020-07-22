// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log( kataPertama+" "+ kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)+" "+kataKetiga+" "+kataKeempat.toUpperCase()  ) // saya Senang belajar JAVASCRIPT

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(Number(kataPertama)+Number(kataKedua)+Number(kataKetiga)+Number(kataKeempat))

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4
var nilai = 45;
var indeks;

if (nilai >= 80) {
    indeks = "A";
} else if (nilai >= 70 && nilai < 80 ){
    indeks = "B";
} else if (nilai >= 60 && nilai < 70){
    indeks = "C";
} else if (nilai >= 50 && nilai < 60){
    indeks = "D";
} else {
    indeks = "E";
}

console.log('Indeks: ' + indeks);

// soal 5
var tanggal = 29;
var bulan = 5;
var tahun = 1998;
var month;

switch(bulan) {
    case 1:   { month = " Januari "; break; }
    case 2:   { month = " Februari "; break; }
    case 3:   { month = " Maret "; break; }
    case 4:   { month = " April "; break; }
    case 5:   { month = " Mei "; break; }
    case 6:   { month = " Juni "; break; }
    case 7:   { month = " Juli "; break; }
    case 8:   { month = " Agustus "; break; }
    case 9:   { month = " September "; break; }
    case 10:   { month = " Oktober "; break; }
    case 11:   { month = " November "; break; }
    case 12:   { month = " Desember "; break; }
    default:  { console.log('Tidak terjadi apa-apa'); }}

console.log(tanggal + month + tahun);
