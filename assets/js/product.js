class Product{
    constructor(id, name, price, genre, brand, img, stock, featured){
        this.id = id
        this.name = name
        this.price = price
        this.genre = genre
        this.brand = brand
        this.img = img
        this.stock = stock
        this.featured = featured
    }

    render(row){
        const divProducts = document.querySelector(".productsContainer")
        let divProduct = document.createElement("div")
        divProduct.classList.add("product")
        divProduct.setAttribute("id", "row"+row)

        divProduct.innerHTML = ` <div class="product__image">
                                    <img src="assets/img/${this.img}" alt="${this.name}">
                                </div>
                                <div class="product__content">
                                    <div class="product__Title">
                                        <span>${this.name}</span>
                                    </div>
                                    <div class="product__brand">
                                        <span>${this.brand}</span>
                                    </div>
                                    <div class="product__price">
                                        <span>S/. ${this.price}</span>
                                    </div>
                                </div> `
        divProducts.appendChild(divProduct)
    }
}

