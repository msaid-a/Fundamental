// //
// function getSquare(angka){
//     var hasil = ''
//     var string = angka.toString()
//     var print = ''
//     for(i = 0 ; i < string.length ; i++){
//       var pangkat = parseInt(string.substr(i,1))
//       hasil += Math.pow(pangkat,2)
//       print += hasil[i].toString()
//     }
//     console.log(parseInt(print))
// }
// getSquare(991)

// //2
// function nama(arr){
//     var hasil =[]
//     for (i = 0; i < arr.length ; i++){
//         if(arr[i].length <= 4){
//            hasil.push(arr[i])
//         }
//     }
//     console.log(hasil)
// }
// nama(['Ryan','Kieran','Jason','Yous'])

// //3

// //var link = 
// function domainName(link){
//     linkArr = link.split('.')
//     if (linkArr.length > 0 && linkArr.length <=2){
//         linkString = linkArr[0].toString()
//         if(linkString.indexOf('https') == 0){
//             return linkString.slice(8)
//         }else{
//             return linkString.slice(7)

//         }
//     }else if (linkArr.length >0 && linkArr.length<=3){
//         return linkArr[1]
//     }
// }
// console.log(domainName('http://github.com/carbonfive/raygun'))
// console.log(domainName('https://github.com/carbonfive/raygun'))
// console.log(domainName('http://www.zombie-bites.com'))
// console.log(domainName('https://www.cnet.com'))



// // tes 
// function getMiddle(str){
//     strArr = str.split('')
//     if(strArr.length % 2 == 0){
//         var tengah = str.length / 2
//         tengah -=1
//         var hasil =  strArr.splice(tengah,2)
//         return hasil.join('')
    
//     }else if ( strArr.length % 2 == 1){
//         tengah = Math.floor(strArr / 2 )
//         hasil = strArr.splice(tengah,1)
//         return hasil.join('')
//     }
// }
// console.log(getMiddle('test'))
// console.log(getMiddle('middle'))
// console.log(getMiddle('testing'))
// console.log(getMiddle('A'))

// year Investment
function Investment(principal,interest,tax,desired){
    var total = principal
    var i=0
    while (total <= desired){
        var hasil = total * interest
        var hasilPrincipal = total + hasil
        var pajak = hasil *=  tax
        total = hasilPrincipal - pajak
        i++
    }
    console.log(i)        

}
Investment(1000.00,0.05,0.18,1100.00)
Investment(1200.00,0.17,0.05,2000.00)
Investment(1500.00,0.07,0.6,5000.00)
