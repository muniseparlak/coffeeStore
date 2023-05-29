document.querySelector("#anasayfa").addEventListener ("click", function reloadPage(){
    window.location.reload()
})    // anasayfaya tıklayınca sayfa yenileme


document.querySelector("#iletisim").addEventListener("click", function asagiKaydir(){
    window.scrollBy(0,1500)
})


/*

const menu = [
    {
        category : "coffee",
        title : "Espresso",
        price : 25,
        img: "https://picsum.photos/id/63/200/300"
    },
    {
        category : "coffee",
        title : "Latte",
        price : 40,
        img: "https://picsum.photos/id/431/200/300"
    },
    {
        category : "coffee",
        title : "Türk Kahvesi",
        price : 20,
        img: "https://picsum.photos/id/365/200/300"
    },
    {
        category : "coffee",
        title : "Mocha",
        price : 40,
        img: "https://picsum.photos/id/691/200/300"
    },
    {
        category : "drink",
        title : "Bitki Çayı",
        price : 25,
        img: "https://picsum.photos/id/225/200/300"
    },
    {
        category : "drink",
        title : "Detoks İçeceği",
        price : 35,
        img: "https://picsum.photos/id/429/200/300"
    },
    {
        category : "drink",
        title : "Maden Suyu",
        price : 10,
        img: "https://picsum.photos/id/326/200/300"
    },
    {
        category : "drink",
        title : "Granola Bowl",
        price : 45,
        img: "https://picsum.photos/id/493/200/300"
    },
    {
        category : "drink",
        title : "Kurabiye",
        price : 20,
        img: "https://picsum.photos/id/835/200/300"
    },
    {
        category : "drink",
        title : "Meyveli Yulaf Topları",
        price : 15,
        img: "https://picsum.photos/id/889/200/300"
    },

]

*/


document.querySelector(".icecek").addEventListener("click", function getDrink (){
       window.location.assign("menu.html")
       
})

document.querySelector(".kahve").addEventListener("click", function getCoffee (){
    window.location.assign("menu.html")
   
})

document.querySelector(".tatli").addEventListener("click", function getDessert (){
    window.location.assign("menu.html")
    
})