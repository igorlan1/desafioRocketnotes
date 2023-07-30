import styled from "styled-components"

export const Container = styled.button`
background: none;
color: ${({theme, $isactive}) => $isactive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};
border: none;
font-size: 16px;

&:hover {
scale: 1.2;
transition: 0.5s;
}


svg {
    margin-right: 8px;
    vertical-align: middle;
    font-size: 16px;
}

`