/* eslint-disable react/react-in-jsx-scope */

import { CategoryCarousel,OffersCarousel  } from "../../components";
import { Banner, Container, Content } from "./styles";


export function Home() {
    return (
        <main>
            <Banner>
                <h1>Bem-vindo!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoryCarousel />
                    <OffersCarousel />
                </Content>
            </Container>
        </main>

    )
}
