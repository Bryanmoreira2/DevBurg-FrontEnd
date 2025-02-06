import styled from "styled-components";
import ReactSelect from "react-select";
import {Button} from "../../../components/Button";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
`;

export const From = styled.form`
border-radius: 20px;
background-color: ${(props)=> props.theme.black};
padding: 32px;
width: 100%;
max-width: 380px;
display: flex;
flex-direction: column;
gap: 12px;
`;

export const InputGroup = styled.div`
display: flex;
flex-direction: column;
gap:4px;
`;

export const Input = styled.input`
width: 100%;
height: 48px;
border-radius: 5px;
padding: 0 12px;
border: none;
`;

export const Label = styled.label`
color: ${(props)=> props.theme.white};
font-size: 14px;

`;

export const Select = styled(ReactSelect)`

`;
export const LabelUpload = styled.label`
cursor: pointer;
border: 1px dashed ${(props)=> props.theme.white};
border-radius: 5px;
padding: 10px;
display: flex;
color: ${(props)=> props.theme.white};
margin: 20px 0 ;

>svg {
    width: 20px ;
    height: 20px ;
    fill:${(props)=> props.theme.white};
    margin-right: 4px;
}
input {
    display: none;
}
`;
export const SubmitButton = styled(Button)`
margin-top: 40px;
`;
export const ErroMessage = styled.span`
color:${(props)=> props.theme.darkRed};
font-size: 14px;
line-height: 80%;
font-weight:600;
`;
export const StyledWrapper = styled.div`
  .checkbox-wrapper-31:hover .check {
    stroke-dashoffset: 0;
  }

  .checkbox-wrapper-31 {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 35px;
    width: 100%;
    height: 25px;
  }

  .checkbox-wrapper-31 .background {
    fill: #ccc;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }

  .checkbox-wrapper-31 .stroke {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
    stroke-width: 2px;
    stroke-dashoffset: 100;
    stroke-dasharray: 100;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }

  .checkbox-wrapper-31 .check {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
    stroke-dashoffset: 22;
    stroke-dasharray: 22;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }

  .checkbox-wrapper-31 input[type=checkbox] {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    opacity: 0;
    -appearance: none;
    -webkit-appearance: none;
  }

  .checkbox-wrapper-31 input[type=checkbox]:hover {
    cursor: pointer;
  }

  .checkbox-wrapper-31 input[type=checkbox]:checked + svg .background {
    fill:${(props)=> props.theme.gren};
  }

  .checkbox-wrapper-31 input[type=checkbox]:checked + svg .stroke {
    stroke-dashoffset: 0;
  }

  .checkbox-wrapper-31 input[type=checkbox]:checked + svg .check {
    stroke-dashoffset: 0;
  }`;