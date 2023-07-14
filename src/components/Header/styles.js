import styled from "styled-components"

export const Container = styled.header`
grid-area: header;

height: 116px;
width: 100%;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({theme}) => theme.COLORS.GRAY_200};

display: flex;
justify-content: space-between;

padding: 24px 123px;

background: red;
`