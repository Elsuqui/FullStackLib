
import "../styles/components/header.css";

import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Brand } from "./brand";
import { SearchBox } from "./search_box";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="header-container">
                <div className="container-items">
                    <div className="container-items-up">
                        <Brand name="Biblioteca FullStack" />
                        <div className="container-items-up-right">
                            <button className="button button--rounded_full" onClick={() => navigate('/deseos')}>
                                <HeartIcon className="button heart_icon"/>
                                Mis listas
                            </button>
                            <button className="button button--rounded_full" onClick={() => navigate('/checkout')}>
                                <ShoppingCartIcon className="button shopping_icon"/>
                                Carrito de compras
                            </button>
                        </div>
                    </div>
                    <div className="container-items-search_box">
                        <div className="container-items-search_box-item">
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};