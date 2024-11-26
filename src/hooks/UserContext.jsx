import { createContext, useContext, useState, useEffect } from "react";

// Cria um contexto vazio que será usado para compartilhar dados entre componentes.
const UserContext = createContext({});

// Componente provedor para encapsular a aplicação ou parte dela.
export const UserProvider = ({ children }) => {
    
    // Estado que armazena as informações do usuário.
    const [userInfo, setUserInfo] = useState({});

    // Função para atualizar os dados do usuário e salvá-los no localStorage.
    const putUserData = (userInfo) => {
        setUserInfo(userInfo); // Atualiza o estado local.
        localStorage.setItem('devburg:userData', JSON.stringify(userInfo)); // Persiste no localStorage.
    };

    // Função para realizar o logout, limpando o estado e removendo os dados do localStorage.
    const logout = () => {
        setUserInfo({}); // Reseta o estado do usuário.
        localStorage.removeItem('devburg:userData'); // Remove os dados do localStorage.
    };

    // useEffect para carregar os dados do usuário do localStorage ao montar o componente.
    useEffect(() => {
        const userInfolocalStorage = localStorage.getItem('devburg:userData'); // Recupera os dados do localStorage.
        
        if (userInfolocalStorage) {
            setUserInfo(JSON.parse(userInfolocalStorage)); // Atualiza o estado se os dados existirem.
        }
    }, []); // Executa apenas uma vez, na montagem.

    // Retorna o provedor do contexto com os valores e funções disponíveis para os componentes filhos.
    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para acessar o contexto do usuário de forma simplificada.
export const useUser = () => {
    const context = useContext(UserContext); // Obtém o contexto atual.
    
    // Lança um erro se o hook for usado fora de um UserProvider.
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context; // Retorna o contexto.
};
