let barang = ['Jeruk', 'Kiwi', 'Apel']
let harga = [20000, 25000, 3000]
let keranjang = []
let hargaKeranjang = []
let qtybarang = []
let print = ''

function lihatBarang(){
    for ( var i =0 ; i < barang.length ; i++){
        print += barang[i] + 'Rp.' + harga[i] 
    }
    return lihatBarang 

}
console.log(lihatBarang())
