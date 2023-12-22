import { BookCover } from "./book_cover";

export const SaleBook = ({ name, author, description, cover, rating, price }) => {
    return (
      <div className=" w-fit">
        <BookCover cover={ cover } size="sm" />
        <div className="text-start mt-4 text-black font-medium text-base"><span>{ name }</span></div>
        <div className="text-start text-black text-sm"><span>{ author }</span></div>
        <div className="text-start"><span>Rating { rating }</span></div>
        <div className="text-start text-slate-500 text-sm"><p>{ description }</p></div>
        <div className="text-end text-xl font-bold">{ price }</div>
      </div>  
    );
};