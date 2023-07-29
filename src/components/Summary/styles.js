import styled from "styled-components"

export const Container = styled.div`
background-color: ${({theme}) => theme.COLORS.GRAY_300};
width: 100%;
height: 222px;
padding: 32px 32px;


>h2 {
font-size: 24px;
}

>svg {
    height: 11px;
    width: 11px;
    margin-right: 6px;
    color: ${({theme}) => theme.COLORS.PINK};
}

`