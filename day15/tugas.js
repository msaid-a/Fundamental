
const sumTwoSmallest = (array) =>{
    array.sort(function(a,b){return a-b})
    return jumlah = array[0] + array[1]
}
console.log(sumTwoSmallest([19, 5, 42, 2, 77]))  //7

const findUniq = (array) =>{
    let obj ={}
    let unik = []
    array.forEach(element => {
        if (!obj[element]){
            obj[element] = 0
            obj[element]++
        }else{
            obj[element]++
        }
    })
    let keys = Object.keys(obj)
    for (let i = 0 ; i < keys.length; i++){
        if(obj[keys[i]] == 1){
         unik.push(keys[i])   
        }
    }
    if (unik.length == 0){
        unik.push('None')
    }    
    unik.sort(function(a,b){return a-b})
    return(unik.join(','))
}
console.log(findUniq([1,1,1,2,1,1]))   // 2
console.log(findUniq([1,2,1,2,1,1]))  // None
console.log(findUniq([0,0,0.55,0,0,0])) // 0.55
console.log(findUniq([0,0,0.55,0,1,0])) // 0.55 , 1

//generateNum
const generateNum = (array) =>{
    let bulan = 'Jan,Feb,Mar,Apr,Mei,Jun,Jul,Aug,Sept,Okt,Nov,Des'.split(',')
    let temp = []
    for (let i = 0 ; i < array.length;i++){
        if(i == 0 || i == 1){
        temp.push(array[i].toUpperCase().split(''))
        }else if (i == 2){
            temp.push(array[i].split('-'))
        }else(
            temp.push(array[i].split(' '))
            )
        }
    let tengah = ''
    let tanggal =''
    if (temp[1].length % 2 == 0){
         tengah = temp[1].slice(temp[1].length/2 - 1, temp[1].length/2 +1).join('')
    }else{
         tengah = temp[1][Math.floor(temp[1].length/2)] 

    }
    if (temp[2][0].toString().length == 2){
        tanggal = temp[2][0].toString()
        tanggal = tanggal[1]
    }else{
        tanggal = temp[2][0]
    }
    let mouth = bulan.indexOf(temp[2][1])+1
    let tahun = temp[2][2]
    tahun = tahun[2] + tahun [3]
    console.log(temp[3][0]+
        temp[0][0]+
        temp[1][0]+
        tengah+'-'+ ''+
        tanggal + mouth+
        tahun)
}
generateNum(['Steve', 'Jobs', '23-Jan-2010', 'M'])  // MSJOB-3110
generateNum(['Steve', 'Jacob', '23-Jan-2010', 'M'])  // MSJC-3110

//theMost
const theMost = (kata) =>{
    let kataArr = kata.split('')
    let obj = {}
    kataArr.forEach(element => {
        if(!obj[element]){
            obj[element] = 0
            obj[element]++
        }else{
            obj[element]++
        }
    });
    let banyak =0
    let hasil = []
    for (let element in obj){
        if(obj[element] > banyak){
            hasil = [element]
            banyak = obj[element]
        }else if (obj[element] == banyak){
            hasil.push(element)
        }
    }
    return hasil.join('')
}
console.log(theMost('alphaaa')) // a

const isEmail = (email) =>{
    filter = email.replace(/[^a-z]/g,' ')
    array = filter.split(' ')
    if(array.length == 3){
        if(array[1] == ''){
            return 'false'
        }else{
            return 'true'
        }
    }else{
        return 'false'
    }
}

console.log(isEmail ('jamaludinfikrii@gmail.com')) // True
console.log(isEmail ('jamaludinfikrii@yahoo.com')) // True
console.log(isEmail ('jamaludinfikrii@fikri.com')) // True
console.log(isEmail ('jamaludinfikrii.com')) // False
console.log(isEmail ('jamaludinfikrii@.com')) // False
console.log(isEmail ('jamaludinfikrii')) // False