// console.log('okey');
const memoryCost = document.getElementById('memory-total');
const storageCost = document.getElementById('storage-total');
const deliverCost = document.getElementById('delivery-total');
const bestPrice = document.getElementById('bestPrice');
const price = document.getElementById('totalPrice');

document.getElementById('memory-type-8GB').addEventListener('click', function () {
    memoryCost.innerText = "0";
    updatePrice();
})
document.getElementById('memory-type-16Gb').addEventListener('click', function () {
    memoryCost.innerText = "180";
    updatePrice();
})
document.getElementById('storage-SSD-256').addEventListener('click', function () {
    storageCost.innerText = "0";
    updatePrice();
})
document.getElementById('storage-SSD-512').addEventListener('click', function () {
    storageCost.innerText = "100";
    updatePrice();
})
document.getElementById('storage-SSD-1T').addEventListener('click', function () {
    storageCost.innerText = "180";
    updatePrice();
})
document.getElementById('deliveryFree').addEventListener('click', function () {
    deliverCost.innerText = "0";
    updatePrice();
})
document.getElementById('deliveryCost').addEventListener('click', function () {
    deliverCost.innerText = "20";
    updatePrice();
})

// updated price
bestPrice.innerText = "1299";
function updatePrice() {
    const productPrice = Number(bestPrice.innerText);
    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const delivaryPrice = Number(deliverCost.innerText);
    const totalPrice = productPrice + memoryPrice + storagePrice + delivaryPrice;
    price.innerText = totalPrice;
    promoCode();
}
// promo code
const promoCodeInput = document.getElementById('promo-input');
const finalPrice = document.getElementById('finalPrice');
function promoCode() {
    if (promoCodeInput.value.toLowerCase() == 'stevekaku') {
        const promoCodeNumber = parseFloat(price.innerText * 20) / 100;
        // console.log(promoCodeNumber);
        finalPrice.innerText = parseFloat(price.innerText) - promoCodeNumber;
        // console.log(finalPrice);
    } else {
        finalPrice.innerText = price.innerText;
        // console.log(finalPrice);
    }
    promoCodeInput.value = '';
}
document.getElementById('promo-btn').addEventListener('click', function () {
    promoCode();
})
