// All Variant Buttons 
const variantBtn = document.getElementsByClassName('btn-outline-secondary')
for (const singleVariantBtn of variantBtn) {
    singleVariantBtn.addEventListener('click', function () {
        const varian = singleVariantBtn.id
        const varianCatagory = varian.split('-')[1]
        const varianValue = parseInt(singleVariantBtn.value)
        extraProduct(varianCatagory, varianValue)

    })
}

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