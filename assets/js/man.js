function showSubMenu() {
    const menu = document.querySelector(".sideBar__navMenu")
    menu.addEventListener("click", (e) => {
        if (e.target.classList.contains("sideBar__menuTitle")) {
            // let menuTitle = e.target
            let subMenu = e.target.parentElement.lastElementChild
            subMenu.classList.remove("sideBar__subMenu--collapse")
            subMenu.classList.toggle("sideBar__subMenu--show")
            if (!subMenu.classList.contains("sideBar__subMenu--show"))
                subMenu.classList.add("sideBar__subMenu--collapse")
        }
    })
}

async function loadMaleProducts() {
    let products = []
    const response = await fetch('/assets/products.json')
    data = await response.json();
    await data.forEach(product => {
            if ((product["genre"] === "U" || product["genre"] === "M") && product["forKids"] === false)
            products.push(new Product(product["id"], product["name"], product["price"], product["genre"], product["brand"], product["img"], product["stock"], product["featured"], product["forKids"], product["onSale"]))

    })
    return products
}

function displayProducts(products) {
    const divProducts = document.querySelector(".productsContainer")
    divProducts.innerHTML = ""
    i = 1
    products.forEach(product => {
        product.render(i)
        i++
    });
}

function noFilters(products) {
    const div = document.querySelector(".sideBar__navMenu")
    div.addEventListener("click", function (e) {
        if (e.target.textContent === "Todos") {
            displayProducts(products)
        }
    })
}

function filterProductsBy(products, filter) {
    let filteredProducts = []
    const brands = document.querySelector(`#${filter}Menu .sideBar__subMenu`)
    brands.addEventListener("click", function (e) {
        if (e.target.classList.contains("sideBar__menuItem")) {
            filteredProducts = products.filter(
                (product) => product[filter] === e.target.textContent
            )
            displayProducts(filteredProducts)
        }
    })
}


async function init() {
    const products = await loadMaleProducts()
    displayProducts(products)
    noFilters(products)
    filterProductsBy(products, "brand")
    showSubMenu()
};

window.addEventListener('DOMContentLoaded', init);