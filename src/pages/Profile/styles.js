import styled from "styled-components"

export const Container = styled.div `

> header {
    width: 100%;
    height: 144px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    position: relative;
    
 a {
    position: absolute;
    left: 144px;
    top: 64px
 }
 
}


> main {
    width: 100%;
    display: grid;
    height: 100vh;
   


   

    form {
        display:flex;
        flex-direction: column;
        justify-self: center;
        margin-top: 64px;
        gap: 8px;

       > avatar {
position: relative;
align-self: center;
 margin-top: -155px;
        width: 186px;
    height: 186px;

            img {
    width: 186px;
    height: 186px;
border-radius: 50%;
}

label {
     position: absolute;
     background-color: ${({theme}) => theme.COLORS.PINK};

    display: flex;
    height: 48px;
        width: 48px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        bottom: 7px;
        right: 7px;
        overflow: auto;
        cursor: pointer;

    input {
        display: none;
    }
    svg {
        height: 20px;
        width: 20px;
        color: black;
    }
}

       
    }

        box {
            margin-top: 17px;
        gap: 8px;
        display:flex;
        flex-direction: column;
        justify-self: center;
        }
    }
    
   
    
    
}



`