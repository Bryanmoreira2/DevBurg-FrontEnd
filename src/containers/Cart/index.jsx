
import Logo from '../../assets/Logo 2.svg'
import { CarItems,CartResume } from '../../components';
import { Banner, Container, Content, Title } from './styles';


export function ShoppingCart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo dev "/>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CarItems/>
                <CartResume/> 
            </Content>
        </Container>
    );
}
