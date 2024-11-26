import { createContext, useContext, useState, useEffect } from "react";

// Cria o contexto para o carrinho, usado para compartilhar estado global.
const CartContext = createContext({});

// Provedor do contexto, que encapsula os componentes que precisam acessar o carrinho.
export const CartProvider = ({ children }) => {
    
    // Estado para armazenar os produtos adicionados ao carrinho.
    const [cartProducts, setCartProducts] = useState([]);

    // Função para adicionar um produto ao carrinho.
    const putProductInCart = (product) => {
        console.log(product);
        // Implementar lógica para adicionar o produto ao carrinho.
    };

    // Função para limpar todos os produtos do carrinho.
    const clearCart = () => {
        // Implementar lógica para remover todos os produtos do carrinho.
    };

    // Função para remover um produto específico do carrinho.
    const deleteProduct = (product) => {
        // Implementar lógica para excluir o produto informado.
    };

    // Função para aumentar a quantidade de um produto no carrinho.
    const increseProduct = (productId) => {
        // Implementar lógica para incrementar a quantidade do produto.
    };

    // Função para diminuir a quantidade de um produto no carrinho.
    const decreaseProduct = (productId) => {
        // Implementar lógica para decrementar a quantidade do produto.
    };

    // Retorna o provedor com os valores e funções disponíveis para os componentes filhos.
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

// Hook personalizado para consumir o contexto do carrinho de forma simplificada.
export const useCart = () => {
    const context = useContext(CartContext); // Obtém o contexto atual.

    // Lança erro se o hook for usado fora do CartProvider.
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context; // Retorna o contexto.
};
