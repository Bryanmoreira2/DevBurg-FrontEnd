import styled from "styled-components";

export const Container = styled.div``;

export const EditButton = styled.button`
border: none;
background-color: ${(props) => props.theme.darkWhite};
height: 32px;
width: 32px;
border-radius: 8px;
margin: 0 auto;

display: flex;
align-items: center;
justify-content: center;

svg{
    width: 19px;
    height: 19px;
}

&:hover {
    background-color: ${(props) => props.theme.purple};

    svg{
        fill: ${(props) => props.theme.white};
    }
}


`;

export const ProductImage = styled.img`
  height: 80px;
  padding:12px;
  border-radius: 16px;
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
