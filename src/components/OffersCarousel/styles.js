import styled from "styled-components";

export const Container = styled.div`
 .carousel-item{
    padding-right: 40px;
    
 }
 overflow-x: hidden;
 .react-multi-carousel-list{
    overflow: visible;
 }
 .react-multiple-carousel__arrow--left:{
    left: 15px;
    top: 10px;
 }
 .react-multiple-carousel__arrow--right:{
    top: 10px;
 }
 padding-left: 30px;
 padding-bottom: 30px;
`;
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${(props)=>props.theme.gren };
    padding-bottom:12px;
    position: relative;
    text-align: center;
    margin: 70px 0;


    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color:${(props)=>props.theme.gren } ;
        left: calc(50% - 28px);
    }
`;
export const ContainerItems= styled.div`
background: url('${(props)=> props.imageUrl}');
background-size: cover;
background-position: center;
border-radius: 25px;

display:flex;
align-items: center;
padding: 20px 10px;
width: 100% ;
height: 250px;

p{
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    padding: 10px 30px;
    border-radius: 30px ;
    font-size: 22.5px;
    font-weight: bold;
    margin-top:50px;

}

`;
