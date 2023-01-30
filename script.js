let carosalItem = document.getElementsByClassName('carosal-item');

let carosalCount = 0;

let id;

function carosalDisplay() {

    for (let i = 0; i < carosalItem.length; i++) {
        carosalItem[i].style.display = 'none'
    }

    if (carosalCount == carosalItem.length) {
        carosalCount = 0;
    }

    carosalItem[carosalCount++].style.display = 'block';

    id = setTimeout(carosalDisplay, 5000)

}

carosalDisplay();


// forawrd and backward action

document.getElementById('backward').addEventListener('click', () => {
    clearTimeout(id);
    carosalCount -= 2;
    if (carosalCount == -1) {
        carosalCount = 4;
    }

    carosalDisplay();
})

document.getElementById('forward').addEventListener('click', () => {
    clearTimeout(id);
    carosalDisplay();
})

