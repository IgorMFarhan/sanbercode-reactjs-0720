const volumeKubus = (...input) => {
    const volume = input**3
    const text = 'Volume Kubus:'
    return `${text} ${volume}`
} 

const volumeBalok = (...input) => {
    input.forEach(function(sisi){
        var volume = sisi.p*sisi.l*sisi.t
        const text = 'Volume Balok:'
        console.log(`${text} ${volume}`)
    })
} 
volumeBalok({p:10,l:10,t:5},{p:20,l:15,t:7})

console.log(volumeKubus(20))