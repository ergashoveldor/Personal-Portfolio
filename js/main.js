let list = document.querySelectorAll(".list");
let portfolioItem = document.querySelectorAll(".portfolio-item");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k <= portfolioItem.length; k++) {
      portfolioItem[k].classList.remove("active");
      portfolioItem[k].classList.add("hide");
      if (
        portfolioItem[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        portfolioItem[k].classList.remove("hide");
        portfolioItem[k].classList.add("active");
      }
    }
  });
}

const counters = document.querySelectorAll(".counter");
const speed = 5;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = target / speed;
    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 250);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});



 var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   freeMode: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     // when window width is >= 320px
     320: {
       slidesPerView: 1,
       spaceBetween: 20,
     },
     
     992: {
       slidesPerView: 2,
       spaceBetween: 30,
     },
     1300: {
       slidesPerView: 3,
       spaceBetween: 40,
     },
   },
 });