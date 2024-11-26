/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import { CardImage, Container } from "./styles";
import { CartButton } from '../CartButton';
import { useCart } from '../../hooks/CartContext'; // Importa o contexto do carrinho

// Componente para exibir um produto em forma de card
export function CardProduct({ product }) {
    
    // Obtém a função `putProductInCart` do contexto para adicionar o produto ao carrinho
    const { putProductInCart } = useCart();

    return (
        <Container>
            {/* Exibe a imagem do produto */}
            <CardImage src={product.url} alt={product.name} />

            {/* Exibe o nome e o preço do produto */}
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>

            {/* Botão para adicionar o produto ao carrinho */}
            <CartButton onClick={() => putProductInCart(product)} />
        </Container>
    );
}

// Define os tipos esperados para as props do componente
CardProduct.propTypes = {
    product: PropTypes.object, // `product` deve ser um objeto 
};


