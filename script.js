const bodyE = document.querySelector('body')
bodyE.addEventListener("mousemove", (e)=>{
    // console.log(e.clientX, e.clientY)
    const x = e.clientX;
    const y = e.clientY;
    const spanE = document.createElement("span")
    spanE.style.left = x + "px"
    spanE.style.top = y + "px"
    const size = Math.random()*100
    spanE.style.width = size + "px"
    spanE.style.height = size + "px"
    bodyE.appendChild(spanE);
    setTimeout(() => {
        spanE.remove();
        
    }, 3000);
    
})