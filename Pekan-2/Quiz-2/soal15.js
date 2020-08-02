let warna = ['Biru','Merah','Kuning','Hijau']

let dataBukuTambahan = {
    penulis: 'John Doe',
    tahunTerbit: 2020
}

let buku = {
    nama: 'Pemrograman Dasar',
    jumlahHalaman: 172,
    warnaSampul: ['Hitam']
}

buku.warnaSampul = [...buku.warnaSampul,...warna]
buku = [buku,dataBukuTambahan]

console.log(buku)