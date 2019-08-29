var barang = ['Jeruk', 'Kiwi', 'Apel']
var harga = [20000, 25000, 3000]
var keranjang = []
var hargaKeranjang = []
var qtybarang = []
var print = ''

// //Input Produk
// function inputProduk (produk,hargaProduk){
//     barang.push(produk)
//     harga.push(hargaProduk)
//     //console.log(barang.push(produk))
//     return produk,hargaProduk
// }
// inputProduk('mangga',20000)

// //hapus produk
// function hapusProduk (pilih_produk){
//     if (pilih_produk > 0  && pilih_produk <= barang.length){
//         pilih_produk -=1
//         delete barang[pilih_produk]
//         delete harga[pilih_produk]
//     }else{
//         pilih_produk= 'heee'
//     }
//     return pilih_produk

// }
// hapusProduk(1)
// //update produk
// function updateHargaProduk(produk,hargaBaru){
//     if (produk > 0 && produk <= barang.length){
//         produk -= 1
//         harga[produk] = hargaBaru
//     }else{
//         console.log ("Anda Salah Input")
//     }
// return harga[produk]
// }
// updateHargaProduk(10,4000)

//Client
function belanja(pilih_barang){
     if(pilih_barang > 0 && pilih_barang <= barang.length){
            pilih_barang -= 1
            keranjang.push(barang[pilih_barang])
            hargaKeranjang.push(harga[pilih_barang])
            var qtybarang = [2]
            var printKeranjang =''
            for(var i = 0 ; i < keranjang.length ; i++){
                printKeranjang += keranjang[i] +' Rp. ' + hargaKeranjang[i] +' x ' + qtybarang[i] + ' = Rp. ' + (hargaKeranjang[i] * qtybarang[i]) +'\n'
            }
            console.log(printKeranjang)
     }else{
         console.log("Anda Salah Input ")
     }
}
belanja(2)

//tampilkan produk 
for ( var i =0 ; i < barang.length ; i++){
    print += i+1 + '.' + barang[i] + ' Dengan Harga Rp.' + harga[i] +'\n'
}

console.log(print)