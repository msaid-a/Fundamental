 //DupString 
 function dupString(kata){
    let kataArray= kata.split('')
    let panjang = kataArray.length
    let data = [] 
    for ( var i = 0 ; i < panjang  ; i++ ){
        for (var j = 0 ; j <= i ; j++){
            data.push(kata[i])
        }
    }
    console.log(data.join(''))
    }
    dupString('said')
    
    
    
    //DupString 2.
    function dupString2(kata){
    
         kataArray= kata.split('')
         panjang = kataArray.length
         data = [] 
         
        for ( var i = 0 ; i < panjang  ; i++ ){
            for (var j = 0 ; j < i+1 ; j++){
                if (j == 0){
                    data.push('-',kataArray[i].toUpperCase())
                }else{
                    data.push(kataArray[i])
        
                }
                if(i == 0){
                    data.shift()
                }
              
            }
        }
        
        console.log(data.join(''))
       }
    dupString2('abcd')
    
    
    function batuKertas(pilihan1,pilihan2){
        pilihan1 = pilihan1.toLowerCase()
        pilihan2 = pilihan2.toLowerCase()
    
        if((pilihan1 == 'batu' ) && (pilihan2 == 'kertas')){
    
            console.log("Pemain 2 menang")
        }else if ((pilihan1 == 'batu' ) && (pilihan2 == 'gunting' )){
            
            console.log('Pemain 1 menang')
        }else if ((pilihan1 == 'batu' ) && (pilihan2 == 'batu'  )){
    
            console.log ('Seimbang')
    
        }else if ((pilihan1 == 'kertas' ) && (pilihan2 == 'batu' )){
            console.log ('Pemain 1 menang')
        
        }else if ((pilihan1 == 'kertas' ) && (pilihan2 == 'gunting' )){
            
            console.log('Pemain 2 menang')
        }else if ((pilihan1 == 'kertas' ) && (pilihan2 == 'kertas')){
    
            console.log ('Seimbang')
    
        }else if ((pilihan1 == 'gunting' ) && (pilihan2 == 'batu' )){
            console.log ('Pemain 2 menang')
        
        }else if ((pilihan1 == 'gunting' ) && (pilihan2 == 'kertas' )){
            
            console.log('Pemain 1 menang')
        }else if ((pilihan1 == 'gunting' ) && (pilihan2 == 'gunting')){
    
            console.log ('Seimbang')
    
        }else{
            console.log('Anda Salah Input')
        }
    
    
    } 
    batuKertas('batu','Kertas')
