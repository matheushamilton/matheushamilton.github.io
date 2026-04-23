const products = [
    {
        name: "Tênis Minimal",
        price: 199.90,
        image: "https://via.placeholder.com/300"
    },
    {
        name: "Relógio Moderno",
        price: 149.90,
        image: "https://via.placeholder.com/300"
    },
    {
        name: "Mochila Clean",
        price: 129.90,
        image: "https://via.placeholder.com/300"
    },
    {
        name: "Fone Bluetooth",
        price: 89.90,
        image: "https://via.placeholder.com/300"
    }
];

let cartCount = 0;

const productsContainer = document.getElementById("products");
const cartCounter = document.getElementById("cart-count");

function renderProducts() {
    products.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}">
            <h2>${product.name}</h2>
            <p>Produto incrível e minimalista</p>
            <div class="price">R$ ${product.price.toFixed(2)}</div>
            <button onclick="addToCart(${index})">Adicionar</button>
        `;

        productsContainer.appendChild(card);
    });
}

function addToCart(index) {
    cartCount++;
    cartCounter.innerText = cartCount;

    alert(`${products[index].name} adicionado ao carrinho!`);
}

renderProducts();