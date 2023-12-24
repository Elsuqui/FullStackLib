import { BookCover } from "./book_cover";
import { useNavigate } from "react-router-dom";

export const SaleBook = ({ id, name, author, description, cover, rating, price }) => {
    const navigate = useNavigate();

    const goToBookDetails = () => {
      navigate(`/libros/${id}`);
    }

    return (
      <div className="w-fit">
        <BookCover cover={ cover } size="sm" onClick={ () => goToBookDetails() }/>
        <div className="text-start mt-4 w-32 text-black font-medium text-base"><p className="line-clamp-3">{ name }</p></div>
        <div className="text-start text-black text-sm"><span>{ author }</span></div>
        <div className="text-start"><span>Rating { rating }</span></div>
        <div className="text-start text-slate-500 text-sm"><p>{ description }</p></div>
        <div className="text-end text-xl font-bold">{ price }</div>
      </div>  
    );
};