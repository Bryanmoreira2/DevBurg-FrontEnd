import { useEffect, useState } from "react";
import { 
    Container, 
    Banner, 
    ContegoryMenu, 
    ProductsContainer, 
    ContegoryButton, 
    BackButton
} from "./styles";
import { api } from "../../services/api";
import { CardProduct } from "../../components/CardProduct";
import { formatPrice } from '../../utils/formatPrice.js';
import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState([]);
    const [filterdProducts, setfilterdProducts] = useState([]);

    const navigate = useNavigate();
    const { search } = useLocation();
    
    const queryParams = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get('categoria');
        return categoryId || 0;
    });

    // Carregar categorias e produtos
    useEffect(() => {
        async function loadCategories() {
            try {
                const { data } = await api.get('/categories');
                const newCategoria = [{ id: 0, name: 'Todos' }, ...data];
                setCategories(newCategoria);
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
            }
        }

        async function loadProducts() {
            try {
                const { data } = await api.get('/products');
                const newProducts = data.map((product) => ({
                    currencyValue: formatPrice(product.price),
                    ...product,
                }));
                setProduct(newProducts);
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        }

        loadCategories();
        loadProducts();
    }, []);

    // Atualizar categoria ativa quando a URL muda
    useEffect(() => {
        const categoryId = +queryParams.get('categoria');
        if (categoryId) {
            setActiveCategory(categoryId);
        } else {
            setActiveCategory(0);
        }
    }, [search]);

    // Filtrar produtos com base na categoria ativa
    useEffect(() => {
        if (activeCategory === 0) {
            setfilterdProducts(product);
        } else {
            const newFilteredProducts = product.filter(
                product => product.category_id === activeCategory
            );
            setfilterdProducts(newFilteredProducts);
        }
    }, [product, activeCategory]);

    // Função para lidar com o clique em uma categoria
    const handleCategoryClick = (categoryId) => {
        navigate({
            pathname: `/cardapio`,
            search: `?categoria=${categoryId}`
        });
        setActiveCategory(categoryId);
    };

    return (
        <Container>
            <Banner>
                <h1>O MELHOR
                    <br />
                    HAMBURGER
                    <br />
                    ESTÁ AQUI!
                    <span> Esse cardápio está irresistível!</span>
                </h1>
            </Banner>

            <ContegoryMenu>
                {categories.map(category => (
                    <ContegoryButton 
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        {category.name}
                    </ContegoryButton>
                ))}
                <BackButton onClick={() => navigate('/')}>Voltar</BackButton>
            </ContegoryMenu>

            <ProductsContainer>
                {filterdProducts.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>
        </Container>
    );
}