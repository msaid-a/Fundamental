// function segitigaMaker(){

//     var space =''
//     var ganjil = 1
//     var baris = 5
//     var jarak = baris - 1
//     var i = 0
//     while( i < baris ){
//         //
//         var j = 0    
//         while(j < (baris - i)){
//             space +=' '
//             j++
            
//         }
//         var k = 0
//         while(k < ganjil){
//             space += '*'
//             k++
            
//         }
//         ganjil +=2
//         space +='\n'
//         i++
//     }
//     console.log(space)
// }
// var tampung = segitigaMaker
// tampung()

// function tglLahir(a,b,c){
//     console.log (a + ' Tanggal ' + b +' Bulan ' + c +' tahun ')
// }
// tglLahir ('20','12','2000')

// function getHargaParkir(masuk,keluar,harga){
//     let jam = keluar - masuk
//     let total = jam * harga 
//     console.log('Anda Parkir Selama '+ jam + 'jam , total biaya Rp.'+ total)

// }
// getHargaParkir(10,12,3000)

// var a = 'aku 123'
// var hasil = a.split(" ")
// console.log(a)

function DupStringDua(nama){
    var jumlah_karakter = nama.length
    var hasil2 =''
    for (var i = 0; i<jumlah_karakter; i++){
        var karakter2 = nama.substr(i,1)
        for(var j = 0; j<i + 1; j++){
            if(j == 0){
                hasil2 += karakter2.toUpperCase()
            }else{
                hasil2 += karakter2
            }
        }
        if (i == jumlah_karakter -1){
            break
        }else{
            hasil2 += '-'
        }
    }
    console.log(hasil2)
}
DupStringDua('said')