import productlist1 from './ProductData/productlist1.js';
import productlist2 from './ProductData/productlist2.js';
import productlist3 from './ProductData/productlist3.js';
import productlist4 from './ProductData/productlist4.js';
import productlist5 from './ProductData/productlist5.js';
import productlist6 from './ProductData/productlist6.js';
import productlist7 from './ProductData/productlist7.js';

// product list 1
productlist1.map((e) => {

    let div = document.createElement('div');
    div.classList.add("product-item");

    let item = `<div><img src= ${e.image_url} alt=""></div>
    <div>
        <h2 class="title">${e.title}</h2>
        <h2 class="price">AED <span>${e.price}</span></h2>
        <div class="button-collection">
            <button class= "decrease-count">-</button> &nbsp;
            <span id= "count">1</span> &nbsp;
            <button class= "increase-count">+</button> &nbsp; &nbsp;
            <button class="place-order"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
        <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="taste"> <span style="font-weight: bold;">Taste</span>: <span>${e.taste}</span>
        </div>
    </div>`

    div.innerHTML = item;
    document.getElementById('product-list1').append(div);
})


// product list 2

productlist2.map((e) => {

    let div = document.createElement('div');
    div.classList.add("product-item");

    let item = `<div><img src= ${e.image_url} alt=""></div>
    <div>
        <h2 class="title">${e.title}</h2>
        <h2 class="price">AED <span>${e.price}</span></h2>
        <div class="button-collection">
            <button class= "decrease-count">-</button> &nbsp;
            <span id= "count">1</span> &nbsp;
            <button class= "increase-count">+</button> &nbsp; &nbsp;
            <button class="place-order"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
        <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="taste"> <span style="font-weight: bold;">Taste</span>: <span>${e.taste}</span>
        </div>
    </div>`

    div.innerHTML = item;
    document.getElementById('product-list2').append(div);
})

//product list 3

productlist3.map((e) => {

    let div = document.createElement('div');
    div.classList.add("product-item");

    let item = `<div><img src= ${e.image_url} alt=""></div>
    <div>
        <h2 class="title">${e.title}</h2>
        <h2 class="price">AED <span>${e.price}</span></h2>
        <div class="button-collection">
            <button class= "decrease-count">-</button> &nbsp;
            <span id= "count">1</span> &nbsp;
            <button class= "increase-count">+</button> &nbsp; &nbsp;
            <button class="place-order"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
        <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="taste"> <span style="font-weight: bold;">Taste</span>: <span>${e.taste}</span>
        </div>
    </div>`

    div.innerHTML = item;
    document.getElementById('product-list3').append(div);
})

// product list 4

productlist4.map((e) => {

    let div = document.createElement('div');
    div.classList.add("product-item");

    let item = `<div><img src= ${e.image_url} alt=""></div>
    <div>
        <h2 class="title">${e.title}</h2>
        <h2 class="price">AED <span>${e.price}</span></h2>
        <div class="button-collection">
            <button class= "decrease-count">-</button> &nbsp;
            <span id= "count">1</span> &nbsp;
            <button class= "increase-count">+</button> &nbsp; &nbsp;
            <button class="place-order"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
        <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="taste"> <span style="font-weight: bold;">Taste</span>: <span>${e.taste}</span>
        </div>
    </div>`

    div.innerHTML = item;
    document.getElementById('product-list4').append(div);
})

// product list 5

productlist5.map((e) => {

    let div = document.createElement('div');
    div.classList.add("product-item");

    let item = `<div><img src= ${e.image_url} alt=""></div>
    <div>
        <h2 class="title">${e.title}</h2>
        <h2 class="price">AED <span>${e.price}</span></h2>
        <div class="button-collection">
            <button class= "decrease-count">-</button> &nbsp;
            <span id= "count">1</span> &nbsp;
            <button class= "increase-count">+</button> &nbsp; &nbsp;
            <button class="place-order"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
        <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="taste"> <span style="font-weight: bold;">Taste</span>: <span>${e.taste}</span>
        </div>
    </div>`

    div.innerHTML = item;
    document.getElementById('product-list5').append(div);
})

// product list 6

