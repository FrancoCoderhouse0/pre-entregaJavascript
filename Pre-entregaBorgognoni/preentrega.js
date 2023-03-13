const productos = [
    {nombre: "jostickps4", precio: 7000},
    {nombre: "jostickps5", precio: 10000},
    {nombre: "playstation 4", precio: 50000},
    {nombre: "cargadordejostick", precio: 2000},
];
let carrito = []

let seleccion = prompt("Hola desea comprar algun producto?")

while(seleccion != "si" && "no"){
    alert("Porfavor ingresa si o no")
    seleccion = prompt("Hola desea comprar algo si o no") 
}

if(seleccion == "si"){
    alert("A continuacion nuestros productos")
    let todoslosProductos = productos.map
    ((producto) => producto.nombre + "" +producto.precio + "$");
    alert(todoslosProductos.join(" - "))
}

while(seleccion != "no"){
    let producto = prompt("Agrega un procuto a tu carrito")
    let precio = 0

    if(producto == "jostickps4" || producto == "jostickps5" || producto == "playstation4" || producto == "playstation5" || producto == "cargadordejostick"){
        switch(producto){
            case "jostickps4":
            precio = 7000
            break
            case "jostickps5":
            precio = 10000
            break
            case "playstation4":
            precio = 50000
            break
            case "playstation5":
            precio = 100000
            break
            case "cargadordejostick":
            precio = 2000
            break
        default:
            break
        }
    let unidades = parseInt(prompt ("Cuantas unidades necesita??"))
    
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("No contamos con ese producto")
    }

    seleccion = prompt("Quiere algun otro producto??")
    
    while(seleccion === "no"){
    alert("Gracias por su compra!!! Vuelva pronto")
    carrito.forEach((carritoFinal) => {
        console.log(`procutos: ${carritoFinal.producto}, unidades: ${carrito.unidades}, total a pagar por procuto${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
    }
}