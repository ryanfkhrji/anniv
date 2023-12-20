// memories
const boxImg = document.querySelector(".box-img");
const head = document.querySelector(".header-img");
const thumb = document.querySelectorAll(".thumbnail-img");

boxImg.addEventListener("click", function (e) {
  if (e.target.className == "thumbnail-img") {
    head.src = e.target.src;
    head.classList.add("animation");

    setTimeout(function () {
      head.classList.remove("animation");
    }, 500);

    thumb.forEach(function (th) {
      th.className = "thumbnail-img";
    });
    e.target.classList.add("active");
  }
});
