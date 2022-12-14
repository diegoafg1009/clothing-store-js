class Product{
    constructor(id, name, price, genre, brand, img, stock, type, featured, forKids, onSale){
        this.id = id
        this.name = name
        this.price = price
        this.genre = genre
        this.brand = brand
        this.img = img
        this.stock = stock
        this.type = type
        this.featured = featured
        this.forKids = forKids
        this.onSale = onSale
    }

    render(row){
        const divProducts = document.querySelector(".productsContainer")
        let divProduct = document.createElement("div")
        divProduct.classList.add("product")
        divProduct.setAttribute("id", "row"+row)
        divProduct.innerHTML = ` <div class="product__image">
                                    <img src="../assets/img/${this.img}" alt="${this.name}">
                                    <div class="product__overlay">
                                    <button class="product__button">Agregar a Carrito</button>
                                    </div>
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

export {Product}