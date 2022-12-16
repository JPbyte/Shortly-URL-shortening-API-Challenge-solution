//variables
const link = document.getElementById("link_put")
const btnLink = document.getElementById("link_btn")
const statsRotate = document.querySelectorAll(".img_border")

statsRotate.forEach(st => {
    st.addEventListener("mouseenter", () => {        
        st.style.transition = "0.4s"
        st.style.transform = "rotate(360deg)"
    })
})

btnLink.addEventListener("click", () => {
    
})