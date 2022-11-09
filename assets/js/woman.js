async function loadMaleProducts () { 
    let products = []
    const response = await fetch('/assets/products.json')
    data = await response.json();
    await data.forEach(product => {
        if(product["genre"]==="U" || product["genre"] === "F")
            products.push(new Product(product["id"], product["name"], product["price"], product["genre"], product["brand"], product["img"], product["stock"], product["featured"]))
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
        let element = e.target
        if(element.textContent === "Todos"){
            displayProducts(products)
        }
    })
}

function filterProductsBy(products, filter){
    let filteredProducts = []
    brands = document.querySelector(`#${filter}Menu .sideBar__subMenu`)
    brands.addEventListener("click", function(e){
        filteredProducts = products.filter(
             (product) => product[filter] ===  e.target.textContent
        )
    displayProducts(filteredProducts)
    })
}


async function init() {
    const products = await loadMaleProducts()
    displayProducts(products)
    noFilters(products)
    filterProductsBy(products, "brand")
};

window.addEventListener('DOMContentLoaded', init);