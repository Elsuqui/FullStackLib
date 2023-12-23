import { useContext, useEffect } from "react";
import { WishBook } from "../components/wish_book";
import { BookContext } from "../providers/BookProvider";

export const WishListPage = () => {

    const { wishList } = useContext(BookContext);
    
    return (
        <div className="mt-4">
            <div className="text-3xl"><span>Mis listas de deseos</span></div>
            {
                wishList.length > 0 ? (wishList.map((element, index) => {
                    return (
                        <WishBook
                            key={ index }
                            id={ element.id }
                            cover={ element.cover_url }
                            name={ element.title }
                            author={ element.author_name.length > 0 ? element.author_name[0] : '' }
                            price={ Number.parseFloat(element.price) > 0 ? `US$ ${element.price}` : 'Free' }
                        />
                    );
                })) : (
                    <div className="text-start text-2xl mt-8">
                        <span>Aún no se han agregado libros a tu lista de deseos</span>
                    </div>
                )
            }
            {/* <WishBook 
                cover="https://images.cdn3.buscalibre.com/fit-in/180x180/7a/72/7a72d3f38f52c4fefca2bc32fc8a73a1.jpg"
                name="Nombre 1"
                author="Author 1"
                price="US$ 2.00"
                />
            <WishBook 
                cover="https://images.cdn3.buscalibre.com/fit-in/180x180/7a/72/7a72d3f38f52c4fefca2bc32fc8a73a1.jpg"
                name="Nombre 1"
                author="Author 1"
                price="US$ 2.00"
                />
            <WishBook 
                cover="https://images.cdn3.buscalibre.com/fit-in/180x180/7a/72/7a72d3f38f52c4fefca2bc32fc8a73a1.jpg"
                name="Nombre 1"
                author="Author 1"
                price="US$ 2.00"
                /> */}
        </div>
    );
};