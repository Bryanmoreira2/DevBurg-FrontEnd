import { navLinks } from './navLinks'
import Logo from '../../assets/Logo 1.svg'
import { SignOut } from "@phosphor-icons/react"
import { Container, Footer, Navlink, NavLinkContainer } from "./styles"

import { useUser } from "../../hooks/UserContext"
import { useResolvedPath } from 'react-router-dom'
export function SideNavAdmin () {

    const {logout,}= useUser()
    const {pathname} = useResolvedPath()



    return (
        <Container>
           <img src={Logo} alt='logo-dev-burg'/>
           <NavLinkContainer>
            {navLinks.map((link) => (
                <Navlink
                    key={link.id} 
                    to={link.path}
                $isActive ={pathname === link.path}
                    >
                        {link.icon} 
                        <span>
                        {link.label}
                        </span>
                    </Navlink>
            ))}
           </NavLinkContainer>
           <Footer>
            <Navlink to='/login' onClick={logout}>
                <SignOut/>
                <p>Sair</p>
            </Navlink>
           </Footer>
        </Container>
    )}