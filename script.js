let cartCount = 0;

function addToCart(productName, amount) {
    cartCount = cartCount + amount;
    document.getElementById("cart-count").textContent = cartCount;
    showMessage(productName + " added to cart.");
}

function addNovaRunner() {
    let quantity = Number(document.getElementById("featured-quantity").value);
    addToCart("Nova Runner", quantity);
}

function showMessage(text) {
    let message = document.getElementById("cart-message");
    message.textContent = text;
    message.classList.add("visible");
    setTimeout(hideMessage, 2500);
}

function hideMessage() {
    document.getElementById("cart-message").classList.remove("visible");
}
