import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const DefaultLayout = ({ content }) => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};