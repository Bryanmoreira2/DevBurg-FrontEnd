import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {
        const CartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
        let newProductsInCart;

        if (CartIndex >= 0) {
            newProductsInCart = [...cartProducts];
            newProductsInCart[CartIndex] = {
                ...newProductsInCart[CartIndex],
                quantity: newProductsInCart[CartIndex].quantity + 1,
            };
        } else {
            product.quantity = 1;
            newProductsInCart = [...cartProducts, product];
        }

        setCartProducts(newProductsInCart);
        updateLocalStorage(newProductsInCart);
    };

    const clearCart = () => {
        setCartProducts([]);
        updateLocalStorage([]);
    };

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const increseProduct = (productId) => {
        const newCart = cartProducts.map((prd) =>
            prd.id === productId
                ? { ...prd, quantity: prd.quantity + 1 }
                : prd
        );
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const decreaseProduct = (productId) => {
        const CartIndex = cartProducts.findIndex((prd) => prd.id === productId);
        if (CartIndex < 0) return;

        if (cartProducts[CartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) =>
                prd.id === productId
                    ? { ...prd, quantity: prd.quantity - 1 }
                    : prd
            );
            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    };

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburg:cartInfo', JSON.stringify(products));
    };

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburg:cartInfo');
        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                putProductInCart,
                clearCart,
                decreaseProduct,
                increseProduct,
                deleteProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
