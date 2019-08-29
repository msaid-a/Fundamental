// Object => property, value, methode


// =========================OBJECT LITERAL==============
// var product1 = {
//     nama : "Jeruk",
//     harga : 2000,
//     getSummaries : function(a){
//         return this.nama + ' dengan Harga Rp. ' + this.harga + a
//     },
    
// }
// var product2 = {
//     nama : "Kiwi",
//     harga : 1000,
//     getSummaries : function(a){
//         return this.nama + ' dengan Harga Rp. ' + this.harga + a
//     },
    
// }



// ========================== OBJECT BUILDER =================

// var Product = function(nama,harga){
//     this.namaProduk = nama;
//     this.hargaProduk = harga;
//     this.getSummaries = function(a){
//         return this.namaProduk + ' dengan Harga Rp. ' + this.hargaProduk + a
//     };
    
// }

// var product1 = new Product('Jeruk' , 20000)
// var product2 = new Product('Kiwi' , 15000)

// var menu = [
//     product1 ,
//     product2
// ]


// ======================== CLASS ======================

class Product {
    constructor(a,harga){
        this.namaProduct = a;
        this.hargaProduct = harga;
        this.getSummaries = this.namaProduct + ' dengan harga ' + this.hargaProduct
        this.changeHarga = function(a){
            this.hargaProduct = a
        }
    }
}



var prod1 = new Product('Jeruk' ,2000)
// prod1.namaProduct = a
console.log(prod1)
prod1.changeHarga(50000)
console.log(prod1)

// var hasil = ''
// for(var i = 0 ; i < barang.length ; i++){
//     hasil += barang[i].getSummaries() + '\n'
// }
// console.log(hasil)











// class Orang {
//     constructor(namaDepan,namaBelakang , tahunLahir){
//         this.namaDepan = namaDepan;
//         this.namaBelakang = namaBelakang;
//         this.tahunLahir = tahunLahir;
//         this.age = 2019 - this.tahunLahir
//         this.NamaLengkap = this.namaDepan + ' ' + this.namaBelakang
//     }
// }



// var orang1 = new Orang('Andi' , 'Susilo' , 1990)
// console.log(orang1)



// var persegi1 = new Persegi(2)
// persegi1.getKeliling() // 8
// persegi1.getLuas() // 4


class Persegi{
    constructor(sisi){
        this.sisi = sisi;
        this.getKeliling = this.sisi * 4;
        this.getLuas = function(){
            return this.sisi*this.sisi
        }
    }
}

var persegi1 = new Persegi(5)

console.log(persegi1)
console.log(persegi1.getKeliling)
console.log(persegi1.getLuas())