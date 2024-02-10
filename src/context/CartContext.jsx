import { useState, createContext } from "react";

export const CartContext = createContext(
    {
        cart: [],
        total: 0,
        totalQuantity: 0,
    }
);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        const productoExistente = cart.find(producto => producto.item.id === item.id);
        if (productoExistente) {
            const carritoActualizado = cart.map(producto => {
                if (producto.item.id === item.id) {
                    setTotalQuantity(prev => prev + quantity);
                    setTotal(prev => prev + (item.precio * quantity));
                    producto.item.subtotal = producto.item.precio * (producto.quantity + quantity);
                    return { ...producto, quantity: producto.quantity + quantity};
                } else {
                    return producto;
                }
            });
            setCart(carritoActualizado);
        } else {
            setCart(prev => [...prev, { item, quantity }]);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.precio * quantity));
        }
    }

    const substractItem = (item, quantity) => {
        const productoExistente = cart.find(producto => producto.item.id === item.id);
        
        if (productoExistente) {
            const carritoActualizado = cart.map(producto => {
                if (producto.item.id === item.id) {
                    setTotalQuantity(prev => prev - 1);
                    setTotal(prev => prev - (item.precio * quantity));
                    producto.item.subtotal = producto.item.precio * (producto.quantity - quantity);
                    return { ...producto, quantity: producto.quantity - quantity };
                } else {
                    return producto;
                }
            });
            setCart(carritoActualizado);
        } else {
            setCart(prev => [...prev, { item, quantity }]);
            setTotalQuantity(prev => prev - quantity);
            setTotal(prev => prev - (item.precio * quantity));
        }
    }

    const removeItem = (itemId) => {
        const productoEliminado = cart.find(producto => producto.item.id === itemId);
        const carritoActualizado = cart.filter(producto => producto.item.id !== itemId);

        setCart(carritoActualizado);
        setTotalQuantity(prev => prev - productoEliminado.quantity);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.quantity));
    }

    const clear = () => {
        setCart([]);
        setTotal(0);
        setTotalQuantity(0);
    }

    return (
        <CartContext.Provider value={{ cart, total, totalQuantity, addItem, removeItem, clear, substractItem }}>
            {children}
        </CartContext.Provider>
    )
}

