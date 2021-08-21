// Buttons for memory
document.getElementById('8gb-memory').addEventListener('click', function () {
    extraProduct('memory', 0)
})

document.getElementById('16gb-memory').addEventListener('click', function () {
    extraProduct('memory', 180)
})


// Buttons for storage
document.getElementById('256gb-storage').addEventListener('click', function () {
    extraProduct('storage', 0)
})

document.getElementById('512gb-storage').addEventListener('click', function () {
    extraProduct('storage', 100)
})

document.getElementById('1tb-storage').addEventListener('click', function () {
    extraProduct('storage', 180)
})

// Buttons for delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    extraProduct('delivery', 0)
})

document.getElementById('charged-delivery').addEventListener('click', function () {
    extraProduct('delivery', 20)
})

// Extra variant Price
function extraProduct(category, price) {
    const extraProductPrice = document.getElementById('cost-' + category)
    extraProductPrice.innerText = price
    totalAmount()
}

// total costing section
function totalAmount() {
    const basePrice = parseInt(document.getElementById('base-price').innerText)
    const extraMemory = parseInt(document.getElementById('cost-memory').innerText)
    const extraStorage = parseInt(document.getElementById('cost-storage').innerText)
    const extraDeliver = parseInt(document.getElementById('cost-delivery').innerText)
    const totalPrice = document.getElementById('total-price')
    const grandTotal = document.getElementById('grand-total')
    totalPrice.innerText = basePrice + extraMemory + extraStorage + extraDeliver
    grandTotal.innerText = totalPrice.innerText
}

// promo code section
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input')
    if (promoInput.value == 'stevekaku') {
        const getTotalCost = document.getElementById('total-price')
        const getGrandTotal = document.getElementById('grand-total')

        const promoAmount = (parseInt(getTotalCost.innerText) * 20) / 100
        getGrandTotal.innerText = parseInt(getTotalCost.innerText) - promoAmount
    }
    promoInput.value = ''

})
