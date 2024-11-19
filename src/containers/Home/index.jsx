/* eslint-disable react/react-in-jsx-scope */

import { CategoryCarousel } from "../../components/CategoryCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
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
