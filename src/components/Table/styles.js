import styled from 'styled-components';

export const Root = styled.table`
width :100%;
border-collapse:collapse;
background-color: #fff;
border-radius: 25px;

`;

export const Header = styled.thead`

`;

export const Tr = styled.tr``;

export const Th = styled.th`
 padding: 16px;
 text-align: left;
 background-color: #484848;
 color: #ffff;
 border-bottom: 1px solid #cdcdcd;
 &:first-child {
    border-top-left-radius: 25px;
  }
  &:last-child {
    border-top-right-radius: 25px;
  }

`;

export const Td = styled.td`
padding: 16px;
color: #484848;
font-weight: 500;
line-height: 1.5;
text-align: left;

`;
export const Body= styled.tbody`

`;