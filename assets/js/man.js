import { SideBar } from "./classes/sideBar.js";
import { Filter } from "./classes/filter.js";
import { Product } from "./classes/product.js";

async function loadMaleProducts() {
    let products = []
    const response = await fetch('/assets/products.json')
    const data = await response.json();
    await data.forEach(product => {
            if ((product["genre"] === "U" || product["genre"] === "M") && product["forKids"] === false)
            products.push(new Product(product["id"], product["name"], product["price"], product["genre"], product["brand"], product["img"], product["stock"], product["type"], product["featured"], product["forKids"], product["onSale"]))
    })
    return products
}

async function init() {
    const products = await loadMaleProducts()
    const sideBar = new SideBar(products) 
    sideBar.renderItems(products)
    sideBar.showSubMenu()
    const filter = new Filter(products)
    filter.init()
}

window.addEventListener('DOMContentLoaded', init);