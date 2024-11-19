/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { api } from '../../services/api'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Title, Container, ContainerItems, CategoryButton } from './styles';
import { useNavigate } from 'react-router-dom';

export function CategoryCarousel() {
    const [categories, setCategories] = useState([]);
    const navigte = useNavigate()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data);
            console.log(data);
        }
        loadCategories();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2
        },
    }
    return (
        <Container >
            <Title>Categorias</Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partilVisible={false}
                itemClass="carousel-item"
            >
                {categories.map(category => (
                    <ContainerItems key={category.id} imageUrl={category.url}>
                        <CategoryButton
                        onClick={()=>{
                            navigte(
                                {
                                pathname: `/cardapio`,      // Navega para a URL com a categoria
                                    search: `?categoria=${category.id}`
                        })
                        }}
                        
                        >{''}{category.name}{''}</CategoryButton>
                    </ContainerItems>
                ))}

            </Carousel>
        </Container>
    );
}