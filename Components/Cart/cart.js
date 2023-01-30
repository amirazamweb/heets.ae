let orderDetails = JSON.parse(localStorage.getItem('orderKey')) || [];

let totalOrderPrice = 0;

if (orderDetails.length == 0) {
    document.querySelector('.default-message').style.display = "block";
}

else {

    document.querySelector('.product-order-details').style.display = "block";

    orderDetails.map((e, i) => {

        let tr = document.createElement('tr');

        let tableRowData = `<td style="width: 8%;"><img src=${e.url}></td>
          <td>${e.title}</td>
          <td class="price">AED <span>${e.price}</span></td>
          <td><button class="decrease-count">-</button> <span class="count" id= "${i}">${e.orderCount}</span> <button
                  class="increase-count">+</button></td>
          <td class="price">AED <span>${e.price * e.orderCount}</span></td>
          <td onclick = "removeOrder(this, ${i})"><i class="fa-regular fa-trash-can"></i></td>`;

        tr.innerHTML = tableRowData;

        totalOrderPrice += (e.price * e.orderCount);

        document.querySelector("#subtotal").innerText = totalOrderPrice;

        document.querySelector(".product-order-details tbody").append(tr);
    })

}

// increase order count action

let increaseCounter = document.querySelectorAll('.increase-count');

let decreaseCounter = document.querySelectorAll('.decrease-count');

for (let i = 0; i < increaseCounter.length; i++) {
    increaseCounter[i].addEventListener('click', (e) => {

        let itemCount = Number(e.target.previousElementSibling.innerText);

        let singleItemPrice = Number(e.target.parentElement.previousElementSibling.lastElementChild.innerText);

        totalOrderPrice += (singleItemPrice);

        document.querySelector("#subtotal").innerText = totalOrderPrice;

        e.target.previousElementSibling.innerText = ++itemCount;
        e.target.parentElement.nextElementSibling.lastElementChild.innerText = itemCount * singleItemPrice;

        orderDetails[e.target.previousElementSibling.id].orderCount = itemCount;

        localStorage.setItem('orderKey', JSON.stringify(orderDetails));
    })

}

// decrease order count action

for (let i = 0; i < decreaseCounter.length; i++) {
    decreaseCounter[i].addEventListener('click', (e) => {

        let itemCount = Number(e.target.nextElementSibling.innerText);

        if (itemCount > 1) {
            let singleItemPrice = e.target.parentElement.previousElementSibling.lastElementChild.innerText;

            totalOrderPrice -= (singleItemPrice);

            document.querySelector("#subtotal").innerText = totalOrderPrice;

            e.target.nextElementSibling.innerText = --itemCount;
            e.target.parentElement.nextElementSibling.lastElementChild.innerText = itemCount * singleItemPrice;

            orderDetails[e.target.nextElementSibling.id].orderCount = itemCount;

            localStorage.setItem('orderKey', JSON.stringify(orderDetails));
        }
    })
}

// Remove order

function removeOrder(data, index) {

    orderDetails.splice(index, 1);

    localStorage.setItem("orderKey", JSON.stringify(orderDetails));

    data.parentElement.remove();

    let itemTotalOrderPrice = Number(data.parentElement.lastElementChild.previousElementSibling.lastElementChild.innerText);

    totalOrderPrice -= (itemTotalOrderPrice);

    document.querySelector("#subtotal").innerText = totalOrderPrice;

    if (document.querySelectorAll("tr").length == 1) {
        document.querySelector('.default-message').style.display = "block";
        document.querySelector('.product-order-details').style.display = "none";
    }
}