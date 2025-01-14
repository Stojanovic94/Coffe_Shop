// Toggle Directions
document.getElementById("toggleButton").onclick = function () {
    const directions = document.getElementById("directions");
    if (directions.style.display === "none") {
        directions.style.display = "block";
    } else {
        directions.style.display = "none";
    }
};

// Change Quantity
function changeQuantity(id, amount) {
    const input = document.getElementById(id);
    let currentValue = parseInt(input.value);
    if (currentValue + amount >= 0) {
        input.value = currentValue + amount;
    }
    calculatePrice();
}

// Calculate Price
function calculatePrice() {
    const tallCups = parseInt(document.getElementById("tallCups").value) || 0;
    const grandeCups = parseInt(document.getElementById("grandeCups").value) || 0;
    const ventiCups = parseInt(document.getElementById("ventiCups").value) || 0;

    const price = (tallCups * 3.99) + (grandeCups * 4.50) + (ventiCups * 5.99);
    const taxRate = price * 0.20;
    const totalAmount = price + taxRate;

    document.getElementById("price").value = price.toFixed(2);
    document.getElementById("taxRate").value = taxRate.toFixed(2);
    document.getElementById("totalAmount").value = totalAmount.toFixed(2);
}

// Clear Fields
function clearFields() {
    document.getElementById("tallCups").value = 0;
    document.getElementById("grandeCups").value = 0;
    document.getElementById("ventiCups").value = 0;
    document.getElementById("price").value = '';
    document.getElementById("taxRate").value = '';
    document.getElementById("totalAmount").value = '';
    document.getElementById("orderSummary").textContent = '';
}

// Complete Order
function completeOrder() {
    const tallCups = parseInt(document.getElementById("tallCups").value) || 0;
    const grandeCups = parseInt(document.getElementById("grandeCups").value) || 0;
    const ventiCups = parseInt(document.getElementById("ventiCups").value) || 0;
    const totalAmount = document.getElementById("totalAmount").value || 0;

    const totalCups = tallCups + grandeCups + ventiCups;
    document.getElementById("orderSummary").textContent = `You have ordered ${totalCups} cups. Total Amount: $${totalAmount}`;
    
    // Clear all fields except Total Amount
    clearFields();
    document.getElementById("totalAmount").value = totalAmount;
}
