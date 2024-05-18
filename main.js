var slideIndex = 0;
carousel();

function carousel(){
  var i;
  var x = document.getElementsByClassName("product-card");
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length){slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

const scrollers = document.querySelectorAll(".comparison-container");
  addAnimation();

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".row");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
