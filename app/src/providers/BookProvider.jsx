import { createContext, useEffect, useState } from "react";
import jsonBooks from "../data/open_library_api.json";
import { useCoverUrl } from "../custom_hooks/useCoverUrl";

export const BookContext = createContext();
 
// HOC <- High Order Component
export const BookProvider = ({ children }) => {
    const [ books, setBooks ] = useState([]);
    const [ wishList, setWishList ] = useState(() => {
        // Se inicializa el estado con un callback ya que se desea extraer la información del localstorage
        const savedWishList = localStorage.getItem('wishlist');
        if (savedWishList) {
            return JSON.parse(savedWishList);
        }
        return [];
    });
    const [ cartItems, setCartItems ] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            return JSON.parse(savedCartItems);
        }
        return [];
    });
    
    const coverBaseUrl = useCoverUrl();
    useEffect(() => {
        const { docs } = jsonBooks;
        setBooks(() => {
            return docs.map((element, key) => {
                return {
                    ...element,
                    cover_url: `${coverBaseUrl}/${element.cover_i}-L.jpg`,
                }
            });
        });
    }, []);

    useEffect(() => {
        console.log("Libros: ", books);
    }, [books]);

    useEffect(() => {
        console.log("Wishlist", wishList);
        localStorage.setItem('wishlist', JSON.stringify(wishList));
    }, [wishList]);

    useEffect(() => {
        console.log("CartItem", cartItems);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <BookContext.Provider value={{ books, wishList, cartItems, setWishList, setCartItems }}>
            { children }
        </BookContext.Provider>
    );
}