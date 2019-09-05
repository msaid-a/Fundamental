//jumlah aplha
const jumlahAplha = (kata) => {
    let huruf = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let hasil = 0
    for (let i = 0; i < kata.length; i++) {
        hasil += (huruf.indexOf(kata[i]) + 1)
    }
    return (hasil)
}
console.log(jumlahAplha('abc'))
console.log(jumlahAplha('abb'))
console.log(jumlahAplha('acc'))

//jumlah alpha index ganjil
const jumlahAplhaGanjil = (kata) => {
    let kataArr = kata.split('')
    let hasil = 0
    for (let i = 0; i < kataArr.length; i++) {
        if ((kata.indexOf(kataArr[i]) + 1) % 2 == 0) {

        } else {
            hasil += kata.indexOf(kataArr[i]) + 1
        }
    }
    return (hasil)
}
console.log(jumlahAplhaGanjil('abc'))
console.log(jumlahAplhaGanjil('abceaea'))

//hitung pecahan with modulus
const tambah = (angka) => {
    let ratusan = angka - (angka % 100)
    let puluhan = (angka % 100) - angka % 10
    let satuan = angka % 10
    if (angka == ratusan) {
        return ratusan
    }
    return `${ratusan} + ${puluhan} + ${satuan}`
}
console.log(tambah(298))
console.log(tambah(300))

//hitung pecahan with array
const pecahAngka = (int) => {
    let angkaArr = int.toString().split('')
    let hasil = int + ' = '
    for (let i = 0; i < angkaArr.length; i++) {
        if (angkaArr[i] != 0) {
            hasil += angkaArr[i] + '0'.repeat(angkaArr.length - (i + 1))
            hasil += ' + '
        }
    }
    hasil = hasil.split(' ')
    hasil.splice(-2)
    return hasil.join(' ')
}
console.log(pecahAngka(456))