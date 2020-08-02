let pesertaLomba = [
    ['Budi','Pria','172cm'],
    ['Susi','Wanita','162cm'],
    ['Lala','Wanita','155cm'],
    ['Agung','Pria','175cm'],   
]


var objPesertaLomba = pesertaLomba.map(function(peserta){
        return {
            nama: peserta[0],
            jenisKelamin : peserta[1],
            tinggi : peserta[2],
        }
})
console.log(objPesertaLomba)