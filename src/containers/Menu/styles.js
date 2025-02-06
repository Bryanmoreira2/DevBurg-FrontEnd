import styled from 'styled-components';
import BanerHumburg from '../../assets/Humburg.svg'
import Bg from '../../assets/Group 195.svg'
import{Link} from 'react-router-dom'

export const Container = styled.div`
width:100%;
min-height: 100vh;
background-color: #f0f0f0;

background:  linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
), 
url('${Bg}');

`;

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 480px;
width: 100%;
position: relative;


background: url('${BanerHumburg}');
background-color: #1f1f1f;
background-position: center;
background-size: cover;

h1{
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: #fff;
    position: absolute;

    right: 20%;
    top: 30%;

span{
        display: block;
        color: #fff;
        font-size:20px ;
    }
}

`;

export const ContegoryMenu = styled.div`

display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;

`;

export const ContegoryButton = styled (Link)`
text-decoration: none;
cursor: pointer;
background: ${(props) => props.$isActiveCategory ? (props)=>props.theme.secondDarkPurple : (props)=>props.theme.purple };
border-radius: 5px;
padding: 7px;
color: ${(props) => props.$isActiveCategory ? (props)=>props.theme.gren : '#ffff'};
font-size: 24px;
font-weight: 500;
border: none;
border-bottom : ${(props) => props.$isActiveCategory && `3px solid ${props.theme.gren}`};

&:hover{
    background:${(props)=>props.theme.darkPurple};
    border-bottom : ${(props) => `3px solid ${props.theme.gren}`};}
`;


export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 40px;
gap: 60px;
justify-content: center;
max-width: 1280px;
margin: 50px auto 0;

`;
export const BackButton = styled.button`
background-color:${(props)=>props.theme.purple};
font-size: 24px;
border: none;
color: #ffffff;
border-radius: 5px;
padding: 7px;

&:hover{
    background:${(props)=>props.theme.darkPurple};
    border-bottom : 3px solid ${(props)=>props.theme.gren};
}
`;