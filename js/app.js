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
