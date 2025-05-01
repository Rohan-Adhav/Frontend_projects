document.addEventListener("DOMContentLoaded",()=>{
  let block = document.getElementById("block")  
  for (let i =0 ;i<localStorage.length ;i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key)
    block.innerHTML += `<p class="history">${i+1})  ${key} = ${value} <p>`
    
  }
  const clear = ()=>{
    const clr = document.getElementById("buttonClear")
    clr.addEventListener("click",()=>{
        localStorage.clear()
        location.reload()
    })
  }
  clear()
   
})