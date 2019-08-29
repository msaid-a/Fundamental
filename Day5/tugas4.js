//Hapus Huruf Vocal

function hapusVocal(kata){
    
    var kataBaru = kata.replace(/['a','i','u','e','o']/g, "")
    console.log(kataBaru)
}
hapusVocal('break your limit')

// Check Huruf

function checkHuruf(nama,huruf){
nama.toLowerCase()
huruf.toLowerCase()
var hasil = nama.includes(huruf)
console.log(hasil)

// if (nama.indexOf(huruf) > 0 ) {
// 	console.log ("true");
// }else{
// 	console.log("false");
// }
 }
checkHuruf('Muhammad Said Arrafi', 'i')

//Angka Ganjil Genap
function ganjilGenap(angka){
    if (angka % 2 == 0){
        console.log ('Genap')
    }else{
        console.log ('Ganjil')
    }
    //if 1 baris
    // ?(true) : (else)
    //kondisi == 0 ? action : action
    //else if 1 baris
    //kondisi == 0 ? action : kondisi ? action : action
}
ganjilGenap(19)

// Display Angka Terbersar
function angkaTerbesar(angka1,angka2,angka3){
    console.log(Math.max(angka1,angka2,angka3))
}
angkaTerbesar(7,6,5)

//Filter String
function filterString(kataFilter){
   var filter = /\d/g
   var hasil = kataFilter.match(filter)
   var hasil_1 = hasil.toString()
   var num=  hasil_1.replace(/,/g,'')
   console.log(num)
}
filterString('123ad2323sjhadj')

//Hapus Huruf 1 dan Terakhir
function hapusHuruf(kata2){
    var kata2 = kata2.split('')
    var panjang = kata2.length
    var akhir = panjang - 1
    var awal = 0
    delete kata2[awal]
    delete kata2[akhir]
    console.log(kata2.join(''))
}
hapusHuruf('arrafi')

