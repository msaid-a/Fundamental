const nb_year =  (populasi,persen,tax,tujuan)=> {
    var total = populasi
    persen = persen / 100
    var i=0
    while (total <= tujuan){
        var hasil = total * persen
        var hasilpopulasi = tax + hasil
        total = hasilpopulasi + total
        i++
    }
    return i                

}
console.log ( nb_year(1500, 5, 100, 5000))

//2
const ticket = (array)=>{
    let harga = 25
    let uang = {
        '25' : 0,
        '50' : 0,
        '100': 0 
    }
    let hasil
    if(array[0] !=25){
        return 'NO'
    }
    array.forEach(num => {
    if (num == 25){
        uang[25]++ 
    }
    if (num == 50){
        uang[25] --
        uang[50]++
    }if (num == 100){
        uang[25]--
        if(uang[50] > 0){
            uang[50]--
        }else{
            uang[25]-=2
        }
    }
});   
if(uang[25] < 0 || uang[50] < 0){
    return 'NO'
}
return 'YES'


}
//let bayar
//   for ( let i = 0 ; i < array.length ; i++){
    // if (array[i] == 25){
    //     uang.push( array[i]) 
    // }else if (uang.includes(25) && array[i]== 50){
    //     kasir = uang.indexOf(25)
    //     uang.splice(kasir,1) 
    //     hasil = array[i] 
    //     uang.push(hasil)        
    // }else if (uang.includes(25)  && uang.includes(50)  && array[i]==100){
    //     kasir = uang.indexOf(25)
    //     uang.splice(kasir,1)
    //     kasir2 = uang.indexOf(50)
    //     uang.splice(kasir2)
    //     hasil = array[i] 
    //     uang.push(hasil)
    // }
    // else{
    //     return 'NO'
    // }

// }
console.log(ticket([25,25,50]))
console.log(ticket([25,25,100]))
console.log(ticket([25, 25, 50, 50, 100])) 


//3
const sama = (baris) =>{
    let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let index = 0
    for ( let i = 0 ; i < baris ; i++){
        index += i // 1
    }
    let total = 0 
    for(i = index ; i < index + baris ; i++){
        total += array[i]//3 
    }
    return total
}
console.log(sama(1))
console.log(sama(2))

//test
const hitung = (baris) =>{
    let hasil = 1
    for (i = 0 ; i < 3 ; i++){
        hasil *= baris
    }
    return hasil
}
console.log(hitung(2))


//segita
var baris = 5
var angka = 1
var out =''
for (var i = baris ; i > 0 ; i--){

    for ( var j = (i*2) -2  ; j > 0 ; j-- ){
        out += ' '
    }
    for (var a = i ; a <= baris ; a++){
        out += angka
        angka +=2
        if (angka > 10){
            out += '   '
        }else{
            out += '    '
        }
    }
    out +='\n'
    out +='\n'
}
console.log(out)

//segitiga 2 
function segitiga (n){
    var num = 1
    var out = ''
    var bilangan = 1
    for (i = 0 ; i< n; i++){
        for (var j = 0 ; j < n - i ; j++){
            out += '  '
        }
        for (var k =0 ; k < num; k++){
            out += bilangan + '   '
            bilangan +=2
        }
        num +=1
        out += "\n"
    }
    return out
}
console.log(segitiga (5))