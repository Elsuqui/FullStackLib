import { WishBook } from "../components/wish_book";

export const WishListPage = () => {
    return (
        <div className="mt-4">
            <div className="text-3xl"><span>Mis listas de deseos</span></div>
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
                />
            <WishBook 
                cover="https://images.cdn3.buscalibre.com/fit-in/180x180/7a/72/7a72d3f38f52c4fefca2bc32fc8a73a1.jpg"
                name="Nombre 1"
                author="Author 1"
                price="US$ 2.00"
                />
        </div>
    );
};