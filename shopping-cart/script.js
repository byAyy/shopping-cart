function redBtn(heart) {
    heart.classList.add('redBtn')
}

function blackBtn(b) {
    b.classList.add('blackBtn')
}



function increase(btn) {
    var btnId = btn.parentNode.getAttribute('id');
    var product = btnId.substring(btnId.indexOf("-")+1);
    const quantity = document.getElementById('quantity-' + product);
    var value = quantity.value;
    value++
    quantity.setAttribute('value', value);
    calc()
}

function decrease(btn) {
    var btnId = btn.parentNode.getAttribute('id');
    var product = btnId.substring(btnId.indexOf("-")+1);
    const quantity = document.getElementById('quantity-' + product);
    var value = quantity.value;
    value--
    if(value >= 0) {
        quantity.setAttribute('value', value);
    }
    calc()
}


function calc() {
    var price1 = document.getElementById('price-1').innerText;
    var price2 = document.getElementById('price-2').innerText;
    var price3 = document.getElementById('price-3').innerText;

    const quantity1 = document.getElementById('quantity-1').value;
    const quantity2 = document.getElementById('quantity-2').value;
    const quantity3 = document.getElementById('quantity-3').value;

    var total = (quantity1 * price1) + (quantity2 * price2) + (quantity3 * price3);

    document.getElementById('total').setAttribute('value', total + " BD");
}