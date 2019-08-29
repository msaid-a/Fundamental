
//sort string
var sortString= (kata,ordering) => {
var hasil = "";
  var kataArr = kata.split("");
    for ( var i = 0; i < ordering.length; i++) { 
      while (kataArr.includes(ordering[i])) { 
            hasil+= kataArr.splice(kataArr.indexOf(ordering[i]),1);
      }
    }
  return hasil + kataArr.join("");
  
  }
  
  console.log(sortString("purwadhika", "ukha"))
  console.log(sortString("string", "gnirts"))
  console.log(sortString("banana", "abn"))

//sort string 2
const sortString_2 = (toSort, sortBy) => {
    var hasil = ''
    for (var i = 0 ; i < sortBy.length ; i++ ){
        for (var j = 0 ; j < toSort.length ; j++){
            if (sortBy[i] == toSort[j]){
                hasil += toSort[j]
            }
        }
    }
    for ( var i = 0 ; i<toSort.length ; i++){
        if (hasil.includes(toSort[i])==false){
            hasil += toSort[i]
        }
    }
    return hasil 
}
console.log(sortString_2('bananas','abn'))

// MAP
var angka = [0,1,2,3,4,5,6,7,8,9]

const kaliDua = (a) =>{
    return a * 2
}

const duplicate = (angka, fungsi) =>{
    var newArr =[]
    for (var i =0; i<angka.length; i++){
        newArr.push(fungsi(angka[i]))
    }
    return newArr
}
console.log (duplicate(angka,kaliDua))

//reverse Word

const reverseWord = (kata) =>{
    console.log (kata.split('').reverse().join(''))
}
reverseWord('Aku pergi Ke Pasar')
//reverse word 2
const reverseWord_2 = (kata) =>{
    var hasil = ''
    for (var i = kata.length -1 ; i>=0 ; i--){
        hasil += kata[i]
    }
    return hasil
}
console.log(reverseWord_2('budi pergi ke pasar'))



//like

const suka = (like) =>{
        if (like.length == 0){
            console.log ('must be "no one likes this"')
        }else if (like.length ==1){
            console.log(`must be "${like[1]} likes this"`)
        }else if (like.length ==2){
            console.log(`must be "${like[1]} and ${like[1+1]} likes this"`)
            
        }else if (like.length == 3){
            console.log(`must be "${like[1]} , ${like[1+1]} and ${like[1+2]} likes this"`)
            
        }else{
            console.log(`must be "${like[1]} , ${like[1+1]} and ${like.length -2} others likes this"`)
            
        }
    }

suka([])
suka(['petter'])
suka(["Jacob", "Alex"])
suka(["Max", "John", "Mark"])
suka(["Alex", "Jacob", "Mark", "Max"])
