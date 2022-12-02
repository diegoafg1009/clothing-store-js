import { Product } from "./product.js";

class Filter {
    constructor(products) {
        this.products = products
    }
    
    static displayProducts(products) {
        const divProducts = document.querySelector(".productsContainer")
        divProducts.innerHTML = '';
        let i = 1
        products.forEach(product => {
            product.render(i)
            i++
        });
    }
    

    all() {
        const products = this.products
        const dp = x => this.constructor.displayProducts(x)
        const div = document.querySelector(".sideBar__navMenu")
        div.addEventListener("click", function (e) {
            if (e.target.textContent === "Todos") {
                dp(products)
            }
        })
    }
    
    byName(){
        let products = this.products
        const dp = x => this.constructor.displayProducts(x)
        const nameFilter = document.querySelector(".sideBar__searchInput")
        nameFilter.addEventListener("input", (e) => {
            let filteredProducts =[]
            filteredProducts = products.filter(product => {
                console.log("Nombre del producto" + product["name"])
                console.log("Input: " + e.target.value)
                console.log(product["name"].includes(e.target.value))
                return product["name"].toLowerCase().includes(e.target.value.toLowerCase())
            })
            dp(filteredProducts)
        })
    }

    byKey() {
        let products = this.products
        const dp = x => this.constructor.displayProducts(x)
        const subMenuContainers = document.querySelectorAll(`[id$="Menu"]`)
        subMenuContainers.forEach(subMenuContainer => {
            let filteredProducts = []
            let key = subMenuContainer.id.replace("Menu","")
            let subMenu = subMenuContainer.lastElementChild
            subMenu.addEventListener("click", function (e){
                if (e.target.classList.contains("sideBar__menuItem")) {
                    filteredProducts = products.filter(
                        (product) => product[key] === e.target.textContent
                    )
                    dp(filteredProducts)
                }
            })
        })
    }

    byPrice(){
        let priceMin
        let priceMax
        let filteredProducts = []
        let products = this.products
        const dp = x => this.constructor.displayProducts(x)
        const priceFilter = document.querySelector("#priceFilter")
        const button = document.querySelector("#priceButton")
        priceFilter.addEventListener("input", function(e){
            if(e.target.id === "priceMin"){
                priceMin = e.target.value
            }
            if(e.target.id === "priceMax"){
                priceMax = e.target.value
            }
            button.addEventListener("click", function(e){
                if(priceMin && priceMax){
                    filteredProducts = products.filter(
                        (product) => product["price"] >= priceMin && product["price"] <= priceMax
                    )
                }else if(!priceMax){
                    filteredProducts = products.filter(
                        (product) => product["price"] >= priceMin
                    )
                }else if(!priceMin){
                    filteredProducts = products.filter(
                        (product) => product["price"] <= priceMax
                    )
                }
                dp(filteredProducts)
            })
        })
    }

    init(){
        this.constructor.displayProducts(this.products)
        this.all()
        this.byKey()
        this.byName()
        this.byPrice()
    }
}

export {Filter}