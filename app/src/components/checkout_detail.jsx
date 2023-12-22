import { BookCover } from "./book_cover";

export const CheckoutBookDetail = ({ book }) => {
    return (
        <div className="flex">
          <BookCover cover={ book.cover } size="xs"/>
          <div className="flex flex-col">
            <div className="text-xl font-semibold">{ book.title }</div>
            <div className="text-lg font-light">{ book.author }</div>
          </div>
        </div>
    );
};