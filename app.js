document.querySelector("#anasayfa").addEventListener ("click", function reloadPage(){
    window.location.reload()
})    // anasayfaya tıklayınca sayfa yenileme


document.querySelector("#iletisim").addEventListener("click", function asagiKaydir(){
    window.scrollBy(0,1500)
})




document.querySelector(".icecek").addEventListener("click", function getDrink (){
       window.location.assign("menu.html")
       
})

document.querySelector(".kahve").addEventListener("click", function getCoffee (){
    window.location.assign("menu.html")
   
})

document.querySelector(".tatli").addEventListener("click", function getDessert (){
    window.location.assign("menu.html")
    
})
