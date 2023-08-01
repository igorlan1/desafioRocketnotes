import styled from "styled-components"


// to keep the Header fixed in the screen, add height:100vh in the Container 
// of the page together other props .

export const Container = styled.header`
grid-area: header;

height: 116px;
width: 100%;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({theme}) => theme.COLORS.GRAY_200};

display: flex;
justify-content: space-between;
align-items: center;
padding: 24px 123px;

`

export const Profile = styled.div`
display: flex;
align-items: center;


 img {
    width: 64px;
    height: 64px;
    border-radius: 50%;

}

> div {
    display:grid ;
    flex-direction: column;
    margin-right: 16px;
    line-height: normal;

}

button {
    background-color: transparent;
    border: none;
    font-size:14px;
    color: ${({theme}) => theme.COLORS.GRAY_100}
}

strong { 
    font-size:14px;
    color: ${({theme}) => theme.COLORS.WHITE};
white-space: nowrap;
}
`
export const H1 = styled.h1`
display: flex;
align-items: center;
font-size: 24px;
color: ${({theme}) => theme.COLORS.PINK};

`

export const Input = styled.input`
margin: none;
width: 100%;
height: 54px;
margin: 0 64px;
background-color: ${({theme}) => theme.COLORS.GRAY_300};
border: none;
border-radius: 10px;
color: ${({theme}) => theme.COLORS.GRAY_100};
padding: 19px 24px;

`
