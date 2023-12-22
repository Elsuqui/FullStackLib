import { Brand } from "./brand";
import { SearchBox } from "./search_box";

export const Header = () => {
    return (
        <header className="bg-amber-900 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <Brand name="Biblioteca FullStack" />
                    <div className="flex flex-col justify-center text-center">
                        <div className="self-center m-5">
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};