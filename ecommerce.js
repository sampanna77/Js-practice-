document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {id: 1, name: "Products 1", price: "$20.99"},
        {id: 2, name: "Products 2", price: "$30.99"},
        {id: 3, name: "Products 3", price: "$40.99"}
    ];

    let cart = JSON.parse(localStorage.getItem("products")) || [];

    const productlist  = document.getElementById("product-list");
    const cartitems = document.getElementById("cart-items");
    const emptycardmsg = document.getElementById("emptycard");
    const carttotal = document.getElementById("cart-total");
    const totalprice = document.getElementById("total-price");
    const checkout = document.getElementById("checkout-btn")

//render productlist 
  products.forEach(p => {
 let div =    document.createElement("div")
 div.innerHTML = `<span> ${p.name} - ${p.price} </span>
 <button data-id = ${p.id}> Add to cart </button>`
div.classList.add("product")
productlist.appendChild(div)
  })

rendercart()


  // add to cart 
productlist.addEventListener("click", (e)=>
{
if(e.target.tagName === "BUTTON"){
    let getproduct = parseInt(e.target.getAttribute("data-id"))
let p = products.find(p => p.id === getproduct)
cart.push(p)
console.log(cart)
rendercart()
local();
}
})


//render cartitems 
function rendercart(){
    let amount = 0;
    cartitems.innerHTML = ""
    carttotal.classList.remove("hidden")
    emptycardmsg.classList.add("hidden")
    cart.forEach(p => {
        let div = document.createElement("div")
        div.innerHTML = `<span> ${p.name} - ${p.price}</span>
        <button data-id = ${p.id} > Detele </button>`
        cartitems.appendChild(div)
        div.classList.add("product")
       let price = parseFloat(p.price.replace("$", ""));
       amount += price
    })
    totalprice.textContent = amount.toFixed(2) ;
}

//delete cart
cartitems.addEventListener("click", (e)=>{
if(e.target.tagName === "BUTTON"){
    let cartid = parseInt(e.target.getAttribute("data-id"))
   cart =  cart.filter(p =>  p.id !== cartid)
    rendercart()
    local()
}
})

//localstorage
function local(){
localStorage.setItem("products", JSON.stringify(cart))
}

checkout.addEventListener("click", ()=>{
    cartitems.innerHTML = ""
    alert(`checkout successful `)
    cart.length = 0;
    rendercart()
    local()
    carttotal.classList.add("hidden")
    emptycardmsg.classList.remove("hidden")
})
});