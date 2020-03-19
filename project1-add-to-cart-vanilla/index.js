function builditems() {
  colors = ["#413c69", "#4a47a3", "#ad62aa", "#eab9c9"];
  price = [100, 120, 200, 250, 301, 235, 652];
  productnames = [
    "apple",
    "banana",
    "orange",
    "peach",
    "guava",
    "lychee",
    "strawberry"
  ];
  htmlitems = "";
  for (i = 0; i < 7; i++) {
    randcolor = colors[Math.floor(Math.random() * colors.length)];
    randproductname =
      productnames[Math.floor(Math.random() * productnames.length)];

    htmlitems =
      htmlitems +
      `<div class="item" data-item-name="${randproductname}" data-item-price="${price[i]}" style="background-color:${randcolor};"> <h3>${randproductname} </h3><h2>Rs. ${price[i]}</h2></div>`;
  }
  return htmlitems;
}

function buildcartitem(itemName) {
  htmlcartitem = "";
  htmlcartitem =
    htmlcartitem +
    `<div class="cartitem" id="cartitem${identity++}">
              <h3 class="cartitemtext">${itemName}</h3>
            </div>`;
  return htmlcartitem;
}

htmlitems = builditems();

document.getElementById("items").innerHTML = htmlitems;

total = 0;
identity = 0;

items = Array.from(document.getElementsByClassName("item"));
items.map(item => {
  item.addEventListener("click", () => {
    total += Number(item.dataset.itemPrice);
    document.getElementById(
      "total"
    ).innerHTML = `<h2>Total : Rs. ${total}</h2>`;

    htmlcartitem = buildcartitem(item.dataset.itemName);
    document
      .getElementById("cartitems")
      .insertAdjacentHTML("beforeend", htmlcartitem);

    document
      .getElementById("cartitem" + String(identity - 1))
      .addEventListener("click", event => {
        // console.log(event.target, event.currentTarget);
        targetElement = event.currentTarget;
        targetElement.parentNode.removeChild(targetElement);
        total -= Number(item.dataset.itemPrice);
        document.getElementById(
          "total"
        ).innerHTML = `<h2>Total : Rs. ${total}</h2>`;
      });
  });
});
