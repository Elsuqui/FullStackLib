import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Brand } from "./brand";
import { SearchBox } from "./search_box";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="bg-amber-900 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <Brand name="Biblioteca FullStack" />
                        <div className="flex space-x-8 mt-4">
                            <button className="rounded-full" onClick={() => navigate('/deseos')}>
                                <HeartIcon className="h-6 w-6 text-white"/>
                                Mis listas
                            </button>
                            <button className="rounded-full" onClick={() => navigate('/checkout')}>
                                <ShoppingCartIcon className="h-6 w-6 text-white"/>
                                Carrito de compras
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-center">
                        <div className="relative self-center m-5">
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};