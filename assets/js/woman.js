async function loadFemaleProducts () { 
    let products = []
    const response = await fetch('/assets/products.json')
    data = await response.json();
    await data.forEach(product => {
        if ((product["genre"] === "U" || product["genre"] === "F") && product["forKids"] === false)
            products.push(new Product(product["id"], product["name"], product["price"], product["genre"], product["brand"], product["img"], product["stock"], product["type"], product["featured"], product["forKids"], product["onSale"]))
    })
    return products
}

function displayProducts(products){
    const divProducts = document.querySelector(".productsContainer")
    divProducts.innerHTML = ""
    i = 1
    products.forEach(product => {
        product.render(i)
        i++
    });
}

function noFilters(products){
    const div = document.querySelector(".sideBar__navMenu")
    div.addEventListener("click", function(e) {
        if(e.target.textContent === "Todos"){
            displayProducts(products)
        }
    })
}

function filterProductsBy(products, filter){
    let filteredProducts = []
    const brands = document.querySelector(`#${filter}Menu .sideBar__subMenu`)
    brands.addEventListener("click", function(e){
        if(e.target.classList.contains("sideBar__menuItem")){
            filteredProducts = products.filter(
                (product) => product[filter] ===  e.target.textContent
           )
            displayProducts(filteredProducts)
        }
    })
}


async function init() {
    const products = await loadFemaleProducts()
    const sideBar = new SideBar(products) 
    sideBar.renderItems(products)
    sideBar.showSubMenu()
    displayProducts(products)
    noFilters(products)
    filterProductsBy(products, "brand")
};

window.addEventListener('DOMContentLoaded', init);