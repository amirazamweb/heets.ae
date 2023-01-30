let orderDetails = JSON.parse(localStorage.getItem('orderKey'));

let totalPrice = 0;

let uniqueOrderNumber = orderDetails.length;

for (let i = 0; i < uniqueOrderNumber; i++) {
    totalPrice += (orderDetails[i].price * orderDetails[i].orderCount);
}

function header() {
    return `<div class="header-container">
    <!-- header row1 -->
    <div class="header-row1">
        <div class="logo"><img src="https://heets.ae/assets/images/logo-heets-dubai.svg?f791951f" alt=""></div>
        <div class="address-email-cart">
            <div class="address-email"><i class="fa-solid fa-location-dot"></i>Al Quoz 2, Dubai, United Arab
                Emirates</div>
            <div class="address-email"><i class="fa-regular fa-envelope"></i>sales@heets.ae</div>
            <div class="cart"><button><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;<span>${uniqueOrderNumber}</span> Items,
                    <span>${totalPrice}</span> AED</button>
            </div>
        </div>
    </div>

    <!-- header row2 -->
    <div class="menu">
        <div class="menu-item"><a href="/">HOME</a></div>
        <div class="menu-item"><a href="#">IQOS 3 Multi</a></div>
        <div class="menu-item"><a href="#">IQOS Lil Solid</a></div>
        <div class="menu-item"><a href="#">IQOS ILUMA</a></div>
        <div class="menu-item"><a href="#">IQOS Heets</a></div>
        <div class="menu-item"><a href="#">IQOS Accessories</a></div>
        <div class="menu-item"><a href="#">FAQ</a></div>
    </div>

</div>`
}

export default header;