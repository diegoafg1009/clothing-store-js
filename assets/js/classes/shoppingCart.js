import { PurchasedProduct } from "./purchasedProduct.js";

class ShoppingCart {
    constructor(purchasedProducts) {
        this.purchasedProducts = purchasedProducts
    }

    displayPurchases() {
        const divPurchases = document.querySelector(".purchasesContainer")
        divPurchases.innerHTML = '';
        let i = 1
        this.purchasedProducts.forEach(purchasedProduct => {
            purchasedProduct = new PurchasedProduct(purchasedProduct["name"], purchasedProduct["price"], purchasedProduct["brand"], purchasedProduct["img"])
            purchasedProduct.render(i)
            i++
        });
    }

    addToCart() {
        const dp = () => this.displayPurchases()
        let p = this.purchasedProducts
        const products = document.querySelectorAll(".product")
        products.forEach(product => {
            const button = product.querySelector(".product__button")
            button.addEventListener("click", function (e) {
                let name = product.querySelector(".product__Title span").textContent
                if (p.some(key => key.name === name)) {
                    let position = p.findIndex(obj =>{
                        return obj.name === name
                    })
                    p[position].quantity++
                    this.purchasedProducts = p
                    localStorage.setItem("purchasedProducts", JSON.stringify(this.purchasedProducts))
                } else {
                    let price = product.querySelector(".product__price").textContent
                    price = parseInt(price.replace(/\D/g, ''))
                    let brand = product.querySelector(".product__brand span").textContent
                    let img = product.querySelector(".product__image img").src
                    p.push(new PurchasedProduct(name, price, brand, img, 1))
                    this.purchasedProducts = p
                    localStorage.setItem("purchasedProducts", JSON.stringify(this.purchasedProducts))
                }
                dp()
            })
        })
    }

    showCart(){
        let showButton = document.querySelector(".cartIcon")
        let closeButton = document.querySelector(".shoppingCart__closeButton")
        let cart = document.querySelector(".shoppingCart")
        showButton.addEventListener("click", ()=>{
            cart.classList.toggle("shoppingCart--show")
            cart.classList.toggle("shoppingCart--hide")
        })
        closeButton.addEventListener("click", ()=>{
            cart.classList.toggle("shoppingCart--show")
            cart.classList.toggle("shoppingCart--hide")
        })
    }
}

export { ShoppingCart }