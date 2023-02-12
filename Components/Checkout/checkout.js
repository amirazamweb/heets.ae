let setLocalStorage = JSON.parse(localStorage.getItem("orderKey"));
let inputData1 = document.querySelectorAll('input[type= "text"]');
let inputData2 = document.querySelectorAll('input[type= "number"]');
let inputData3 = document.querySelectorAll('input[type= "email"]');
let textAreaData = document.querySelector('textarea');
let selectedData = document.querySelector('select');
let checkbox = document.querySelector('input[type="checkbox"]');
let orderNumber = localStorage.getItem("orderCountKey") || 0;

function dispatchOrder() {
    if (inputData1.value != "" && inputData2.value != "" && inputData3.value != "" && textAreaData.value != "" & selectedData.value != "" && checkbox.checked == true) {

        orderNumber++;

        localStorage.setItem("orderCountKey", orderNumber);
        document.querySelector("#successful-ordered").style.display = "block";
        document.querySelector("#successful-ordered #p2 span").innerText = orderNumber;
        document.querySelector("#container").style.display = "none";
        setLocalStorage.splice(0);
        localStorage.setItem("orderKey", JSON.stringify(setLocalStorage));

    }
    else {
        document.querySelector("#vaidation-alert").style.display = "block"
    }
}

let orderDetailsContainer = document.getElementById('order-details-container');
let totalOrder = document.getElementById('total-order');
let deliveryCharge = document.getElementById('delivery-charge');
let orderSum = document.getElementById('order-sum');
let price = 0;

setLocalStorage.map((e) => {
    price += (e.price * e.orderCount);
    let div = document.createElement('div');
    let elm = `<div class="img-div"><img src="${e.url}">
      </div>
      <div class="order-info">
          <p class="product-name">${e.title}</p>
          <p>
              <span class="price-span">AED <span>${e.price}</span></span>
              <span class="qty-span">QTY:<span>${e.orderCount}</span></span>
          </p>
      </div>`

    div.innerHTML = elm;
    orderDetailsContainer.append(div);

})

totalOrder.innerText = price;

if (price > 200) {
    deliveryCharge.innerText = 0;
    orderSum.innerText = price;
}
else {
    deliveryCharge.innerText = 30;
    orderSum.innerText = price + 30;
}


