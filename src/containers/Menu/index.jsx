import { useEffect, useState } from "react";                    // Hooks para manipulação de estado e efeitos colaterais
import { 
    Container, 
    Banner, 
    ContegoryMenu, 
    ProductsContainer, 
    ContegoryButton, 
    BackButton
} from "./styles";                                              // Componentes estilizados
import { api } from "../../services/api";                       // Configuração da API para chamadas HTTP
import { CardProduct } from "../../components/CardProduct";     // Componente para exibir produtos
import { formatPrice } from '../../utils/formatPrice.js';       // Função para formatar preços
import { useLocation, useNavigate } from "react-router-dom";                 // Navegação entre rotas

// Componente principal do menu
export function Menu() {
    const [categories, setCategories] = useState([]);           // Estado para armazenar as categorias
    const [product, setProduct] = useState([]);                 // Estado para armazenar os produtos
    const [filterdProducts, setfilterdProducts] = useState([]); // Estado para armazenar produtos filtrados
    const navigate = useNavigate();                             // Função para navegação entre páginas
    
    
    const {search}= useLocation();                             // Pegar o valor da busca
    const queryParams = new URLSearchParams(search);             // Pegar os parâmetros da URL
   

    const [activeCategory, setActiveCategory] = useState(()=>{  // Estado para armazenar a categoria ativa
        const categoryId =+ queryParams.get('categoria');       // Pegar a categoria da URL
        
        if(categoryId){
            return categoryId;
        }
        return 0
    });    // Estado para controlar a categoria ativa

    // Carregar categorias e produtos ao montar o componente
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');       // Busca as categorias da API
            const newCategoria = [{ id: 0, name: 'Todos' }, ...data]; // Adiciona uma opção para "Todos"
            setCategories(newCategoria);                        // Define as categorias no estado
        }

        async function loadProducts() {
            const { data } = await api.get('/products');         // Busca os produtos da API
            const newProducts = data.map((product) => ({        // Formata os produtos com o preço formatado
                currencyValue: formatPrice(product.price),
                ...product,
            }));
            setProduct(newProducts);                            // Define os produtos no estado
        }

        loadCategories();
        loadProducts();
    }, []);                                                     // Executa apenas uma vez ao montar o componente

    // Atualiza os produtos filtrados quando a categoria ativa ou os produtos mudam
    useEffect(() => {
        if (activeCategory === 0) {                             // Exibe todos os produtos se a categoria for "Todos"
            setfilterdProducts(product);
        } else {
            const newFilteredPronducts = product.filter(        // Filtra os produtos pela categoria ativa
                product => product.category_id === activeCategory
            );
            setfilterdProducts(newFilteredPronducts);           // Define os produtos filtrados no estado
        }
    }, [product, activeCategory]);                              // Depende de mudanças nos produtos ou categoria ativa

    return (
        <Container>
            {/* Banner principal com título */}
            <Banner>
                <h1>O MELHOR
                    <br />
                    HAMBURGER
                    <br />
                    ESTÁ AQUI!
                    <span> Esse cardápio está irresistível!</span>
                </h1>
            </Banner>

            {/* Menu de categorias */}
            <ContegoryMenu>
                {categories.map(category => (
                    <ContegoryButton 
                        key={category.id}                       // Chave única para cada botão de categoria
                        $isActiveCategory={ 
                            category.id === activeCategory}     // Ativa o botão da categoria selecionada
                        onClick={() => {                        // Define a categoria ativa ao clicar
                            navigate(
                                {
                                    pathname: `/cardapio`,      // Navega para a URL com a categoria
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true,              // Substitui a entrada no histórico
                                }
                            );
                            setActiveCategory(category.id);     // Atualiza a categoria ativa
                        }}
                    >
                        {category.name} 
                                             {/* Exibe o nome da categoria */}
                    </ContegoryButton>
                ))}
                  <BackButton onClick={()=> navigate('/')}>voltar</BackButton> 
            </ContegoryMenu>

            {/* Lista de produtos filtrados */}
            <ProductsContainer>
                {filterdProducts.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>
        </Container>
    );
}
