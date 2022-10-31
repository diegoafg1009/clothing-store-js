async function loadMaleProducts () { 
    let products = []
    const response = await fetch('./assets/products.json')
    data = await response.json();
    await data.forEach(element => {
        if(element["genre"]==="U" || element["genre"] === "M")
            products.push(new Product(element["id"], element["name"], element["price"], element["genre"], element["brand"], element["img"], element["stock"], element["featured"]))
    })
    return products
}

function displayProducts(products){
    i = 1
    products.forEach(element => {
        element.render(i)
    });
}

async function init() {
    const products = await loadMaleProducts()
    console.log(products)
    displayProducts(products)
};

document.addEventListener('DOMContentLoaded', init);