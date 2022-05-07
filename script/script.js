const navbar = document.getElementById("navbar");
const toogle = document.getElementById("toogle");
const navlink = document.getElementById("navbar-links");
const a_nav_link = document.getElementById("a-navbar-link");

document.onclick = function (e) {
  if (e.target.id == "a-navbar-link") {
    navlink.classList.remove("active");
    toogle.classList.remove("active");
  }
};

toogle.onclick = function () {
  toogle.classList.toggle("active");
  navlink.classList.toggle("active");
};
