import styled from "styled-components"

export const Container = styled.section`
margin:40px 106px 0 123px ;

> h2 {
   // padding-bottom: 16px;
    margin-bottom: 24px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400; 
}
`