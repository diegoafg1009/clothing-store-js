class Filter {
    constructor(products) {
        this.products = products
    }
    
    displayProducts(products) {
        const divProducts = document.querySelector(".productsContainer")
        divProducts.innerHTML = ""
        let i = 1
        products.forEach(product => {
            product.render(i)
            i++
        });
    }
    

    all() {
        const products = this.products
        const dp = x => this.displayProducts(x)
        const div = document.querySelector(".sideBar__navMenu")
        div.addEventListener("click", function (e) {
            if (e.target.textContent === "Todos") {
                dp(products)
            }
        })
    }

    byKey() {
        let products = this.products
        const dp = x => this.displayProducts(x)
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

    init(){
        this.displayProducts(this.products)
        this.all()
        this.byKey()
    }
}