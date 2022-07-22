const Tombol1 = document.querySelector(".satu")
const Tombol2 = document.querySelector(".dua")
const Gambar = document.querySelector(".gambar")
const Pesan = document.querySelector(".order")
const TombolCelana1 = document.querySelector(".satu2")
const TombolCelana2 = document.querySelector(".dua2")
const GambarCelana = document.querySelector(".gambar2")
const PesanCelana = document.querySelector(".order2")
const TombolJam1 = document.querySelector(".satu3")
const TombolJam2 = document.querySelector(".dua3")
const GambarJam = document.querySelector(".gambar3")
const PesanJam = document.querySelector(".order3")
const TombolSepatu1 = document.querySelector(".satu4")
const TombolSepatu2 = document.querySelector(".dua4")
const GambarSepatu = document.querySelector(".gambar4")
const PesanSepatu = document.querySelector(".order4")
const TombolTopi1 = document.querySelector(".satu5")
const TombolTopi2 = document.querySelector(".dua5")
const GambarTopi = document.querySelector(".gambar5")
const PesanTopi = document.querySelector(".order5")
const TombolKaosKaki1 = document.querySelector(".satu6")
const TombolKaosKaki2 = document.querySelector(".dua6")
const GambarKaosKaki = document.querySelector(".gambar6")
const PesanKaosKaki = document.querySelector(".order6")
let angka = 1


Tombol2.onclick = ()=>{
    if(angka <=1){
        angka = 3
    }
    else{
        angka--
    }
    Gambar.src ='imgkaos/'+angka+'.jpeg'
}
Tombol1.onclick = ()=>{
    if(angka >=3){
        angka = 1
    }
    else{
        angka++
    }
    Gambar.src ='imgkaos/'+angka+'.jpeg'
}
Pesan.onclick =()=>{
    alert("pemesanan telah berhasil😉")
}
TombolCelana1.onclick = ()=>{
    if(angka <=1){
        angka = 3
    }
    else{
        angka--
    }
    GambarCelana.src ='imgcelana/'+angka+'.jpeg'
}
TombolCelana2.onclick = ()=>{
    if(angka >=3){
        angka = 1
    }
    else{
        angka++
    }
    GambarCelana.src ='imgcelana/'+angka+'.jpeg'
}
PesanCelana.onclick =()=>{
    alert("pemesanan telah berhasil😉")
}
TombolJam1.onclick = ()=>{
    if(angka <=1){
        angka = 3
    }
    else{
        angka--
    }
    GambarJam.src ='imgjam/'+angka+'.jpeg'
}
TombolJam2.onclick = ()=>{
    if(angka >=3){
        angka = 1
    }
    else{
        angka++
    }
    GambarJam.src ='imgjam/'+angka+'.jpeg'
}
PesanJam.onclick =()=>{
    alert("pemesanan telah berhasil😉")
}
TombolSepatu1.onclick = ()=>{
    if(angka <=1){
        angka = 3
    }
    else{
        angka--
    }
    GambarSepatu.src ='imgsepatu/'+angka+'.jpeg'
}
TombolSepatu2.onclick = ()=>{
    if(angka >=3){
        angka = 1
    }
    else{
        angka++
    }
    GambarSepatu.src ='imgsepatu/'+angka+'.jpeg'
}
PesanSepatu.onclick =()=>{
    alert("pemesanan telah berhasil😉")
}
TombolTopi1.onclick = ()=>{
    if(angka <=1){
        angka = 3
    }
    else{
        angka--
    }
    GambarTopi.src ='imgtopi/'+angka+'.jpeg'
}
TombolTopi2.onclick = ()=>{
    if(angka >=3){
        angka = 1
    }
    else{
        angka++
    }
    GambarTopi.src ='imgtopi/'+angka+'.jpeg'
}
PesanTopi.onclick =()=>{
    alert("pemesanan telah berhasil😉")
}
TombolKaosKaki1.onclick = ()=>{
    if(angka <=1){
        angka = 3
    }
    else{
        angka--
    }
    GambarKaosKaki.src ='imgkaoskaki/'+angka+'.jpeg'
}
TombolKaosKaki2.onclick = ()=>{
    if(angka >=3){
        angka = 1
    }
    else{
        angka++
    }
    GambarKaosKaki.src ='imgkaoskaki/'+angka+'.jpeg'
}
PesanKaosKaki.onclick =()=>{
    alert("pemesanan telah berhasil😉")
}