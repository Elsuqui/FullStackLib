import { useContext, useState } from "react";
import { Book, BookContext } from "../providers/BookProvider";
import { SearchResultList } from "./search_result_list";


export const SearchBox = () => {

    const [ searchQuery, setSearchQuery ] = useState("");
    const [ queryResults, setQueryResults ] = useState([]);
    const { books } = useContext(BookContext);
    const [openList, setOpenList] = useState(false);

    const searchBooks = (query) => {
        const result = books.filter((element) => {
            return element.title.toLowerCase().includes(query.toLowerCase());
        });
        setOpenList(() => (result.length > 0));
        return result;
    }

    const search = (value) => {
        if (value.length > 0) {
            setTimeout(() => {
                setQueryResults(() => searchBooks(value));
            }, 500);
        } else {
            setOpenList(() => false); 
        }
    }

    return (
        <>
            <div className="flex space-x-4 m-1 bg-white">
                {/* <span>Búsqueda Libro</span> */}
                <input 
                    className="w-64 py-1 px-2 text-black" 
                    placeholder="Ingrese título" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(() => e.target.value)}
                    onKeyUp={(e) => search(e.target.value)}></input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-black my-1 pr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <SearchResultList list={queryResults} open={openList} setOpenList={setOpenList} setSearchQuery={setSearchQuery}/>
        </>
        
    );
};