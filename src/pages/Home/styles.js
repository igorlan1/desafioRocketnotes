import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;

Button {

}

main {
padding: 40px 106px 58px 123px;
gap: 24px;
display: grid;
overflow-y: auto;

}


p {
         overflow: hidden;
         color : red;
         text-align: justify;
         height: 45px;
margin-top: 15px;
font-size: 16px;

}
`

export const Links = styled.ul`
    list-style: none;
    margin-top: 30px;
    display: flex;
    gap: 8px;
font-size: 12px;

    >li {
    margin-right: 8px;
    background-color: ${({theme}) => theme.COLORS.GRAY_200};
    padding: 8px 16px;
    border-radius:10px;

}
    

    `

export const Title = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: space-between;

h1 {
    font-size: 32px;
    font-weight: 400;
}
;

Button {
    width: 207px;
    height: 48px;
}
`
  