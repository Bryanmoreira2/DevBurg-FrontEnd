 import { Button } from "../Button"
import { Container } from "./styles"


 export function CartResume(){
    return (
        <>
        <Container>
        <div className="conteiner-top">
            <h2 className="title">Resume do Pedido</h2>
            <p className="items">Items</p>
            <p className="items-price"> R$ 20,00</p>
            <p className="delivery-tax">Taxa de Entrega</p>
            <p className="delivery-tax-price">R$ 5,00</p>
        </div>
        <div className="conteiner-bottom">
            <p>Total</p>
            <p>R$ 25,00</p>

        </div>
        </Container>
        <Button>Fazer Pedido</Button>
        </>
    )
 }