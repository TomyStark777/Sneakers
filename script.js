let images = document.getElementsByClassName("petite")
let btnPlus = document.getElementById("plus")
let btnMoins = document.getElementById("moins")
let nbreAchat = document.getElementById("nbre")
let btnAjouter = document.querySelector("button")
let nbreHaut = document.getElementById("nbreHaut")
let cart = document.getElementById("cart") 
let third = document.getElementById("third")
let close = document.getElementById("close")
let previous = document.getElementById("previous")
let next = document.getElementById("next")
let espace = document.getElementById("espace")
let notification = document.getElementById("active-cart")
let calcul = document.getElementById("calcul")
let espaceAfficher = document.getElementById("grandeImage")
let produit = document.getElementById("produit")
let supprime = document.getElementById("sup")
let check = document.getElementById("check")
let c=0
let v=1
let i=0
let r=0
let j=0
console.log(images)
console.log(supprime)
//Affichage des image au click

images[0].addEventListener("click",()=>{
    v=1
    i=0
    nbreAchat.innerText=`${i}`
    espaceAfficher.innerHTML=`<img src="./images/image-product-1.jpg" id="affiche">`
})
images[1].addEventListener("click",()=>{
    v=2
    i=0
    nbreAchat.innerText=`${i}`
    espaceAfficher.innerHTML=`<img src="./images/image-product-2.jpg" id="affiche">`
})
images[2].addEventListener("click",()=>{
    v=3
    i=0
    nbreAchat.innerText=`${i}`
    espaceAfficher.innerHTML=`<img src="./images/image-product-3.jpg" id="affiche">`
})
images[3].addEventListener("click",()=>{
    v=4
    i=0
    nbreAchat.innerText=`${i}`
    espaceAfficher.innerHTML=`<img src="./images/image-product-4.jpg" id="affiche">`

})

//Choix du nombre d'éléments à ajouter au panier

console.log(btnMoins)
console.log(btnPlus)
btnMoins.addEventListener("click",()=>{
    
    if(i>0)
    {
        i--
        nbreAchat.innerText=`${i}`
    }
})
btnPlus.addEventListener("click",()=>{
        i++
        nbreAchat.innerText=`${i}`
})
 console.log(btnAjouter)
 
 btnAjouter.addEventListener("click",()=>{
    nbreHaut.innerText=`${i}`
    if(i !== 0){
        nbreHaut.style.display = "block"
        j=i
    }
    
    else{
        nbreHaut.style.display = "none"
    }
    if(i>9){
        nbreHaut.style.fontSize="8px"
        nbreHaut.style.clipPath="circle()"
        nbreHaut.style.padding="2px"
    }else{
        nbreHaut.style.fontSize="10px"
        nbreHaut.style.clipPath="circle()"
        nbreHaut.style.padding="4px"


    }
    notification.style.display="none"
 })


 //Affichage en plein écran et navigation entre les images
 espaceAfficher.addEventListener("click",()=>{
    third.style.display= "block"
    espace.innerHTML=`<img src="./images/image-product-${v}.jpg" id="affiche" style="width:35vw;">`
    notification.style.display="none"

 })
 close.addEventListener("click",()=>{
    third.style.display="none"
 })

//Navigation entre les images grâces aux flèches 

previous.addEventListener("click",()=>{
    console.log(v)
    if(v>1){
        v--
        espace.innerHTML=`<img src="./images/image-product-${v}.jpg" id="affiche" style="width:35vw;">`
    }
})
next.addEventListener("click",()=>{
    
    if(v<4){
        v++
        espace.innerHTML=`<img src="./images/image-product-${v}.jpg" id="affiche" style="width:35vw;">`
    }
})

//Affichage du contenu du panier 

console.log(cart)
console.log(notification)

cart.addEventListener("click",()=>{
    // body.classList.toggle("toggle")
    // console.log("toggle");
    if (j===0){
        produit.innerHTML=`<p>Your cart is empty</p>`
        produit.style.width="27vw"
        produit.style.height="15vh"
        check.style.display="none"
    }else {
        produit.innerHTML=`<div style="display: flex;gap: 5px;justify-content: center;align-items: center;">
        <img src="./images/image-product-1-thumbnail.jpg" alt="" class="imgc">
        <div>    
            <p>Fall Limited Edition Sneakers</p>
            <p id="calcul">$125.00 x ${j} <b>$${125*j}.00</b></p>
        </div>
        <img src="/images/icon-delete.svg" alt="" id="del">

    `
    check.style.display="block"
    supprime.style.display="block"
    }
    if(r===0){
        notification.style.display="block"
        r++

    }else if(r===1){
        notification.style.display="none"
        r--
    }
    calcul.innerHTML=`$125 x ${j} <b>$${125*j}.00</b>`
})

//Permettre de vider le panier 

supprime.addEventListener("click",()=>{
    notification.style.display="none"
    
})

check.addEventListener("click",()=>{
    notification.style.display="none"
})