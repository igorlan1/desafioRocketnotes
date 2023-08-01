import styled from "styled-components"
import BackgroundImg from "../../assets/imagem.png"

export const Container = styled.div`
height: 100vh;
display: flex;

box {
display: grid;
flex: 1;
justify-content: space-around;
}



`

export const Form = styled.form`
 display:flex;
        flex-direction: column;
        gap: 8px;
align-self: center;
flex: 1;
width: 340px;


        h1 {
                font-size: 48px;
     color: ${({theme}) => theme.COLORS.PINK};
                
        }
        p {
                font-size: 14px;
        }
        h2 {
              margin:48px 0  ;
        }
        
       Button svg {
        display: none;
       }
       .buttontext {
        margin-top: 42px;
       }

`
export const Background = styled.div`
background: url(${BackgroundImg}) no-repeat;
background-size: cover;
width: 803px;
height: 100vh;
flex: 1;

`


