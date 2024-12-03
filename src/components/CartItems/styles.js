import styled from "styled-components";

export const EmptyCart= styled.p`
font-size: 20px;
text-align: center;
font-weight:bold ;


`;

export const ProductImg= styled.img`

height: 80px;
width: 80px;
border-radius: 16px;

`;

export const ButtonGroup= styled.div`
display:flex;
align-items: center;
gap:12px;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #fff;
    border-radius: 4px;
    background-color: #9758a6;
    border: none;
    transition: all 0.6s;

    &:hover{
        background-color: #6f357c;

    }

}
`;

export const ProductTotal= styled.p`

font-weight: bold;
`;

export const TrashImage =styled.img`
height:20px;
width:20px;
cursor: pointer;

&:hover{
    transform: scale(1.2);
    filter: invert(43%) sepia(90%) saturate(4992%) hue-rotate(1deg) brightness(104%) contrast(101%);

}
&:active{
    opacity: 0.5;
}

`;