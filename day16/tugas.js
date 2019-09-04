const jumlahAplha=(kata)=>{
    let huruf ='abcdefghijklmnopqrstuvwxyz'.split('')
    let hasil = 0
    for(let i = 0 ; i < kata.length ; i++){
        hasil += (huruf.indexOf(kata[i])+1)
    }
    return(hasil)
}
console.log(jumlahAplha('abc'))
console.log(jumlahAplha('abb'))
console.log(jumlahAplha('acc'))

const jumlahAplhaGanjil = (kata) =>{
    let huruf ='abcdefghijklmnopqrstuvwxyz'.split('')
    let hasil = 0
    for(let i = 0 ; i < kata.length ; i++){
        if ((huruf.indexOf(kata[i])+1) % 2 == 1 ){
            hasil += huruf.indexOf(kata[i])+1
        }
    }
    return(hasil)
}
console.log(jumlahAplhaGanjil('abc'))
console.log(jumlahAplhaGanjil('abceaea'))

const tambah = (angka) =>{
    let ratusan = angka - (angka % 100)
    let puluhan = (angka % 100) - angka % 10
    let satuan = angka % 10
    if (angka == ratusan){
        return ratusan
    }
    return `${ratusan} + ${puluhan} + ${satuan}`
}
console.log(tambah(298))
console.log(tambah(300))

