import { createBrowserRouter } from "react-router-dom";
import { Login,Register,ShoppingCart,Home,Menu,} from"../containers";
import { Header,Footer } from "../components";


export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
            <Header />
            <Home />
            <Footer/>
            </>
        ),
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastro",
        element: <Register />,
    },
    {
        path: "/cardapio",
        element:  (
            <>
            <Header />
            <Menu />
            </>
        ),
    },
    {
        path: "/carrinho",
        element:  (
            <>
            <ShoppingCart />
            </>
        ),
    },
])
