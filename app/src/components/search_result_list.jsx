import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchResultList = ({ list, open, setOpenList, setSearchQuery }) => {

    const navigate = useNavigate();
    const goTo = (path) => {
        setSearchQuery(() => "");
        setOpenList(() => false);
        navigate(path);
    }

    if (open) {
        return (
            <div className="flex flex-col bg-white shadow-md z-10 m-1 rounded-md max-h-32 text-black gap-1 overflow-y-scroll absolute w-full text-start">
                {
                    (list.map((element, index) => {
                        return (
                            <div key={index} className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => goTo(`/libros/${element.id}`)}
                            >
                                { element.title }
                            </div>
                        );
                    }))
                }
            </div>
        );
    } else {
        return (<></>);
    }
}