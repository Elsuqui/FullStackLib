import { useNavigate, useParams } from "react-router-dom";
import { BookCover } from "../components/book_cover";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../providers/BookProvider";
import { HeartIcon as HeartIconOutline, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { ShoppingCartButton } from "../components/shooping_cart_button";
import { IN_CART, NOT_IN_CART } from "../components/shooping_cart_button";

export const BookDetailsPage = () => {
    const { id } = useParams();
    const [ book, setBook ] = useState({});
    const [ wished, setWished ] = useState(false);
    const [ inShoopingCart, setInShoopingCart ] = useState(NOT_IN_CART);
    const { books, wishList, setWishList, cartItems } = useContext(BookContext);
    const navigate = useNavigate();
     
    useEffect(() => {
        if (id && books.length > 0) {
            const bookFound = books.find((book) => book.id == id);
            if (bookFound) {
                setBook(() => ({...book, ...bookFound}));
            } else {
                navigate('/not-found');
            }
        }
    },[books]);

    useEffect(() => {
        if (Object.hasOwn(book, 'id')) {
            const wishedFound = wishList.find((element) => element.id == book.id);
            if (wishedFound) {
                setWished(() => true);
            }
            const inShoppingCartFound = cartItems.find(element => element.id == book.id);
            console.log("Shopping cart: ", inShoppingCartFound);
            if (inShoppingCartFound) {
                setInShoopingCart(() => IN_CART);
            }
        }
    }, [book]);

    useEffect(() => {
        const inShoppingCartFound = cartItems.find(element => element.id == book.id);
        if (inShoppingCartFound) {
            setInShoopingCart(() => IN_CART);
        } else {
            setInShoopingCart(() => NOT_IN_CART);
        }
    }, [cartItems])

    const addWishList = () => {
        setWishList(() => [...wishList, book]);
        setWished(() => true);
    }

    const removeWishList = () => {
        setWishList(() => wishList.filter(e => e.id !== book.id));
        setWished(() => false);
    }

    if (Object.hasOwn(book, 'id')) {
        return (
            <>
            <div className="my-4">
                <div className="flex justify-start">
                    <div className="mx-6 w-fit text-4xl mt-4"><span>{ book.title }</span></div>
                </div>
                <div className="flex justify-start">
                    <div className="flex flex-col w-1/3 my-4">
                        <BookCover 
                            cover={ book.cover_url }
                            size="md"
                            />
                        <div className="mx-6 my-4 p-2 text-sm">
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td>ISBN</td>
                                        <td>9788408279990</td>
                                    </tr>
                                    <tr>
                                        <td>Autor</td>
                                        <td>{ book.author_name.length > 0 ? book.author_name[0] : '' }</td>
                                    </tr>
                                    <tr>
                                        <td>Año</td>
                                        <td>{ book.first_publish_year }</td>
                                    </tr>
                                    <tr>
                                        <td>N# Páginas</td>
                                        <td>{ book.number_of_pages_median }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
    
                    <div className="w-2/3">
                        <div className="w-fit text-4xl mt-4"><span>{ book.author_name.length ? book.author_name[0] : '' } (Autor)</span></div>
                        <div className="mt-2"><span>Calificación</span></div>
                        <div className="text-2xl mt-8 font-bold"><span>{ Number.parseFloat(book.price) > 0 ? `US$ ${book.price}` : 'Free' }</span></div>
                        <ShoppingCartButton product={ book } mode={ inShoopingCart } btnClasses="px-5 py-2 text-xl mt-2" />
                        <div className="flex items-center mt-2">
                            { 
                                !wished ? 
                                (
                                    <>
                                        <HeartIconOutline className="w-10 h-10" onClick={addWishList}/>
                                        <span>Agregar a lista de deseos</span>
                                    </>
                                ) : 
                                (
                                    <>
                                        <HeartIconSolid className="w-10 h-10 fill-red-600" onClick={removeWishList}/>
                                        <span>Libro en lista de deseos</span>
                                    </>
                                )
                            }
                        </div>
    
                        <div className="my-8">
                            <div className="text-3xl"><span>Descripción</span></div>
                            <div>
                                <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisi massa. Pellentesque lacus nisi, congue eget vulputate nec, gravida et magna. Fusce id libero vel urna fermentum efficitur vitae id lacus. Nullam maximus, nisi nec condimentum tristique, mi nibh maximus metus, sit amet suscipit massa nisl eget orci. Nam eu justo egestas, commodo massa eu, gravida dolor. Aenean vel nisi pulvinar quam finibus dignissim ac vel mauris. Nunc vel quam id lacus iaculis tincidunt at vel lectus. Suspendisse gravida fermentum iaculis. Nulla volutpat odio eu ullamcorper finibus.
                                Vestibulum scelerisque, nisl et tincidunt porttitor, ipsum nibh ullamcorper mi, at suscipit nisi enim maximus orci. Ut fermentum urna et nunc ornare, at pharetra est dictum. Nulla vestibulum ligula nunc, vel auctor leo feugiat at. Maecenas eu posuere tortor. Maecenas cursus dui ante, vel eleifend orci imperdiet in. Cras viverra condimentum arcu at dignissim. Praesent id neque eu tortor porta blandit. Morbi in orci viverra, finibus mi et, molestie nunc. Quisque volutpat dictum metus vel mollis. Praesent eget ante blandit, pretium orci ac, sagittis est. Phasellus iaculis, purus eu auctor porta, erat mauris ultricies orci, sit amet aliquet lectus ipsum et purus. In in facilisis augue.
                                Maecenas elementum efficitur neque, id tincidunt tortor pretium bibendum. Ut ullamcorper laoreet enim sodales scelerisque. Praesent quis tristique mi. Etiam blandit volutpat condimentum. Vestibulum eleifend urna vitae enim commodo, quis luctus sapien ornare. Nam fringilla sapien ac nulla gravida tincidunt. Nunc malesuada diam turpis.
                                Aliquam eleifend nunc quis luctus semper. Aenean tincidunt dolor est, vel auctor ex convallis in. Cras posuere vitae neque at gravida. Donec porttitor sem nec euismod vestibulum. Vivamus pretium consequat viverra. Nulla et vulputate augue. In purus nulla, euismod quis mattis tempus, malesuada eu ligula. Vestibulum aliquet mollis elit in malesuada. Sed non dapibus nisl. In a pharetra turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                In eget volutpat libero, efficitur condimentum quam. Mauris id venenatis diam. Mauris at ante bibendum, convallis sapien non, ultricies magna. Phasellus a massa in mauris tempus tincidunt eu sit amet enim. Etiam semper justo nec bibendum luctus. Nam rhoncus, felis vitae fringilla pretium, urna nisl venenatis ligula, in malesuada orci leo eu sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Curabitur aliquam ligula in maximus tempus. In varius ipsum sit amet urna faucibus volutpat. Vestibulum aliquam lacus iaculis mauris placerat rhoncus. Vivamus ut pulvinar ipsum. Mauris ultricies massa a massa iaculis porttitor. Maecenas efficitur dui vitae dui ornare, sed accumsan quam dictum. In laoreet mi dolor, sit amet vulputate diam auctor quis. Aenean eget tellus at urna auctor efficitur et fringilla risus. Aliquam erat volutpat. Nulla cursus eu nisi non scelerisque. In volutpat, leo vitae tempor interdum, est leo accumsan neque, eu viverra massa dolor non justo.
                                Duis aliquet magna a elit scelerisque dictum. Sed sed pharetra justo, in bibendum nisl. Cras aliquam suscipit rutrum. Nam urna nulla, porttitor sit amet neque vel, porttitor eleifend dolor. Nunc fermentum erat sit amet fermentum gravida.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
};