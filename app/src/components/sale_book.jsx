import "../styles/components/sale_book.css";

import { BookCover } from "./book_cover";
import { useNavigate } from "react-router-dom";

export const SaleBook = ({ id, name, author, description, cover, rating, price }) => {
    const navigate = useNavigate();

    const goToBookDetails = () => {
      navigate(`/libros/${id}`);
    }

    return (
      <div className="sale_book">
        <BookCover cover={ cover } size="sm" onClick={ () => goToBookDetails() }/>
        <div className="sale_book item name"><p className="line-clamp-3">{ name }</p></div>
        <div className="sale_book item author"><span>{ author }</span></div>
        <div className="sale_book item description"><p>{ description }</p></div>
        <div className="sale_book item price">{ price }</div>
      </div>  
    );
};