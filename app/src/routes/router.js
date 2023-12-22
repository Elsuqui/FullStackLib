import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/deafult";
import { HomePage } from "../pages/home";
import { BookDetailsPage } from "../pages/book_details";
import { WishListPage } from "../pages/wish_list";
import { NotFoundPage } from "../pages/not_found";
import { CheckoutPage } from "../pages/checkout_page";
import { HistoryPaymentPage } from "../pages/history_payment_page";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <DefaultLayout /> }>
                    <Route path="/" element={ <HomePage /> }/>
                    <Route path="/libros/:id" element={ <BookDetailsPage /> }/>
                    <Route path="/deseos" element={ <WishListPage /> } />
                    <Route path="/checkout" element={ <CheckoutPage /> }/>
                    <Route path="/historial-compras" element={ <HistoryPaymentPage /> }/>
                    <Route path="*" element={ <NotFoundPage /> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;