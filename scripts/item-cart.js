
let total = 0;

let purchaseButton = document.getElementById('purchase-btn');
purchaseButton.disabled = true;

let applyButton = document.getElementById('apply-btn');
applyButton.disabled = true;

function selectItemByClick(target) {

    const itemName = target.childNodes[3].childNodes[3].innerText;
    const selectedItemsContainer = document.getElementById('selected-items');
    const p = document.createElement('p');
    const count = selectedItemsContainer.childElementCount;
    p.classList.add('my-3');
    p.classList.add('font-semibold');
    p.classList.add('text-lg');
    p.innerHTML = `${count + 1}. ${itemName}`;
    selectedItemsContainer.appendChild(p);


    const priceText = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const price = parseFloat(priceText);
    total = parseInt(total) + price;
    const totalPurchase = total.toFixed(2);
    document.getElementById('total-price').innerText = totalPurchase;
    document.getElementById('total').innerText = totalPurchase;

    // purchase button condition
    if (total > 0) {
        purchaseButton.disabled = false;
    }

    // apply button condition
    if (total >= 200) {
        applyButton.disabled = false;
    }
}

const discountTextValue = document.getElementById('discount').innerText.split(" ")[0];
const previousDiscountValue = parseFloat(discountTextValue);

const totalTextValue = document.getElementById('total').innerText.split(" ")[0];
totalTextValue.innerText = total;


// coupon button condition

document.getElementById('apply-btn').addEventListener('click', function () {

    const inputFieldValue = document.getElementById('coupon-field');
    const couponCode = inputFieldValue.value;

    const discountCalculation = 0.2 * total;
    const discountTotal = parseFloat(discountCalculation) + previousDiscountValue
    const discount = discountTotal.toFixed(2);

    const totalCalculation = total - discount
    const totalAmount = totalCalculation.toFixed(2);

    inputFieldValue.value = '';

    if (couponCode === "SELL200") {
        document.getElementById('discount').innerText = discount;
        document.getElementById('total').innerText = totalAmount;
    }
    else {
        alert('Please try again with a valid coupon code')
    }

})

document.getElementById('modal-btn').addEventListener('click', function () {
    console.log("hello modal tell me how to clear shopping cart")
})