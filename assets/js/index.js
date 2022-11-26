import { Filter } from "./classes/filter.js"
import { Product } from "./classes/product.js"
import { PurchasedProduct } from "./classes/purchasedProduct.js"
import { ShoppingCart } from "./classes/shoppingCart.js"

function carousel(){
    const productContainers = [...document.querySelectorAll(".productsContainer")];
    const preBtn = [...document.querySelectorAll(".arrowBtn--left")];
    const nxtBtn = [...document.querySelectorAll(".arrowBtn--right")];

    productContainers.forEach((element, i) => {
        let containerDimensions = element.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            element.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            element.scrollLeft -= containerWidth;
        })
    })
}

async function loadFeaturedProducts() {
    let products = []
    const response = await fetch('/assets/products.json')
    const data = await response.json();
    await data.forEach(element => {
            if (element["featured"] === true)
            products.push(new Product(element["id"], element["name"], element["price"], element["genre"], element["brand"], element["img"], element["stock"], element["featured"], element["forKids"], element["onSale"]))

    })
    return products
}

async function init() {
    let purchasedProducts = JSON.parse(localStorage.getItem('purchasedProducts')) || [];
    purchasedProducts = purchasedProducts.map(p => {
        return new PurchasedProduct(p["name"], p["price"], p["brand"], p["img"], p["quantity"])
    })
    const products = await loadFeaturedProducts()
    Filter.displayProducts(products)
    carousel()
    const cart = new ShoppingCart(purchasedProducts)
    cart.addToCart()
    cart.showCart()
    cart.removeFromCart()
    cart.displayPurchases()
}

window.addEventListener('DOMContentLoaded', init)