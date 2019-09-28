const triggerBtn = document.getElementById("trigger");
const triggerClose = document.getElementById("trigger-close");
const blackout = document.getElementById("blackout");
const glazing = document.getElementById("glazing").children;
const count = document.getElementById("count").children;
const test = document.getElementById("test");
const blackback = document.getElementById("blackout");
const orderInPrdPage = document.getElementsByClassName("order_btn");

console.log(glazing.length);
console.log(count.length);
console.log(orderInPrdPage);

const slideInPage = document.getElementById("slide-in-page");

for(let i=0; i < orderInPrdPage.length; i++) {
  orderInPrdPage[i].addEventListener("click", function(){
    blackout.style.visibility = "visible";
    slideInPage.style.visibility = "visible";
  })
}

triggerBtn.addEventListener("click", function(){
  blackout.style.visibility = "visible";
  slideInPage.style.visibility = "visible";
})

triggerClose.addEventListener("click", function() {
  slideInPage.style.visibility = "hidden";
  blackout.style.visibility = "hidden";
})

blackback.addEventListener("click", function() {
  slideInPage.style.visibility = "hidden";
  blackout.style.visibility = "hidden";
})

test.addEventListener("click", function() {
  test.classList.remove("order-options");
  test.classList.add("order-options-clicked");
})

for(let i=0;i < glazing.length ;i++) {
  glazing[i].addEventListener("click",function(){
    for(let j=0; j < glazing.length ;j++){
      glazing[j].classList.remove("order-options-clicked");
      glazing[j].classList.add("order-options");
    }
    glazing[i].classList.remove("order-options");
    glazing[i].classList.add("order-options-clicked");
  })
}


for(let i=0;i < count.length ;i++) {
  count[i].addEventListener("click",function(){
    for(let j=0; j < count.length ;j++){
      count[j].classList.remove("order-options-clicked");
      count[j].classList.add("order-options");
    }
    count[i].classList.remove("order-options");
    count[i].classList.add("order-options-clicked");
  })
}
