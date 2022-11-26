class PurchasedProduct{
    constructor(name, price, brand, img, quantity){
        this.name = name
        this.price = price
        this.brand = brand
        this.img = img
        this.quantity = quantity
    }

    render(row){
        const divPurchases = document.querySelector(".purchasesContainer")
        let divPurchase = document.createElement("div")
        divPurchase.classList.add("purchase")
        divPurchase.setAttribute("id", "row"+row)
        divPurchase.innerHTML = ` <div class="purchase__image">
                                    <img src="${this.img}" alt="${this.name}">
                                </div>
                                <div class="purchase__info">
                                    <div class="purchase__title">
                                        <span>${this.name}</span>
                                    </div>
                                    <div class="purchase__brand">
                                        <span>${this.brand}</span>
                                    </div>
                                    <div class="purchase__price">
                                        <span>S/. ${this.price}</span>
                                    </div>
                                    <div class="purchase__quantity">
                                        <span>Cantidad: ${this.quantity}</span>
                                    </div>
                                    <button class="purchase__removeButton">Remove</button>
                                </div> `
        divPurchases.appendChild(divPurchase)
    }
}

export {PurchasedProduct}