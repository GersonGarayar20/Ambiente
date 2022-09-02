

const d = document


const navbar = d.querySelector(".nav")
const sticky = navbar.offsetTop


window.addEventListener("scroll", e=>{


  window.pageYOffset >= sticky
  ? navbar.classList.add("sticky")
  : navbar.classList.remove("sticky")
    
  
})




