document.addEventListener("DOMContentLoaded", (e) => {
    let splide__slide = document.querySelectorAll(".splide__slide");
    splide__slide.forEach(el => {
        el.addEventListener("click", (e) => {
            let modal = document.querySelector(".modal");
            let modal__img = document.querySelector(".modal__img");
            let modal__ul = document.querySelectorAll(".modal-ul>li>img");
            let remove = document.querySelector(".mod-remove").addEventListener("click",e=>{
                modal.setAttribute("class","modal")
            });
            let i = 0;
            let datab = [
            el.querySelector("figure").dataset.img1,
            el.querySelector("figure").dataset.img2,
            el.querySelector("figure").dataset.img3,
            el.querySelector("figure").dataset.img4];

            modal__ul.forEach(o => {
                modal__ul[i].setAttribute("src", datab[i])
                modal__ul[i].addEventListener("click",e =>{
                    console.log(o);
                   modal__img.setAttribute("src",o.getAttribute("src"));
                });
                i++;
            });

            modal__img.setAttribute("src", el.children[0].children[0].getAttribute("src"));
            modal.setAttribute("class", "modal modal--active");

        });
    });
});