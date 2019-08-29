const steve = [0,{
    nama : function(){
        return [0, function(x){
            console.log(`Hello ${x}`)
        }]
    }
}]

steve[1]['nama']()[1]('fikri')

const objek = {
    nama : function(){
        return[0,1,{
            hei : function(){
                return function(){

                    console.log(`Hello Word`)
                }
            }
        }]
    }
}

objek['nama']()[2]['hei']()()

//map array 
var arr = [4,2,5,6]

function mapArray(x){
    return x + x 
}
// var newArr = arr.map(mapArray)
// console.log(newArr)

//duplicate
function dupMap (fn, arr){
    
    var tampung = []
    for ( var i = 0 ; i < arr.length ;i++){
        tampung.push(fn(arr[i]))
    }
    return tampung
}
var newArr = dupMap(mapArray, arr)
console.log(newArr)

let w = [
    [0,2],
    [1,2],
    [3,5],
    [5,4]

]
var y = w.map(function(val, i){return val[0] * 2 + ' index ke ' + i} )
console.log (y)