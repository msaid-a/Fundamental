// let hasil = ''
// for ( var i = 0 ; i <=10 ; i++){
//     hasil += ' * '
//     console.log(hasil)
// }
// let z =''
// for(i=0;i<5;i++){
//      for(j=0;j<10;j++){
//          z+= j+1
//      }
//      z+= '\n'
    
// console.log(z)


// var a =''
// var b = 0

// while(b < 4){
//     var j = 0
//     while ( j < 10){
//        a= j += 1
//        j++ 
//     }
//     a += '\n'
//         b++
// }

// let y = ''
// let x = 5
// //let x = '1'
// for ( var i =0 ; i< x ; i++){
//     for(var j = 0 ; j<= i ; j++){
//                 console.log(y)     
//             }
//         }
    
//     y+= '\n'
    

// }
// console.log(z)
// var space = $.html('&nbsp;')
// for (i = 5; i > 0; i--) {
//     console.log("\n");
//    for (j = 0; j < 6 - i; j++) {
//        console.log('  ');
//    }
//    for (j = 6 - i; j <= 5; j++) {

//        console.log("*");
//    }
// }

// Segitiga
// var sama = ''
// var baris=8;
// if ( baris > 0){
//     space = baris-1
// }
// for (var i=1;i<=baris;i++){
//     for(var j=space;j>=i;j--){ //spasi
//         sama +="   "
//     }
//     for(var k=1;k<=i;k++){ //bintang
//         sama +=" *var sama = ''
//         var baris=8;
//         if ( baris > 0){
//             space = baris-1
//         }
//         for (var i=1;i<=baris;i++){
//             for(var j=space;j>=i;j--){ //spasi
//                 sama +="   "
//             }var sama = ''
// var baris=8;
// if ( baris > 0){
//     space = baris-1
// }
// for (var i=1;i<=baris;i++){
//     for(var j=space;j>=i;j--){ //spasi
//         sama +="   "
//     }
//     for(var k=1;k<=i;k++){ //bintang
//         sama +=" * "
//     }
//     for (var l=1;l<=i-1;l++){
//         sama +=' * '
//     }
//     sama +='\n'
// }
// console.log(sama)
//             for(var k=1;k<=i;k++){ //bintang
//                 sama +=" * "
//             }
//             for (var l=1;l<=i-1;l++){
//                 sama +=' * '
//             }
//             sama +='\n'
//         }
//         console.log(sama) "
//     }
//     for (var l=1;l<=i-1;l++){
//         sama +=' * '
//     }
//     sama +='\n'
// }
// console.log(sama)

// sama kaki
//  let sama = ''
//      baris = 8
//      if (baris > 0){
//          baris *=  2
//      }
//      for ( i=0 ; i < baris; i+=2 ){
//          for(var space=1; space< (baris-i); space++){
//              console.log("    ")
//          }
//          for ( j=0 ; j <= i ; j++){
//              sama += ' * '
//          }
//          sama += '\n'
//      }
//      console.log(sama)



// for(var i = 0 ; i < baris ; i++){
//     for (var j = 0 ; j < (jarak - i) ;j++){
//         space += ' '
//     }for(var k =0 ; k < ganjil; k++){
//         space += '*'
//     }
//     ganjil += 2
//     space +="\n" 
// }
// console.log(space)
var space =''
var ganjil = 1
var baris = 5
var jarak = baris - 1
var i = 0
while( i < baris ){
    //
    var j = 0    
    while(j < (baris - i)){
        space +=' '
        j++
        
    }
    var k = 0
    while(k < ganjil){
        space += '*'
        k++
        
    }
    ganjil +=2
    space +='\n'
    i++
}
console.log(space)