import styled from 'styled-components';
import Textura from '../../assets/bglogo.svg'
import Bg from '../../assets/Group 195.svg'

export const Container = styled.div`
    width:100%;
    background:  linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
), 
url('${Bg}');
    background-color: #f0f0f0;
    min-height: 100vh;
`;

export const Banner = styled.div`
background: url('${Textura}');
background-color: #1f1f1f;
background-size: cover;
background-position: center;
display: flex;
align-items: center;
justify-content: center;
position: relative;

height: 180px;

img{
    height: 130px;
}
`;

export const Title = styled.h1`
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
text-align: center;
color: ${(props)=>props.theme.gren};
position: relative;

&::after{
    position: absolute;
    left: calc(50% + -28px);
    content: "";
    width: 56px;
    height: 4px;
    background-color: ${(props)=>props.theme.gren};
    bottom: 0;
}

`;

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 30%;
gap:20px;
width: 100%;
max-width: 1280px;
padding: 40px;
margin: 0 auto;

`;

// export const Container = styled.div``;

// export const Container = styled.div``;