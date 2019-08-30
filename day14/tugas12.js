//find sort
const find_short = (str) =>{
    let strArray = str.split(' ')
    let newArray = []
    for (let i = 0 ; i < strArray.length;i++){
        newArray.push(strArray[i].length)            
    }
    newArray.sort(function(a,b){return a-b})
    console.log(newArray[0])
    }
    find_short('Many people get up early in the morning')// would return 2
    find_short('Every office would getting newest monitor')// would return 5
    find_short('Create new file after this morning')// would return 3

    //2
    const persistence = (angka) =>{
        
        var i = 0
        while(angka.toString().length > 1){
            angka = angka.toString().split('')
            angka = angka.reduce(function(a,b){return a*b})
            i++
        }
        return i
    }
    console.log(persistence(39))
    console.log(persistence(999))
    console.log(persistence(4))
    
//3
const mutiple_table = (baris,kolom) =>{

    let hasil=''
        for (let i=1; i<=baris; i++){
            for (let j=1; j<= kolom ;j++){
                    hasil += ` ${i * j} ` 
                
                }
                hasil += '\n'
            }
            console.log(hasil)
}    
mutiple_table(3,3)
mutiple_table(5,3)
mutiple_table(3,5)


//4
const alpabhet_posisition = (kata) =>{
    let huruf = 'abcdefghijklmnopqrstuvwxyz'.split('')
    kata = kata.toLowerCase().replace(/[^a-z]/g,'').split('')
    let temp =[]
    for(let i = 0 ; i< kata.length;i++){
        temp.push(huruf.indexOf(kata[i])+1)
    }
    return temp.join(' ')

}
console.log (alpabhet_posisition(`'The sunset sets at twelve o' clock.'`))