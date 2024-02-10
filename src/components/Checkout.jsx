import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { db } from '../services/config'
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { LiaSpinnerSolid } from "react-icons/lia";

const Checkout = () => {

    const { cart, total, clear } = useContext(CartContext)

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [ordenID, setOrdenID] = useState('')
    const [error, setError] = useState('')

    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        if (nombre === '' || apellido === '' || email === '' || confirmEmail === '' || telefono === '') {
            setError('Todos los campos son obligatorios')
            return;
        }
        if (email !== confirmEmail) {
            setError('Los emails no coinciden')
            return;
        }

        
        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                precio: producto.item.precio,
                quantity: producto.quantity,
                descripcion: producto.item.descripcion
            })),
            total: total,
            fecha: new Date().toString(),
            comprador: {
                nombre: nombre,
                apellido: apellido,
                email: email,
                telefono: telefono
            }
        }

        Promise.all(
            orden.items.map(async (item) => {
                const productoRef = doc(db, 'inventario', item.id.toString());
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, { stock: stockActual - item.quantity });
            })
        )
            .then(() => {
                addDoc(collection(db, 'orders'), orden)
                    .then(doc => {
                        setOrdenID(doc.id)
                        setAlert(true)
                        clear()
                        setApellido('')
                        setEmail('')
                        setNombre('')
                        setConfirmEmail('')
                        setTelefono('')
                        setError('')
                        setLoading(false)
                    })
                    .catch(err => {
                        console.log(err)
                        setError('Ocurrio un error al generar la orden')
                    })
            })
            .catch(err => {
                console.log(err)
                setError('Ocurrio un error al actualizar el stock')
            })
    }

    useEffect(() => {
        if (alert) {
            Swal.fire({
                title: "Compra realizada con éxito",
                text: "Su número de orden es " + ordenID,
                icon: "success",
                showDenyButton: true,
                denyButtonColor: "black",
                confirmButtonText: "Ok!",
                denyButtonText: "Imprimir orden"
            })
                .then((result) => {
                    if (result.isDenied) {
                        console.log("Imprimiendo")
                    }
                })
        }
    }, [alert])

    if (cart.length === 0) {
        return (
            <div className='w-full bg-primary p-12 min-h-screen-100 flex justify-center items-center flex-col'>
                <h2 className='text-white text-5xl text-center'>CARRITO VACIO</h2>
                <Link to="/" className='w-80 h-8 rounded-b-3xl text-center text-xl bg-tertiary text-black hover:w-96 transition-all'>Seguir comprando</Link>
            </div>
        )
    } else {
        return (
            <div className='w-full bg-secondary p-8 min-h-screen-100 flex flex-col'>
                <h2 className='uppercase text-4xl text-primary font-bold bg-primary w-min px-8'>Checkout</h2>
                <form onSubmit={handleSubmit} className='border-t-4 border-[#114d4d]'>
                    <h3 className='font-bold text-2xl bg-tertiary pl-4 py-4'>Resumen De productos</h3>
                    {
                        cart.map(producto => (
                            <div key={producto.item.id} className='bg-tertiary pl-4 pb-2 border-t-2 p-2'>
                                <p className='font-semibold'>{producto.item.nombre} x {producto.quantity}</p>
                                <p className='pr-2'>{producto.item.descripcion}</p>
                                <p className='font-semibold '>USD$ {producto.item.precio}</p>
                            </div>
                        ))
                    }
                    <p className='bg-tertiary pl-4 w-full pb-2 font-bold border-t-2 pt-2'>Total: USD$ {total}</p>
                    <div className='flex flex-col border-t-4 border-[#114d4d] bg-tertiary pl-4 py-4'>
                        <h3 className='font-bold text-2xl bg-tertiary py-4'>Complete sus datos personales</h3>
                        <label htmlFor="" className='py-2'>Nombre</label>
                        <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className='w-1/2 lg:w-1/4 px-2 rounded-md focus:outline-[#114d4d] focus:outline-double bg-[#114d4d]/20 text-black placeholder:text-[#114d4d]' />
                        <label htmlFor="" className='py-2'>Apellido</label>
                        <input type="text" placeholder="Ingrese su apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} className='w-1/2 lg:w-1/4 px-2 rounded-md focus:outline-[#114d4d] focus:outline-double bg-[#114d4d]/20 text-black placeholder:text-[#114d4d]' />
                        <label htmlFor="" className='py-2'>Telefono</label>
                        <input type="text" placeholder="Ingrese su teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} className='w-1/2 lg:w-1/4 px-2 rounded-md focus:outline-[#114d4d] focus:outline-double bg-[#114d4d]/20 text-black placeholder:text-[#114d4d]' />
                        <label htmlFor="" className='py-2'>Email</label>
                        <input type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-1/2 lg:w-1/4 px-2 rounded-md focus:outline-[#114d4d] focus:outline-double bg-[#114d4d]/20 text-black placeholder:text-[#114d4d]' />
                        <label htmlFor="" className='py-2'>Confirmar Email</label>
                        <input type="email" placeholder="Confirme su email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} className='w-1/2 lg:w-1/4 px-2 rounded-md focus:outline-[#114d4d] focus:outline-double bg-[#114d4d]/20 text-black placeholder:text-[#114d4d]' />
                        
                        {
                            error && <p className='py-2 text-red-900 font-bold'>{error}</p>
                        }
                        <button type="submit" className='h-8 text-center rounded-3xl py-1 px-12 bg-black text-primary hover:bg-primary transition-all mb-2 mt-6 uppercase w-min'>{loading ? <div className='flex justify-center items-center gap-2 font-semibold flex-row'><LiaSpinnerSolid className='animate-spin text-primary' />Procesando</div> : "Finalizar orden"}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Checkout