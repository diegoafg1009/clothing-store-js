class SideBar{
    constructor(products){
        this.products = products
    }

    showSubMenu() {
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

    renderItems(){
        const subMenus = document.querySelectorAll(`[id$="Menu"]`)
        subMenus.forEach(subMenu => {
            let key = subMenu.id.replace("Menu","")
            let items = []
            this.products.forEach(product => {
                items.push(product[key])
            })
            items = new Set(items)
            const ul = subMenu.querySelector("ul")
            items.forEach(item =>{
                let li = document.createElement("li")
                li.classList.add("sideBar__menuItem")
                li.innerHTML = `${item}`
                ul.appendChild(li)
            })
        });
    }
}