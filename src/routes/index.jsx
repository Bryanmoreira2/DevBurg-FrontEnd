import {  Route, Routes } from "react-router-dom";
import { 
    Login,
    Register,
    ShoppingCart,
    Home,
    Menu,
    CompletePayment,
    Checkout,
    Orders,
    NewProduct, 
    EditProduct,
    Products
    } from"../containers";
import { UserLayout } from "../layouts/UserLayout";
import { AdiminLayout } from "../layouts/AdiminLayout";



export function AppRoutes (){
    return(
        <Routes>
            <Route path="/" element={<UserLayout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/cardapio" element={<Menu/>} />
                <Route path="/carrinho" element={<ShoppingCart/>} />
                <Route path="/complete" element={<CompletePayment/>} />
                <Route path="/checkout" element={<Checkout/>} />
            </Route>

                <Route path="/admin" element={<AdiminLayout/>} >
            <Route path="/admin/pedidos" element={<Orders/>} />
            <Route path="/admin/novo-produto" element={<NewProduct/>} />
            <Route path="/admin/editar-produto" element={<EditProduct/>} />
            <Route path="/admin/produto" element={<Products/>} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes>
    )
}

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <>
//             <Header />
//             <Home />
//             <Footer/>
//             </>
//         ),
//     },
//     {
//         path: "/login",
//         element: <Login />,
//     },
//     {
//         path: "/cadastro",
//         element: <Register />,
//     },
//     {
//         path: "/cardapio",
//         element:  (
//             <>
//             <Header />
//             <Menu />
//             </>
//         ),
//     },
//     {
//         path: "/carrinho",
//         element: <ShoppingCart />
//     },
//     {
//         path: "/checkout",
//         element:  <Checkout/>
         
//     },
//     {
//         path: "/complete",
//         element:  <CompletePayment />
            
        
//     },
// ])
