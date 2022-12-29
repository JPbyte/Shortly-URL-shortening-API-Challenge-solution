//variables
const link = document.getElementById("link_put")
const btnLink = document.getElementById("link_btn")
const statsRotate = document.querySelectorAll(".img_border")
const shortCamp = document.querySelector(".short_api")
const shortLink = document.querySelector(".link_short")
let short = document.querySelector(".shorted")


statsRotate.forEach(st => {
    st.addEventListener("mouseenter", () => {        
        st.style.transition = "0.4s"
        st.style.transform = "rotate(360deg)"
    })
})

btnLink.addEventListener("click", () => {
    let linkValue = link.value;
    let regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    let validate = regex.test(link.value)

    shortLink.innerHTML = linkValue

    if (validate) {
        shortCamp.style.opacity = "1"
        shortCamp.style.transition = "0.3s"
        link.style.border = "0.17rem green solid"
    } else {
        shortCamp.style.opacity = "0"
        link.style.border = "0.17rem red solid"
    }
        fetch(`https://api.shrtco.de/v2/shorten?url=${linkValue}`)
        .then(Response => Response.json())
        .then(consumo => {
            short.style.color = "cyan"
            short.value = consumo.result.short_link
        })
})

let copy = document.querySelector(".button_copy")

copy.addEventListener("click", () => {
    short.select()
    document.execCommand("copy")
})
