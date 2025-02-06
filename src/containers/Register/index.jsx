import { yupResolver } from "@hookform/resolvers/yup"; // Configura o yup como resolver para validações
import { useForm } from 'react-hook-form';            // Hook para manipular formulários no React
import * as yup from 'yup';                           // Biblioteca para validação de schemas
import { api } from '../../services/api';             // Configuração para chamadas à API
import { toast } from 'react-toastify';               // Biblioteca para exibição de mensagens (toast)
import { useNavigate } from "react-router-dom";       // Hook para navegação entre páginas
import {
    Container,
    LeftContiner,
    RightContiner,
    Title,
    InputContainer,
    Form,
    Link,
} from "./styles";                                     // Componentes estilizados
import { Button } from "../../components/Button";     // Componente de botão reutilizável
import Logo from "../../assets/Logo 1.svg";           // Imagem da logo

// Componente principal para a página de registro
export function Register() {
    const navigate = useNavigate();                   // Inicializa a função de navegação

    // Esquema de validação para os campos do formulário
    const schema = yup.object({
        name: yup
            .string()
            .required('Nome é obrigatório'),          // Campo nome é obrigatório
        email: yup
            .string()
            .email('Digite um e-mail válido')         // Validação de formato do email
            .required('E-mail é obrigatório'),        // Campo email é obrigatório
        password: yup
            .string()
            .min(6, 'A senha deve ter no mínimo 6 caracteres') // Validação de comprimento mínimo
            .required('Digite uma senha'),            // Campo senha é obrigatório
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais') // Valida se as senhas coincidem
            .required('Confirme a senha'),            // Campo de confirmação de senha é obrigatório
    }).required();

    // Configurações do formulário usando react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),                // Define o esquema de validação com yup
    });

    // Função chamada no envio do formulário
    const onSubmit = async (data) => {
        try {
            const { status } = await api.post('/users', {
                name: data.name,                      // Dados enviados: nome
                email: data.email,                    // Dados enviados: email
                password: data.password,              // Dados enviados: senha
            }, 
            {
                validateStatus: () => true            // Permite capturar o status da resposta
            });

            if (status === 200 || status === 201) {   // Caso sucesso
                setTimeout(() => {
                    navigate('/login');               // Redireciona para a página de login
                }, 2000);
                toast.success('Conta criada com sucesso!'); // Mensagem de sucesso
            } else if (status === 409) {              // Caso de email já cadastrado
                toast.error('Email já cadastrado! Faça login para acessar.');
            } else {                                  // Qualquer outro erro
                throw new Error();
            }
        } catch (error) {
            toast.error('Falha no Sistema! Tente novamente'); // Erro inesperado
        }
    };

    return (
        <Container>
            {/* Lado esquerdo com a logo */}
            <LeftContiner>
                <img src={Logo} alt="Logo-Devburg" />
            </LeftContiner>

            {/* Lado direito com o formulário */}
            <RightContiner>
                <Title>Criar Conta</Title>
                <Form onSubmit={handleSubmit(onSubmit)}> {/* Formulário com validação */}
                    <InputContainer>
                        <label>Nome</label>
                        <input 
                            type="text" 
                            placeholder="Seu nome" 
                            {...register("name")}                 // Registra o campo nome
                        />
                        <p>{errors?.name?.message}</p>           
                    </InputContainer>
                    <InputContainer>
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="exemplo@devburguer.com" 
                            {...register("email")}               // Registra o campo email
                        />
                        <p>{errors?.email?.message}</p>          
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input 
                            type="password" 
                            placeholder="*********" 
                            {...register("password")}            // Registra o campo senha
                        />
                        <p>{errors?.password?.message}</p>       
                    </InputContainer>
                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input 
                            type="password" 
                            placeholder="*********" 
                            {...register("confirmPassword")}     // Registra o campo de confirmação de senha
                        />
                        <p>{errors?.confirmPassword?.message}</p> 
                    </InputContainer>
                    <Button type="submit">Criar conta</Button>   
                </Form>
                <p>Já possui conta? <Link to="/login">Clique aqui.</Link></p> {/* Link para login */}
            </RightContiner>
        </Container>
    );
}
