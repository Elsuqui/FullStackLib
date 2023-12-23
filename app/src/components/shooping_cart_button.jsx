import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { BookContext } from "../providers/BookProvider";

export const IN_CART = 'in-cart';
export const NOT_IN_CART = 'not-in-cart';

export const ShoppingCartButton = ({ product, mode, btnClasses }) => {

    const { cartItems, setCartItems } = useContext(BookContext);

    const addToShoppingCart = () => {
        setCartItems(() => [...cartItems, {...product, quantity: 1}]);
    };

    const removeFromShoopingCart = () => {
        setCartItems(() => cartItems.filter(e => e.id !== product.id));
    };


    if (mode == NOT_IN_CART) {
        return (
            <>
                <button className={`flex text-white rounded-md bg-green-800 space-x-4 items-center ${btnClasses}`} onClick={addToShoppingCart}>
                    <ShoppingCartIcon className="h-6 w-6 text-white"/>
                    <span>Agregar al carrito</span>
                </button>
            </>
        );
    } else {
        return (
            <>
                <button className={`flex text-white rounded-md bg-red-600 space-x-4 items-center ${btnClasses}`} onClick={removeFromShoopingCart}>
                    <XMarkIcon className="h-6 w-6 text-white"/>
                    <span>Remover del carrito</span>
                </button>
            </>
        );
    }
}