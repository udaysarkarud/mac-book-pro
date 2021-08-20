// memory
document.getElementById('8gb-memory').addEventListener('click', function () {
    const extraMemory = document.getElementById('cost-memory')
    extraMemory.innerText = 0
    totalPrice()
})

document.getElementById('16gb-memory').addEventListener('click', function () {
    const extraMemory = document.getElementById('cost-memory')
    extraMemory.innerText = 180
    totalPrice()
})