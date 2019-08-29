
var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

var hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', `Jum'at`, 'Sabtu']
// var masukanHari = 100
// var date = new Date(new Date().getTime()+(masukanHari*24*60*60*1000)); 

var date = new Date()

var day = date.getDate()

var month = date.getMonth()

var thisDay = date.getDay(),

    thisDay = hari[thisDay];
    
var yy = date.getYear()

var year = (yy < 1000) ? yy + 1900 : yy

alert(thisDay + ', '  + day + ' ' + bulan[month] + ' ' + year)

