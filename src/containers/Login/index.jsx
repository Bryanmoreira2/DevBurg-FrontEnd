/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { yupResolver } from "@hookform/resolvers/yup"; // Configura o yup como resolver para validações
import { useForm } from 'react-hook-form';            // Hook para manipular formulários no React
import * as yup from 'yup';                           // Biblioteca para validação de schemas
import { api } from '../../services/api';             // Configuração para chamadas à API
import { useNavigate } from 'react-router-dom';       // Hook para navegação entre páginas
import { toast } from 'react-toastify';               // Biblioteca para exibição de mensagens (toast)
import { Button } from "../../components/Button";     // Componente de botão reutilizável
import Logo from "../../assets/Logo 1.svg";           // Imagem da logo
import {
    Container,
    LeftContiner,
    RightContiner,
    Title,
    InputContainer,
    Form,
    Link,
} from "./styles";                                     // Componentes estilizados

// Componente principal para a página de login
export function Login() {
    const navigate = useNavigate();                   // Inicializa a função de navegação

    // Esquema de validação para os campos de email e senha
    const schema = yup.object({
        email: yup.string()
            .email('Digite um e-mail válido')         // Validação de formato do email
            .required('E-mail é obrigatório'),        // Validação de campo obrigatório
        password: yup.string()
            .min(6, 'A senha deve ter no mínimo 6 caracteres') // Validação de comprimento mínimo
            .required('Digite uma senha'),            // Validação de campo obrigatório
    }).required();

    // Configurações do formulário usando react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),                // Define o esquema de validação com yup
    });

    // Função chamada no envio do formulário
    const onSubmit = async (data) => {
        const { data: { token } } = await toast.promise(
            api.post('/session', {
                email: data.email,                    // Dados enviados: email
                password: data.password,              // Dados enviados: senha
            }),
            {
                pending: 'Verificando seus dados...', // Mensagem durante o processo
                success: {
                    render({ data }) {
                        setTimeout(() => {
                            navigate('/');            // Redireciona para a página inicial após login bem-sucedido
                        }, 2000);
                        return `Bem vindo ${data.data.name},`; // Mensagem de sucesso
                    }
                },
                error: 'Email ou Senha Incorretos🤯'  // Mensagem de erro
            }
        );

        localStorage.setItem('token', token);         // Armazena o token no localStorage
        console.log(response);                        // Log de depuração
    };

    return (
        <Container>
            {/* Lado esquerdo com a logo */}
            <LeftContiner>
                <img src={Logo} alt="Logo-Devburg" />
            </LeftContiner>

            {/* Lado direito com o formulário */}
            <RightContiner>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}> {/* Formulário com validação */}
                    <InputContainer>
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="exemplo@devburguer.com" 
                            {...register("email")}                 // Registra o campo email
                        />
                        <p>{errors?.email?.message}</p>           // Exibe erro de validação para email
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input 
                            type="password" 
                            placeholder="*********" 
                            {...register("password")}              // Registra o campo senha
                        />
                        <p>{errors?.password?.message}</p>        // Exibe erro de validação para senha
                    </InputContainer>
                    <Button type="submit">Entrar</Button>         // Botão para envio
                </Form>
                <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p> {/* Link para cadastro */}
            </RightContiner>
        </Container>
    );
}
