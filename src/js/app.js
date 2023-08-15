const select = document.getElementById("event-category");
let isClicked = false;

select.addEventListener("click", function () {
  if (!isClicked) {
    select.style.backgroundImage = "url(./src/imgs/CaretUp.png)";

    isClicked = true;
  } else {
    select.style.backgroundImage = "url(./src/imgs/CaretDown.png)";

    isClicked = false;
  }
});

document.addEventListener("click", (event) => {
  if (!select.contains(event.target)) {
    select.style.backgroundImage = "url(./src/imgs/CaretDown.png)";
    isClicked = false;
  }
});
