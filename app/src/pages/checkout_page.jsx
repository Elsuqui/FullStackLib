import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckoutBookDetail } from "../components/checkout_detail";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../providers/BookProvider";

export const CheckoutPage = (books) => {
    // Hay que usar un contexto global para el carrito
    const { cartItems, setCartItems } = useContext(BookContext);

    const [ total, setTotal ] = useState(0)

    const removeFromShoopingCart = (book) => {
        setCartItems(() => cartItems.filter(e => e.id !== book.id));
    };

    useEffect(() => {
        const operation = cartItems.reduce((previous, current) => Number.parseFloat(previous) + Number.parseFloat(current.price), 0);
        setTotal(() => operation);
    }, [cartItems])

    return (
        <div className="mt-4">
            <div className="text-3xl mb-4"><span>Verificar Pedido</span></div>
            {
                cartItems.length > 0 ? (
                    <>
                    <table>
                        <thead>
                            <tr>
                                <th className="text-start pr-10">
                                    <span className="ml-6">Tus Productos</span>
                                </th>
                                <th className="pl-10">Precio</th>
                                <th>Cantidad</th>
                                <th className="pr-8">Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((element, key) => {
                                    return (
                                        <tr key={key} className="border-b-2 my-2">
                                            <td className="mt-8 pr-10">
                                                <CheckoutBookDetail key={key} book={element} />
                                            </td>
                                            <td className="text-center pl-10">
                                                <span>{'US$ ' + element.price}</span>
                                            </td>
                                            <td className="text-center">
                                                <div className="px-4">
                                                    <span className="w-20">{element.quantity}</span>
                                                </div>
                                            </td>
                                            <td className="pr-8">
                                                <span>{'US$ ' + (element.quantity * Number.parseFloat(element.price)).toFixed(2)}</span>
                                            </td>
                                            <td>
                                                <button className="rounded-full bg-red-500" onClick={() => removeFromShoopingCart(element)}>
                                                    <XMarkIcon key={key} className="h-6 w-6 text-white" />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    <div className="flex space-x-10 m-4 text-xl">
                        <div className="font-bold">
                            <span>TOTAL: </span>
                        </div>
                        <div>
                            <span>$ { total }</span>
                        </div>
                    </div>
                    </>
                ) : (
                    <div className="text-start text-2xl mt-8">
                        <span>Aún no se han agregado libros a tu carrito</span>
                    </div>
                )
            }
        </div>
    );
};