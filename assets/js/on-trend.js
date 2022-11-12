async function loadKidsProducts() {
    let products = []
    const response = await fetch('/assets/products.json')
    data = await response.json();
    await data.forEach(product => {
        if (product["featured"] === true)
            products.push(new Product(product["id"], product["name"], product["price"], product["genre"], product["brand"], product["img"], product["stock"], product["type"], product["featured"], product["forKids"], product["onSale"]))
    })
    return products
}

async function init() {
    const products = await loadKidsProducts()
    const sideBar = new SideBar(products) 
    sideBar.renderItems(products)
    sideBar.showSubMenu()
    const filter = new Filter(products)
    filter.init()
};

window.addEventListener('DOMContentLoaded', init);