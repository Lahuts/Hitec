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
  let herobantest = document.querySelector(".herobanner");
  let images = ["../Hitec/asset/KOUTIO/1.jpg", "../Hitec/asset/PLATRERIEFAUXPLAFONDS/112PAR010-LACANOPEELESHALLES/1.JPG", "../Hitec/asset/LYCEESAINTDENIS/1.JPG","../Hitec/asset/PLATRERIEFAUXPLAFONDS/119BOU064-CAMPUSCONDORCETAAUBERVILLIERS/1.JPG"];
  let i = 0;
  setInterval(() => {
    herobantest.style.transition = "1s";
    herobantest.style.backgroundImage = "url('" + images[i] + "')";
    i++;
    if (i == images.length) {
      i = 0;
    }
  }, 3000);
});
