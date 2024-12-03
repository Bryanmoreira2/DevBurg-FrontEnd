import {Tables} from '../index'
import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import { EmptyCart, ProductImg,ButtonGroup,ProductTotal, TrashImage } from './styles'
import TrashIcon from '../../assets/Lixo.svg'
export function CarItems () {
    const { cartProducts,increseProduct,decreaseProduct,deleteProduct} = useCart()

    console.log(cartProducts)

    return (
        <Tables.Root>
            <Tables.Header>
                <Tables.Tr>
                    <Tables.Th></Tables.Th>
                    <Tables.Th>Itens</Tables.Th>
                    <Tables.Th>Preço</Tables.Th>
                    <Tables.Th>Quantidade</Tables.Th>
                    <Tables.Th>Total</Tables.Th>
                    <Tables.Th></Tables.Th>
                </Tables.Tr>
            </Tables.Header>
            <Tables.Body> {cartProducts?.length? (
                cartProducts.map((product) => (
                    <Tables.Tr key={product.id}>
                        <Tables.Td>
                            <ProductImg src={product.url} />
                        </Tables.Td>
                        <Tables.Td>{product.name}</Tables.Td>
                        <Tables.Td> {product.currencyValue}</Tables.Td>
                        <Tables.Td> 
                            <ButtonGroup>
                                <button onClick={() => decreaseProduct(product.id)}>-</button>
                                {product.quantity}
                                <button onClick={() => increseProduct(product.id)}>+</button>
                            </ButtonGroup>
                        </Tables.Td>
                        <Tables.Td> 
                            <ProductTotal>
                            {formatPrice(product.quantity * product.price)}
                            </ProductTotal>
                            </Tables.Td>
                            <Tables.Td>
                                <TrashImage src={TrashIcon} atl= "trash" onClick={()=> deleteProduct(product.id)} />
                            </Tables.Td>
                    </Tables.Tr>

            ))
        ) : (
        <EmptyCart>Carrinho Vazio </EmptyCart>
    )}</Tables.Body>
        </Tables.Root>
    )
}