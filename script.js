//Funcion para el Carrousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        moveCarousel(button)
    })
})

function moveCarousel(button) {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}

// Ejecutar automáticamente cada 5 segundos para el botón "next"
const nextButton = document.querySelector("[data-carousel-button='next']")
setInterval(() => {
    moveCarousel(nextButton)
}, 10000)