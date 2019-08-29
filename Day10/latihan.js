function countWords(kata){
    kataArr = kata.split(' ')
    return kataArr.length
}
console.log (countWords('Budi Pergi Ke Pasar'))

function smallEnough(a,b){
    hasil = 0
    for (var i = 0 ; i< a.length; i++){
        hasil += a[i]

    }
    if (hasil < b){
        return 'True'
    }else{
        return 'Else'
    }

}
console.log(smallEnough([66,101],200))
console.log (smallEnough([78, 117, 110, 99, 104, 117, 107, 115],100))
console.log (smallEnough([2,3,1,2],10))



function removeDuplicats2(kata)
{
    var kataArr = kata.split(' ')
    var hasil = [] //nampung hasil
    for (var i =0; i < kataArr.length ; i++)
        if(hasil.indexOf(kataArr[i]) == -1){
            hasil.push(kataArr[i])
        } 
    return  hasil.join(' ')
}


console.log(removeDuplicats2('Alpha beta beta gamma gamma'))
