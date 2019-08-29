
//hari ke tahun
//detik ke jam
//luas segitiga
//luas trapesium
//exit 

//Convert hari ke Tahun
      var masukanHari = parseInt(prompt("Masukan Hari "))
      var tahun = Math.floor(masukanHari / 360 )    
          tahun_2 = masukanHari % 360   
      var bulan = Math.floor(tahun_2 / 30)
          bulan_2= tahun_2 % 30
      var hari = bulan_2
   
     alert(tahun + "Tahun " + bulan + "Bulan " + hari + "Hari ")

// Convert detik ke jam
     var number = parseInt(prompt("Masukan Detik "))

     var jam =Math.floor(number/3600)
         jam_2= number % 3600
     var menit = Math.floor(jam_2/60)
         menit_2 = jam_2  % 60
     var detik = menit_2
        console.log (jam + " Jam " + menit + " Menit " + " Detik ")

//Rumus Segitiga  
  var alas = parseInt(prompt("Masukan Alas"))
  var tinggi = parseInt(prompt("Masukan Tinggi "))
  var set = 1/2
  var rumus_segitiga = (set * alas) * tinggi
  console.log(rumus_segitiga) 

//Rumus Trapesium
  var sisi_1 =parseInt(prompt("Masukan Sisi 1 "))
  var sisi_2 = parseInt(prompt("Masukan Sisi 2 "))
  var tinggi_trapesium = 10
  var rumus_trapesium = set * (sisi_1 + sisi_2) * tinggi_trapesium
  console.log(rumus_trapesium)
  