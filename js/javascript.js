console.log('okey');
// get product price form input value
function changeInputValue(product, price) {
    const memoryCostInput = document.getElementById(product + '-total');
    memoryCostInput.innerText = price;
    const totalPriceInput = document.getElementById('bestPrice');
    const totalPrice = parseInt(totalPriceInput.innerText);
    if (price == 0) {

    }
}
document.getElementById('memory-type-8GB').addEventListener('click', function () {
    changeInputValue('memory', 0);
})
document.getElementById('memory-type-16Gb').addEventListener('click', function () {
    changeInputValue('memory', 180);
})
document.getElementById('storage-SSD-256').addEventListener('click', function () {
    changeInputValue('storage', 0);
})
document.getElementById('storage-SSD-512').addEventListener('click', function () {
    changeInputValue('storage', 100);
})
document.getElementById('storage-SSD-1T').addEventListener('click', function () {
    changeInputValue('storage', 180);
})
document.getElementById('deliveryFree').addEventListener('click', function () {
    changeInputValue('delivery', 0);
})
document.getElementById('deliveryCost').addEventListener('click', function () {
    changeInputValue('delivery', 20);
})