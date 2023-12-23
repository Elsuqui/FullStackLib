import { BookCover } from "./book_cover";

export const CheckoutBookDetail = ({ book }) => {
    return (
        <div className="flex">
          <BookCover cover={ book.cover_url } size="xs"/>
          <div className="flex flex-col">
            <div className="text-xl font-semibold">{ book.title }</div>
            <div className="text-lg font-light">{ book.author_name.length > 0 ? book.author_name[0] : '' }</div>
          </div>
        </div>
    );
};