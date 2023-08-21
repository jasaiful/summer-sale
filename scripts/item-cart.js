
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



    // purchase button
    if (total > 0) {
        purchaseButton.disabled = false;
    }

    // apply button
    if (total >= 200) {
        applyButton.disabled = false;
    }
}


document.getElementById('apply-btn').addEventListener('click', function () {

    const discountTextValue = document.getElementById('discount').innerText.split(" ")[0];
    const previousDiscountValue = parseFloat(discountTextValue);
    // const discountValue = total * 20 %;


    console.log(typeof discountValue, discountValue);

    const inputFieldValue = document.getElementById('coupon-field');
    const couponCode = inputFieldValue.value;

    if (couponCode === "SELL200") {
        discountTextValue = discountValue
    }
    else {
        alert('Please try again with a valid coupon code')
    }


})