// // siku atas
// let atas = ''
// let baris = 8
// for (var i = 0 ; i< baris ; i++){
//     for ( j=0 ; j <= i ; j++){
//         atas += ' * '
//     }
//     atas += '\n'
// }
// console.log (atas)

// // siku bawah
// let bawah = ''
//     baris = 8
// for ( i = 0 ; i< baris ; i++){
//     for ( j=0 ; j < baris - i ; j++){
//         bawah += ' * '
//     }
//     bawah += '\n'
// }
// console.log (bawah)

// // sama kaki

// let sama = ''
//     baris=8;
// let space = baris-1

// for (var i=1;i<=baris;i++){
//     for(var j=space;j>=i;j--){ 
//         sama +="   "
//     }
//     for(var k=1;k<=i;k++){ 
//         sama +=" * "
//     }
//     for (var l=1;l<=i-1;l++){
//         sama +=' * '
//     }
//     sama +='\n'
// }
// console.log(sama)
// let berat = 20
// let ayam = 10000
// let sapi = 25000
// let salmon = 30000
// let harga = berat * ayam 

// console.log(harga)

let sama = ''
    baris=8;
let space = baris-1

for (var i=1;i<=baris;i++){
    for(var j=space;j>=i;j--){ 
        sama +="   "
    }
    for(var k=1;k<=i;k++){ 
        sama +=" * "
    }
    for (var l=1;l<=i-1;l++){
        sama +=' * '
    }
    sama +='\n'
}
