const productos = [
    { id: 1, nombre: 'Aspiradora robot', precio: "$399.99", img: './src/assets/aspiradora_robot.png', categoria: 1, stock: 10 },
    { id: 2, nombre: 'Cafetera programable', precio: "$129.99", img: './src/assets/aspiradora_robot.png', categoria: 1, stock: 10 },
    { id: 3, nombre: 'Robot de cocina multifunción', precio: "$699.99", img: './src/assets/aspiradora_robot.png', categoria: 1, stock: 10 },
    { id: 4, nombre: 'Asistente virtual para el hogar', precio: "$49.99", img: './src/assets/aspiradora_robot.png', categoria: 1, stock: 10 },
    { id: 5, nombre: 'Cámara de seguridad inteligente', precio: "$149.99", img: './src/assets/camara_inteligente.png', categoria: 2, stock: 10 },
    { id: 6, nombre: 'Sistema de alarma para el hogar', precio: "$299.99", img: './src/assets/camara_inteligente.png', categoria: 2, stock: 10 },
    { id: 7, nombre: 'Cerradura inteligente', precio: "$199.99", img: './src/assets/camara_inteligente.png', categoria: 2, stock: 10 },
    { id: 8, nombre: 'Timbre de video', precio: "$129.99", img: './src/assets/camara_inteligente.png', categoria: 2, stock: 10 },
    { id: 9, nombre: 'Humidificador ultrasónico', precio: "$59.99", img: './src/assets/humificador.png', categoria: 3, stock: 10 },
    { id: 10, nombre: 'Balanza inteligente', precio: "$79.99", img: './src/assets/humificador.png', categoria: 3, stock: 10 },
    { id: 11, nombre: 'Monitor de presión arterial', precio: "$89.99", img: './src/assets/humificador.png', categoria: 3, stock: 10 },
    { id: 12, nombre: 'Masajeador de espalda y cuello', precio: "$129.99", img: './src/assets/humificador.png', categoria: 3, stock: 10 },
    { id: 13, nombre: 'Barra de sonido para TV', precio: "$249.99", img: './src/assets/barra_de_sonido.png', categoria: 4, stock: 10 },
    { id: 14, nombre: 'Proyector de cine en casa', precio: "$999.99", img: './src/assets/barra_de_sonido.png', categoria: 4, stock: 10 },
    { id: 15, nombre: 'Consola de videojuegos', precio: "$499.99", img: './src/assets/barra_de_sonido.png', categoria: 4, stock: 10 },
    { id: 16, nombre: 'Auriculares inalámbricos', precio: "$199.99", img: './src/assets/barra_de_sonido.png', categoria: 4, stock: 10 }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 200)
    })
}

export const getItem = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(p =>
                p.id === Number(itemId)
            )
            resolve(producto);
        }, 200)
    })
}

export const getCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosFiltrados = productos.filter(p =>
                p.categoria === Number(categoryId)
            )
            resolve(productosFiltrados);
        }, 200)
    })
}