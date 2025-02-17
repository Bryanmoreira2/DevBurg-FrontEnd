import styled from "styled-components";
import { Link as reactLink } from "react-router-dom";
import Bg from "../../assets/bglogo.svg"
import Bg2 from "../../assets/Group 195.svg"

export const Container = styled.div`
 display: flex;
 height: 100vh;
 width: 100vw;

`;
export const LeftContiner = styled.div`
background: url('${Bg}');
background-size: cover;
background-position: center;

height:  100%;
width: 100%;
max-width:50%;

display: flex;
align-items: center;
justify-content: center;


img{
    width: 80%;
}
`;
export const RightContiner = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;

height:  100%;
width: 100%;
max-width:50%;

background: url('${Bg2}');
background-color: #1e1e1e;

background-size: cover;
p{
    color: #ffff;
    font-size: 20px;
    font-weight: 800px;
}

`;
export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #ffffff;

  span{
    color:  ${(props)=>props.theme.purple};
    font-family: "Road Rage", sans-serif;
    ;
  }


`;
export const Form = styled.form`
display: flex;
flex-direction: column;
gap:20px;
padding: 20px;
width :100%;
max-width: 400px;
`;
export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap:5px;
width: 100%;

input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px ;
    padding: 0 16px
}
label{
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;}
p{
    font-size:14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;

}
`;
export const Link = styled(reactLink)`
    color: #fff;
    text-decoration: none;
`;


