let list = document.querySelectorAll(".list");
let portfolioItem = document.querySelectorAll(".portfolio-item");


for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function() {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');

    for(let k = 0; k <= portfolioItem.length; k++) {
        portfolioItem[k].classList.remove("active");
        portfolioItem[k].classList.add("hide");
    if(portfolioItem[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
        portfolioItem[k].classList.remove("hide");
        portfolioItem[k].classList.add("active");
      }
    }
  })
}