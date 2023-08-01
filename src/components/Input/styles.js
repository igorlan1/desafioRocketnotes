import styled from "styled-components"

export const Container = styled.div`
background: ${({theme}) => theme.COLORS.GRAY_300};
width: 340px;
height: 56px;
border: none;
border-radius: 10px;
display: flex;
align-items: center;

&.today-password {

    background-color: blue;
}
input {
    margin-left: 18px;
       background:transparent;
width: 340px;
border: none;

}

padding-left: 12px;


`