import { Container, Content, HeaderLink, LinkConteiner, Logout, Navigation, Opitons, Profile } from "./styles"
import {UserSquare,ShoppingCart} from '@phosphor-icons/react'
import { useNavigate,useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext.jsx";
export function Header(){
    const navigate = useNavigate()
    const {logout,userInfo}= useUser()

    const{pathname} = useResolvedPath()

function logoutUser(){
    logout()
    navigate('/login')
}
console.log(userInfo)
    return (
        <Container>
            <Content>
            <Navigation>

                <div>
                    <HeaderLink to="/" $isActive={pathname ==='/'}>
                        Home 
                    </HeaderLink>
                    <hr></hr>
                    <HeaderLink to="/cardapio"$isActive={pathname ==='/cardapio'}>
                        Cardápio
                    </HeaderLink>
                </div>
            </Navigation>
            <Opitons>
                <Profile>
                <UserSquare color="#fff"size={26}  />
                    <div>
                        <p>Olá,<span>{userInfo.name}</span></p>
                        <Logout onClick={logoutUser}>Sair</Logout>
                    </div>
                </Profile>
                <LinkConteiner> 
            <ShoppingCart color="#fff" size={24} />
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
            </LinkConteiner>
            </Opitons>
          
            </Content>
        </Container>
           
    
    )
}
