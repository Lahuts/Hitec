document.addEventListener("DOMContentLoaded", (e) => {
    let splide__slide = document.querySelectorAll(".splide__slide");
    splide__slide.forEach(el => {
        el.addEventListener("click", (e) => {
            let modal = document.querySelector(".modal");
            let modal__img = document.querySelector(".modal__img");
            modal__img.setAttribute("src", el.children[0].children[0].getAttribute("src"));
            modal.setAttribute("class", "modal modal--active");
            modal.addEventListener("click", (e) => {
                modal.setAttribute("class", "modal");
                
            });
        });
    });
});