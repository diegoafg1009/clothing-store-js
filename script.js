const products = [
    {
        name: "Zapatillas OldSkool - Black/True White",
        price: 299
    },
    {
        name: "Zapatillas UltraRange Rapidweld - Black/White",
        price: 399
    },
    {
        name: "Polo Kappa Unisex Authentic Asten Blanco",
        price: 69
    },
    {
        name: "MOCHILA FJALLRAVEN  KANKEN MINI MINT GREEN",
        price: 399
    },
    {
        name: "MOCHILA HERSCHEL SUPPLY LITTLE AMERICA UNISEX BLACK",
        price: 459
    },
    {
        name: "Polo Kappa Unisex 222 Banda Coen Slim Blanco",
        price: 99
    },
    {
        name: "Zapatilla Old Skool Port royale/True white",
        price: 329
    },
    {
        name: "MOCHILA FJALLRAVEN  KANKEN MINI PASTEL LAVENDER",
        price: 399
    },
    {
        name: "MOCHILA FJALLRAVEN KANKEN UNISEX OCHRE",
        price: 459
    }
]

alert("Bienvenido al filtrador de precios de la tienda virtual")

let validate = false
let min
let max
let filteredProducts = []

while(validate === false){
    min = prompt("Ingrese el precio min: ")
    max = prompt("Ingrese el precio max: ")
    if(min < 0 || max < 0 || max < min){
          alert("Error al ingresar los precios, intentelo de nuevo")
    }
    else{
        validate = true
    }
}

function filterByPrice(min, max, products){
    products.forEach(product => {
        if(product.price >= min && product.price <= max){
            filteredProducts.push(product)
        }
    })
}

function printProducts(products){
    if(Object.keys(products).length === 0){
        alert("Lo sentimos, no hay productos en el rango de precio")
    }else{
        products.forEach(product => {
            alert(product.name)
        })
    }
    
}

filterByPrice(min, max, products)
alert("Los productos en el rango de precio son: ")
printProducts(filteredProducts)