productlist6.map((e) => {

    let div = document.createElement('div');
    div.classList.add("product-item");

    let item = `<div><img src= ${e.image_url} alt=""></div>
    <div>
        <h2 class="title">${e.title}</h2>
        <h2 class="price">AED <span>${e.price}</span></h2>
        <div class="button-collection">
            <button class= "decrease-count">-</button> &nbsp;
            <span id= "count">1</span> &nbsp;
            <button class= "increase-count">+</button> &nbsp; &nbsp;
            <button class="place-order"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
        <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="taste"> <span style="font-weight: bold;">Taste</span>: <span>${e.taste}</span>
        </div>
    </div>`

    div.innerHTML = item;
    document.getElementById('product-list6').append(div);
})

// product list 7

productlist7.map((e) => {

    let div = document.createElement('div');
    div.classList.add("product-item");

    let item = `<div><img src= ${e.image_url} alt=""></div>
    <div>
        <h2 class="title">${e.title}</h2>
        <h2 class="price">AED <span>${e.price}</span></h2>
        <div class="button-collection">
            <button class= "decrease-count">-</button> &nbsp;
            <span id= "count">1</span> &nbsp;
            <button class= "increase-count">+</button> &nbsp; &nbsp;
            <button class="place-order"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
        <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="taste"> <span style="font-weight: bold;">Taste</span>: <span>${e.taste}</span>
        </div>
    </div>`

    div.innerHTML = item;
    document.getElementById('product-list7').append(div);
})

// counter item


let increaseCounter = document.querySelectorAll('.increase-count');

let decreaseCounter = document.querySelectorAll('.decrease-count');

for (let i = 0; i < increaseCounter.length; i++) {
    increaseCounter[i].addEventListener('click', (e) => {

        let tempCount = Number(e.target.previousElementSibling.innerText);

        e.target.previousElementSibling.innerText = ++tempCount;
    })

}

for (let i = 0; i < decreaseCounter.length; i++) {
    decreaseCounter[i].addEventListener('click', (e) => {

        let tempCount = Number(e.target.nextElementSibling.innerText);

        if (tempCount > 1) {
            e.target.nextElementSibling.innerText = --tempCount;
        }
    })

}


// order button action 


function storeOrder(order) {

    let orderDetails = JSON.parse(localStorage.getItem("orderKey")) || [];

    if (orderDetails.length == 0) {

        orderDetails.push(order);

        localStorage.setItem('orderKey', JSON.stringify(orderDetails));
    }
    else {

        let duplicateOrderIndex = orderDetails.findIndex((e) => {
            return order.title == e.title;
        })

        if (duplicateOrderIndex > -1) {
            orderDetails[duplicateOrderIndex] = order;
        }
        else {
            orderDetails.push(order);
        }

        localStorage.setItem('orderKey', JSON.stringify(orderDetails));
    }


}


let orderButton = document.getElementsByClassName('place-order')

for (let i = 0; i < orderButton.length; i++) {

    orderButton[i].addEventListener('click', (e) => {

        let orderInfo = {
            url: e.target.parentElement.parentElement.previousElementSibling.firstElementChild.src,
            title: e.target.parentElement.parentElement.firstElementChild.innerText,
            price: e.target.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.innerText,
            orderCount: e.target.previousElementSibling.previousElementSibling.innerText
        }
        storeOrder(orderInfo);
        popUpShow(orderInfo);

    })
}

// popup show action

function popUpShow(data) {

    document.querySelector("#page-view").style.opacity = "0.4"

    let img = document.querySelector('.popup-col-1 img');

    img.scr = data.url;

    let title = document.querySelector('.popup-col-2 p');

    title.innerText = data.title;

    let price = document.querySelector('.popup-col-2 #price span');

    price.innerText = data.price;

    let qty = document.querySelector('.popup-col-2 #qty span');

    qty.innerText = data.orderCount;

    document.querySelector(".order-popup").style.visibility = "visible";

}

// popup close action

document.querySelector("#close-popup").addEventListener('click', () => {

    document.querySelector(".order-popup").style.visibility = "hidden";
    document.querySelector("#page-view").style.opacity = ""
})

document.querySelector(".back-to-page").addEventListener('click', () => {

    document.querySelector(".order-popup").style.visibility = "hidden";
    document.querySelector("#page-view").style.opacity = ""
})
