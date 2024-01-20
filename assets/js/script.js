const secText = document.querySelector(".sec-text")

const textLoad = () => {
    setTimeout(() => {
        secText.textContent = "Freelancer"
        secText.style.color = "#4070F4"
    }, 0)
    setTimeout(() => {
        secText.textContent = "Blogger"
        secText.style.color = "#FCC300"
    }, 4000)
    setTimeout(() => {
        secText.textContent = "Youtuber"
        secText.style.color = "#FC0000"
    }, 8000)
}

textLoad()
setInterval(textLoad, 12000)