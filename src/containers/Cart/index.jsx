
import Logo from '../../assets/Logo 2.svg'
import { Banner, Container, Content, Title } from './styles';


export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo dev "/>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                {/* <CarItems/>
                <CarResume/> */}
            </Content>
        </Container>
    );
}
