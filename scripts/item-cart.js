
let total = 0;

function selectItemByClick(target){

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

    console.log(totalPurchase);

    function buttonStyle(){
        const applyButton = document.getElementById('');
    }


}


