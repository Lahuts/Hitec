document.addEventListener("DOMContentLoaded", ()=>{
     let infoDate = document.querySelectorAll(".chronologie>.container>div");
  let index = 0;
  infoDate.forEach((element) => {
    let fdiv = (infoDate[0].querySelector("h2").style.backgroundColor =
      "rgb(255, 76, 76)");
    let op = element.querySelector("p").innerText;
    let title = element.querySelector("h2").innerText;
    element.addEventListener("click", (e) => {
      let tit = element.querySelector("h2");
      infoDate.forEach((element) => {
        element.querySelector("h2").style.backgroundColor =
          "rgb(145, 145, 145)";
      });
      tit.style.backgroundColor = "rgb(255, 76, 76)";
      let p = document.querySelector(".info-date>p");
      let h2 = document.querySelector(".date");
      h2.innerText = `${title}`;
      index = element.dataset.index;
      p.innerText = op;
    });
  });

  let btnl = document.querySelector(".l-chev").addEventListener("click", () => {
    if (index - 1 < 0) {
      index = 9;
    }
    index--;
    let fdiv = infoDate[index].querySelector("h2");
    let pdiv = infoDate[index].querySelector("p");
    let p = document.querySelector(".info-date>p");
    let h2 = document.querySelector(".date");
    h2.innerText = `${fdiv.innerText}`;
    p.innerText = pdiv.innerText;
    infoDate.forEach((element) => {
      element.querySelector("h2").style.backgroundColor = "rgb(145, 145, 145)";
    });
    fdiv.style.backgroundColor ="rgb(255, 76, 76)";
  });

  let btnr = document.querySelector(".r-chev").addEventListener("click", () => {
    if (index > 7) {
      index = -1;
    }
    index++;
    let fdiv = infoDate[index].querySelector("h2");
    let pdiv = infoDate[index].querySelector("p");
    let p = document.querySelector(".info-date>p");
    let h2 = document.querySelector(".date");
    h2.innerText = `${fdiv.innerText}`;
    p.innerText = pdiv.innerText;
    infoDate.forEach((element) => {
      element.querySelector("h2").style.backgroundColor = "rgb(145, 145, 145)";
    });
    fdiv.style.backgroundColor ="rgb(255, 76, 76)";
  });
})
document.addEventListener("DOMContentLoaded", (e) => {
    let navi = document.querySelector(".nav-dis");
    let burger = document.querySelector("header>div");
    burger.addEventListener("click", (e) => {
      navi.getAttribute("class") == "nav-dis" ? navi.setAttribute("class", "nav-enab"): navi.setAttribute("class", "nav-dis");
        ;
        burger.getAttribute("class") == "burger"
        ? burger.setAttribute("class", "cross")
        : burger.setAttribute("class","burger");
    });
  });