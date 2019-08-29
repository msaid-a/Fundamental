var x = [71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69]
var sort = [...x].sort()
function getMedian(array){
        //array.sort((a, b) => a - b);
            let median;
            if (array.length % 2 !== 0) {
                median = array[Math.floor(array.length / 2)];
            }
                else {
                    const mid1 = array[(array.length / 2) - 1];
                    const mid2 = array[array.length / 2];
                    median = (mid1 + mid2) / 2;
                }
                return median;
            }
            console.log(getMedian(sort))
    function getQ3(array){
        var setengahTerakhir=(array.slice(array.length/2,array.length))
        console.log(`Setengah Terakhir [${setengahTerakhir}]`)
        if (setengahTerakhir.length % 2 !== 0){
            q3= array[Math.floor (setengahSatu.length/2)]
        }
        else {
            const mid1 = setengahTerakhir[setengahTerakhir.length /2 - 1]
            const mid2 = setengahTerakhir[setengahTerakhir.length /2]
            q3 =  (mid1 + mid2) /2
        }
        return parseFloat(q3)
    }
    var Q3 = getQ3(sort)
    console.log(`Q3 adalah =${Q3}`)

    function getQ1(array){
        var setengahSatu= (array.slice(0,array.length/2))
        console.log(`Setengah Pertama [${setengahSatu}]`)
        if (setengahSatu.length % 2 !== 0){
            q1= array[Math.floor (setengahSatu.length/2)]
        }
        else {
            const mid1 = setengahSatu[setengahSatu.length /2 - 1]
            const mid2 = setengahSatu[setengahSatu.length /2]
            q1 =  (mid1 + mid2) /2
        }
        return parseFloat(q1)
    }
    var Q1 = getQ1(sort)
    console.log(`Q1 adalah =${Q1}`)
    function IQR (a,b){
        return b - a
    }
    var QR = IQR(Q1,Q3)   
    console.log(QR)

    function findLower(a,b,c){
        return a - (b*c)
    }
    console.log(`Lower Limit adalah = ${findLower(Q1,1.5,QR)}`)

    function findUpper(a,b,c){
        return a + (b*c)
    }
    console.log(`Upeer Limit Adalah ${findUpper(Q3,1.5,QR)}`)

    function dataTidak(arr){
        var data = []
        for (var i = 0 ; i< arr.length ; i++){
            if (arr[i] <= 100 ){
                data.push(arr[i])
            }
        }
        return data
    }
    console.log (`Data yang tidak Outlier [${dataTidak(x)}]`)

    //2

    function hitungVocal(kata){
        hasil = kata.toLowerCase().replace(/[^a,i,u,e,o]/g,'')
        return hasil.length
    }
    console.log(hitungVocal('Budi Pergi Ke Pasar'))
    console.log(hitungVocal('Purwadhika'))

//3
function sortAngka(angka){
    let hasil = []
    for (var i = 0 ; i<angka.length ;i++){
        for ( var j = 0 ; j<angka[i].length;j++)
            hasil.push(angka[i][j])
        
    }
    console.log(hasil.sort())
}

sortAngka([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])
sortAngka([[3,4,2,1] , [1,2,3] , [5,4,3,1]])
//4
function countWords(kata){
    var hasil = ''
    var kata = kata.split(' ')
    var obj = {}
    kata.forEach(num => {
        if(!obj[num]){
            obj[num] = 0
        }
        obj[num]++
    });

    var temp = []
    for (var i = 0; i<kata.length; i++){
        if(temp.includes(kata[i]) == false){
            temp.push(kata[i])
        }
    }

    for(var i = 0; i<Object.keys(obj).length; i++){
        hasil += 'Jumlah kata "'+ temp[i] +'" ada sebanyak ' + obj[temp[i]] + '\n'
    }
    console.log(hasil)

}

countWords('jangan jangan kamu adalah aku')

