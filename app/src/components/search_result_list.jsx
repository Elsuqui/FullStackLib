import "../styles/components/search_result_list.css";
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
            <div className="search_result">
                {
                    (list.map((element, index) => {
                        return (
                            <div key={index} className="search_result_item"
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