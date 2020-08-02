class BangunDatar{
    constructor(nama){
        this.nama = nama
    }
    get luas(){
        return ('')
    }
    get keliling(){
        return ('')
    }
    set namaBaru(nama){
        this.nama = nama
    }
}

bangun_datar = new BangunDatar('Trapesium')
console.log('Nama Bangun Datar :', bangun_datar.nama )
console.log('Luas Bangun Datar :', bangun_datar.luas)
console.log('Keliling Bangun Datar :', bangun_datar.keliling)
bangun_datar.namaBaru = 'Segitiga'
console.log('Nama Bangun Datar baru :', bangun_datar.nama)
console.log('-----------------------------------------')

class Lingkaran extends BangunDatar{
    constructor(nama,jari_jari){
        super(nama)
        this.jari_jari = jari_jari
    }
    get luasLingkaran(){
        return Math.PI * Math.pow(this.jari_jari,2)
    }
    get kelilingLingkaran(){
        return Math.PI * this.jari_jari * 2
    }
    set jariLingkaran(r){
        this.jari_jari = r
    }
}

bulat = new Lingkaran('Bulat Biru',21)
console.log('Nama Lingkaran :', bulat.nama )
console.log('Luas Lingkaran :', bulat.luasLingkaran)
console.log('Keliling Lingkaran :', bulat.kelilingLingkaran)
bulat.jariLingkaran = 28
console.log('Luas Persegi baru :', bulat.luasLingkaran)
console.log('-----------------------------------------')

class Persegi extends BangunDatar{
    constructor(nama,sisi){
        super(nama)
        this.sisi = sisi
    }
    get luasPersegi(){
        return this.sisi**2
    }
    get kelilingPersegi(){
        return this.sisi*4
    }
    set sisiPersegi(s){
        this.sisi = s
    }
}

kotak = new Persegi('Kotak Hitam',20)
console.log('Nama Persegi :', kotak.nama )
console.log('Luas Persegi :', kotak.luasPersegi)
console.log('Keliling Persegi :', kotak.kelilingPersegi)
kotak.sisiPersegi = 10
console.log('Luas Persegi baru :', kotak.kelilingPersegi)