// soal 1
var i = 0;

while (i <= 18) {
    i += 2;
    console.log(i + '- I Love Coding');
}

while (i > 2) {
    i -= 2;
    console.log(i + '- I will become a frontend developer');
}

// soal 2
for(var i = 1; i <= 20; i++) {
    if(i % 3 == 0 && i % 2 != 0) {
        console.log(i + ' - I Love Coding');
    } else if (i % 2 == 0) {
        console.log(i + ' - Berkualitas');
    } else {
        console.log(i + ' - Santai');
    }
} 

// soal 3
var i = 0;

while (i < 7){
    for(var j=0;j<=i;j++){
        process.stdout.write('#');
    }
    console.log('');
    i++;
}

// soal 4
var kalimat="saya sangat senang belajar javascript"
var splitKalimat = kalimat.split(" ")

console.log(splitKalimat)

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()

for (var i=0;i < daftarBuah.length;i++){
    console.log(daftarBuah[i])
}


