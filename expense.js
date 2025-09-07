document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("expense-tracker");
    const exname = document.getElementById("expense-name")
    const examount = document.getElementById("expense-amount")
    const exlist = document.getElementById("expense-list")
    const pricing = document.getElementById("totalprice")
    const finalprice = document.getElementById("amount")

    let expenses = JSON.parse(localStorage.getItem("expense")) || [];
    
renderlist()
updatetotal()
//arraypushing 
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        const  name = exname.value.trim();
        const  amount = parseFloat(examount.value);
        const id = Date.now()
        let expenseobj ={
            id,
            name ,
             amount  ,
        }
        expenses.push(expenseobj)
        local()
      
        renderlist()
       updatetotal();
         exname.value = ""
        examount.value  = ""
    })

function calculatetotal(){
  
return expenses.reduce((acc,cur) => acc + cur.amount,0)
}

//renderlist
function renderlist(){
    exlist.innerHTML = ""
expenses.forEach(e => {
    let li = document.createElement("li")
    li.innerHTML = `<span> ${e.name} - ${e.amount} </span>
    <button data-id = ${e.id}> Delete </button>`
    li.classList.add("li")
    exlist.appendChild(li);
})
}

exlist.addEventListener("click", (e) => {
if(e.target.tagName === "BUTTON"){
    const exid = parseInt(e.target.getAttribute("data-id"));
 expenses =    expenses.filter(e => e.id !== exid)
local();
updatetotal()
renderlist()
}
})

function local(){
    localStorage.setItem("expense", JSON.stringify(expenses))
}

function updatetotal() {
    totalamount = calculatetotal()
    finalprice.textContent = totalamount;
}
})