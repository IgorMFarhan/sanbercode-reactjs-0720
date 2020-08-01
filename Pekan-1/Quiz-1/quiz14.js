function tampilkanBintang(star){
    var i = 0;

    while (i <= star){
        for(var j=star;j>0;j--){
            process.stdout.write('#');
        }
        console.log('');
        star--
    }
}

tampilkanBintang(7)