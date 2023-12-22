import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckoutBookDetail } from "../components/checkout_detail";

export const CheckoutPage = (books) => {
    // Hay que usar un contexto global para el carrito
    const libros = [
        {
            cover: "https://images.cdn3.buscalibre.com/fit-in/180x180/7a/72/7a72d3f38f52c4fefca2bc32fc8a73a1.jpg",
            title: "Nombre 1",
            author: "Author 1",
            price: "2.00",
            quantity: 1
        },
        {
            cover: "https://images.cdn3.buscalibre.com/fit-in/180x180/d4/50/d4507dcd6ef6da54393be9cd25bb9119.jpg",
            title: "Nombre 2",
            author: "Author 2",
            price: "2.00",
            quantity: 1
        },
        {
            cover: "https://images.cdn3.buscalibre.com/fit-in/180x180/49/8e/498e746910eb1599b168ca4e10f376f0.jpg",
            title: "Nombre 2",
            author: "Author 2",
            price: "2.00",
            quantity: 1
        }
    ];
    return (
        <div className="mt-4">
            <div className="text-3xl mb-4"><span>Verificar Pedido</span></div>
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
                        (libros.map((element, key) => {
                            return (
                                <tr className="border-b-2 my-2">
                                    <td className="mt-8 pr-10">
                                        <CheckoutBookDetail key={key}  book={ element }/>
                                    </td>
                                    <td className="text-center pl-10">
                                        <span>{ 'US$ ' + element.price }</span>
                                    </td>
                                    <td className="text-center">
                                        <div className="px-4">
                                            <input type="number" value={ element.quantity } className="border-2 w-20"></input>
                                        </div>
                                    </td>
                                    <td className="pr-8">
                                        <span>{ 'US$ ' + (element.quantity * Number.parseFloat(element.price)).toFixed(2) }</span>
                                    </td>
                                    <td>
                                        <button className="rounded-full bg-red-500">
                                            <XMarkIcon className="h-6 w-6 text-white"/>
                                        </button>
                                    </td>
                                </tr>
                            );
                        }))
                    }
                </tbody>
            </table>
        </div>
    );
};