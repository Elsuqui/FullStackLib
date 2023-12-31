import { useContext } from "react";
import { BookCover } from "./book_cover";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { BookContext } from "../providers/BookProvider";

export const WishBook = ({ id, cover, name, author, price }) => {

    const { wishList, setWishList } = useContext(BookContext);
    const removeFromWishList = () => {
        setWishList(() => wishList.filter(e => e.id !== id));
    };

    return (
        <div className="inline-flex border-2 rounded-r-lg my-4 py-2 w-2/3 border-2 shadow-lg">
            <BookCover 
            cover={ cover }
            size="sm" />
            <div className="mx-4 my-2 grow">
                <div className="font-bold text-2xl"><span>{ name }</span></div>
                <div className="text-xl"><span>{ author }</span></div>
                <div className="text-xl font-bold mt-4"><span>{ price }</span></div>
            </div>
            <div className="w-20">
                <button className="rounded-full bg-red-500" onClick={removeFromWishList}>
                    <XMarkIcon className="h-12 w-12 text-white" />
                </button>
            </div>
        </div>
    );
};